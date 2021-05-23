import { Jumbotron, Button } from 'reactstrap';

export default function Banner(props) {

    return (
        <div style={{ backgroundColor: 'var(--BG1)' }}>
            <Jumbotron>
                <h1 className="display-3">{props.data.title000}</h1>
                <br/>
                <p className="lead">{props.data.text000}</p>
                <hr className="my-2" />
                <br/>

                <p className="lead">
                    <Button color="primary" href={props.data.text001}>GitHub</Button>
                </p>
                <br />
            </Jumbotron>
        </div>
    );

}