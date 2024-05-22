import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../lib/mongoDB';
import bcrypt from 'bcryptjs';
import User from '../../../../models/user'

export async function POST(req) {
  try {
    const { name, lastName, email, password } = await req.json();
    if (!name || !lastName || !email || !password) {
      return NextResponse.json({ message: 'Preencha todos os campos para continuar.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();

    const user = await User.create({ name, lastName, email, password: hashedPassword });
    return NextResponse.json({ message: 'Usuário criado com sucesso!', user }, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return NextResponse.json({ message: 'Erro ao criar usuário!', error: error.message }, { status: 500 });
  }
}
