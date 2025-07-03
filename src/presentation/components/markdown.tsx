import fs from 'fs'
import showdown from 'showdown'

type Props = {
    path: string
}

export default function Markdown({
    path
}: Props) {
    const converter = new showdown.Converter()
    const file = fs.readFileSync(path, 'utf8')
    const html = converter.makeHtml(file)
    return (
        <main
            style={{
                paddingRight: '2rem',
                paddingLeft: '2rem'
            }}
            dangerouslySetInnerHTML={{
                __html: html
            }}
        />
    )
}
