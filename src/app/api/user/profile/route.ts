import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Nome inválido" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Não autenticado" },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);

    if (!payload?.email) {
      return NextResponse.json(
        { error: "Token inválido" },
        { status: 401 }
      );
    }

    // atualiza usuário pelo email (mantendo sua arquitetura atual)
    const { data, error } = await supabase
      .from("users")
      .update({ name })
      .eq("email", payload.email)
      .select("id, email, name")
      .single();

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Erro ao atualizar usuário" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      user: data,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}