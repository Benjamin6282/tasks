import React from "react";
import "./App.css";
import img from "./Loon.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>

            <h1>This is heading text</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World! Edited by Benjamin Cobb
            </p>

            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "auto",
                                height: "auto",
                                backgroundColor: "red",
                            }}
                        >
                            First column
                        </div>
                    </Col>
                    <Col>Second column</Col>
                </Row>
            </Container>

            <img src={img} width={900} height={600} alt="A picture of a loon" />
        </div>
    );
}

export default App;
