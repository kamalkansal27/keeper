import './Footer.css'

export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='footer'>
            <p>Copyright ⓒ {year}</p>
        </div>
    )
}
