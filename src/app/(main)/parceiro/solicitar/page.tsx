'use client'

import { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { Header } from '@/presentation/components/layout/Header'
import { Button } from '@/shared/design-system/components/Button'

export default function CriarCampanhaPage() {
    const [titulo, setTitulo] = useState('')
    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prazoPagamento, setPrazoPagamento] =
        useState('')
    const [taxaJuros, setTaxaJuros] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = {
            titulo,
            valor: parseFloat(valor),
            descricao,
            prazoPagamento,
            taxaJuros: parseFloat(taxaJuros)
        }
        console.log(
            'Dados do formulário:',
            formData
        )
        // TODO: Implementar a lógica de envio para o backend
        alert('Campanha enviada para análise!')
    }

    return (
        <>
            <Header hasNav={false} />
            <main className="flex min-h-screen flex-col items-center bg-gray-50 p-4 sm:p-8 md:p-24">
                <div className="w-full max-w-4xl">
                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">
                                    Crie sua
                                    Campanha de
                                    Empréstimo
                                </CardTitle>
                                <CardDescription className="text-md">
                                    Preencha os
                                    campos abaixo
                                    para solicitar
                                    seu empréstimo
                                    no formato de
                                    vaquinha
                                    virtual.
                                    Capriche na
                                    descrição para
                                    atrair
                                    investidores!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="space-y-2">
                                    <Label htmlFor="titulo">
                                        Título da
                                        Campanha
                                    </Label>
                                    <Input
                                        id="titulo"
                                        placeholder="Ex: Colheita de Café Especial no Sul de Minas"
                                        value={
                                            titulo
                                        }
                                        onChange={(
                                            e
                                        ) =>
                                            setTitulo(
                                                e
                                                    .target
                                                    .value
                                            )
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="descricao">
                                        Sua
                                        História e
                                        Descrição
                                        do Projeto
                                    </Label>
                                    <Textarea
                                        id="descricao"
                                        placeholder="Conte sobre você, sua propriedade e como o empréstimo ajudará no seu projeto. Detalhe o que será feito com o dinheiro."
                                        className="min-h-[150px]"
                                        value={
                                            descricao
                                        }
                                        onChange={(
                                            e
                                        ) =>
                                            setDescricao(
                                                e
                                                    .target
                                                    .value
                                            )
                                        }
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="valor">
                                            Valor
                                            Necessário
                                            (R$)
                                        </Label>
                                        <Input
                                            id="valor"
                                            type="number"
                                            placeholder="15000"
                                            value={
                                                valor
                                            }
                                            onChange={(
                                                e
                                            ) =>
                                                setValor(
                                                    e
                                                        .target
                                                        .value
                                                )
                                            }
                                            required
                                            min="1"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="prazo">
                                            Prazo
                                            para
                                            Pagamento
                                        </Label>
                                        <Select
                                            onValueChange={
                                                setPrazoPagamento
                                            }
                                            value={
                                                prazoPagamento
                                            }
                                            required
                                        >
                                            <SelectTrigger id="prazo">
                                                <SelectValue placeholder="Selecione o prazo" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="6">
                                                    6
                                                    meses
                                                </SelectItem>
                                                <SelectItem value="12">
                                                    12
                                                    meses
                                                </SelectItem>
                                                <SelectItem value="18">
                                                    18
                                                    meses
                                                </SelectItem>
                                                <SelectItem value="24">
                                                    24
                                                    meses
                                                </SelectItem>
                                                <SelectItem value="36">
                                                    36
                                                    meses
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="juros">
                                            Taxa
                                            de
                                            Juros
                                            Oferecida
                                            (%
                                            a.a.)
                                        </Label>
                                        <Input
                                            id="juros"
                                            type="number"
                                            placeholder="15"
                                            value={
                                                taxaJuros
                                            }
                                            onChange={(
                                                e
                                            ) =>
                                                setTaxaJuros(
                                                    e
                                                        .target
                                                        .value
                                                )
                                            }
                                            required
                                            min="0"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href="/parceiro/acompanhar">
                                    <Button
                                        label="Enviar para Análise"
                                        variant='secondary-filled'
                                    />
                                </Link>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </main>
        </>
    )
}
