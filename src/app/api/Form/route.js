import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../lib/mongoDB';
import FormInspecao from '../../../../models/FormModel';

export async function POST(req) {
    try {
        const { nameConstructions, addressConstructions, inicialDate, finalDate, status, description, cep, neighborhood, city, number } = await req.json();
        if (!nameConstructions || !addressConstructions || !inicialDate || !finalDate || !status || !description || !cep || !neighborhood || !city || !number) {
            return NextResponse.json({ message: 'Preencha todos os campos para continuar.' }, { status: 400 });
        }
        await connectMongoDB();
        const form = new FormInspecao({
            nameConstructions,
            addressConstructions,
            inicialDate,
            finalDate,
            status,
            description,
            cep,
            neighborhood,
            city,
            number
        });
        const savedForm = await form.save();
        return NextResponse.json({ message: 'Informações da obra salvas', form: savedForm }, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar inspeção da obra:', error);
        return NextResponse.json({ message: 'Erro ao criar inspeção da obra.' }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectMongoDB();
        const forms = await FormInspecao.find({});
        console.log('forms:', forms);
        return NextResponse.json({ forms }, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar inspeções da obra:', error);
        return NextResponse.json({ message: 'Erro ao buscar inspeções da obra.' }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const { id } = req.query;
        const { nameConstructions, addressConstructions, inicialDate, finalDate, status, description, cep, neighborhood, city, number } = await req.json();
        if (!nameConstructions || !addressConstructions || !inicialDate || !finalDate || !status || !description || !cep || !neighborhood || !city || !number) {
            return NextResponse.json({ message: 'Preencha todos os campos para continuar.' }, { status: 400 });
        }
        await connectMongoDB();
        const form = await FormInspecao.findById(id);
        form.nameConstructions = nameConstructions;
        form.addressConstructions = addressConstructions;
        form.inicialDate = inicialDate;
        form.finalDate = finalDate;
        form.status = status;
        form.description = description;
        form.cep = cep;
        form.neighborhood = neighborhood;
        form.city = city;
        form.number = number;
        const savedForm = await form.save();
        return NextResponse.json({ message: 'Informações da obra atualizadas', form: savedForm }, { status: 200 });
    } catch (error) {
        console.error('Erro ao atualizar inspeção da obra:', error);
        return NextResponse.json({ message: 'Erro ao atualizar inspeção da obra.' }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ message: 'ID da inspeção não fornecido.' }, { status: 400 });
        }
        await connectMongoDB();
        await FormInspecao.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Inspeção da obra deletada.' }, { status: 200 });
    } catch (error) {
        console.error('Erro ao deletar inspeção da obra:', error);
        return NextResponse.json({ message: 'Erro ao deletar inspeção da obra.' }, { status: 500 });
    }
}

