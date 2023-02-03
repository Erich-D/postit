
const center: React.CSSProperties = {
    position: "relative",
    top: '50%',
    transform: 'translateY(-50%)'
}

const div: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
}

type HeaderProps = {title: string}

export function Header(props: HeaderProps){
    return(
        <div style={div}>
            <h1 style={center}>{props.title}</h1>
        </div>
    )
}