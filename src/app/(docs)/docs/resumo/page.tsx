import DocsNav from '@/components/ui/docs-nav'
import Markdown from '@/presentation/components/markdown'

export default function Resumo() {
    return (
        <>
            <DocsNav />
            <Markdown path="README.md" />
        </>
    )
}
