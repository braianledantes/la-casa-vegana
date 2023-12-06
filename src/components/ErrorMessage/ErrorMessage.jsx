import { Alert } from "react-bootstrap"

export function ErrorMessage() {
    return (
        <Alert className="error" variant="danger">
            <Alert.Heading>Oh! Ha ocurrido un error!</Alert.Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel incidunt minus doloremque soluta iusto est, praesentium odio necessitatibus veritatis sapiente placeat sed recusandae ipsam illo fuga ad, voluptas temporibus doloribus.
            </p>
        </Alert>
    )
}