import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => text + val);
  };

  const calculateResult = () => {
    try {
      setResult(eval(text));
    } catch (error) {
      setResult("Error");
    }
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className='calc-wrapper'>
        <div className='input-wrapper'>
          <div className='input'>{text || "0"}</div>
          <div className='result'>{result || ""}</div>
        </div>

        <Row gutter={[16, 16]} style={{paddingBottom:'7px'}}>
          <Col span={6}>
            <Button block className="dark-button" onClick={resetInput}>C</Button>
          </Col>
          <Col span={6}>
            <Button block className="dark-button" onClick={() => addToText("+")}>+/-</Button>
          </Col>
          <Col span={6}>
            <Button block className="dark-button" onClick={() => addToText("%")}>%</Button>
          </Col>
          <Col span={6}>
            <Button block className="blue-button" onClick={() => addToText("/")}>÷</Button>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{paddingBottom:'7px'}}>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("7")}>7</Button>
          </Col>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("8")}>8</Button>
          </Col>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("9")}>9</Button>
          </Col>
          <Col span={6}>
            <Button block className="blue-button" onClick={() => addToText("*")}>×</Button>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{paddingBottom:'7px'}}>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("4")}>4</Button>
          </Col>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("5")}>5</Button>
          </Col>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("6")}>6</Button>
          </Col>
          <Col span={6}>
            <Button block className="blue-button" onClick={() => addToText("-")}>−</Button>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{paddingBottom:'7px'}}>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("1")}>1</Button>
          </Col>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("2")}>2</Button>
          </Col>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText("3")}>3</Button>
          </Col>
          <Col span={6}>
            <Button block className="blue-button" onClick={() => addToText("+")}>+</Button>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Button block className="light-button" onClick={() => addToText("0")}>0</Button>
          </Col>
          <Col span={6}>
            <Button block className="light-button" onClick={() => addToText(".")}>.</Button>
          </Col>
          <Col span={6}>
            <Button block className="blue-button" onClick={calculateResult}>=</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
