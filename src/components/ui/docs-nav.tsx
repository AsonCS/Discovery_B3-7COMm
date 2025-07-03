import Link from 'next/link'

export default function DocsNav() {
    return (
        <nav>
            <ol>
                <li>
                    <Link href="/docs/proposta">
                        Proposta
                    </Link>
                </li>
                <li>
                    <Link href="/docs/resumo">
                        Resumo
                    </Link>
                </li>
            </ol>
        </nav>
    )
}
