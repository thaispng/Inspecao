import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../lib/mongoDB';
import FormInspecao from '../../../../models/FormModel';

export async function POST(req) {
    try {
        const { nameConstructions, addressConstructions, inicialDate, finalDate, status, description } = await req.json();
        if (!nameConstructions || !addressConstructions || !inicialDate || !finalDate || !status || !description) {
            return NextResponse.json({ message: 'Preencha todos os campos para continuar.' }, { status: 400 });
        }
        await connectMongoDB();
        const form = new FormInspecao({
            nameConstructions,
            addressConstructions,
            inicialDate,
            finalDate,
            status,
            description
        });
        const savedForm = await form.save();
        return NextResponse.json({ message: 'Informações da obra salvas', form: savedForm }, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar inspeção da obra:', error);
        return NextResponse.json({ message: 'Erro ao criar inspeção da obra.' }, { status: 500 });
    }
}
