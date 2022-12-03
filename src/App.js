import { Container, Content, Row, Column } from "./styles";
import Input from './components/Input'
import Button from "./components/Button";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }
    else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }
    else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    }
    else {
      const multiplic = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplic));
      setOperation('');
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }
    else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }

  const handlePercentNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('');
    }
    else {
      const percentResult = Number(firstNumber) * (Number(currentNumber)/100);
      setCurrentNumber(String(percentResult));
      setOperation('');
    }
  }

  const handlePowNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('P');
    }
    else {
      const percentResult = Math.pow(Number(firstNumber),(Number(currentNumber)));
      setCurrentNumber(String(percentResult));
      setOperation('');
      
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+': 
          handleSumNumbers();
          setFirstNumber('')
          break;
        case '-':
          handleMinusNumbers();
          setFirstNumber('')
          break;
        case '*':
          handleMultNumbers();
          setFirstNumber('')
          break;
        case '/':
          handleDivNumbers();
          setFirstNumber('')
          break;
        case 'P':
          handlePowNumbers();
          setFirstNumber('')
          break;    
        default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/> 
        <Row>
            <Button label="C" onClick={() => handleOnClear()}/>
            <Button label="P" onClick={() => handlePowNumbers()}/>
            <Button label="%" onClick={() => handlePercentNumbers()}/>
            <Button label="00" onClick={() => handleAddNumber('00')}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="+" onClick={() => handleSumNumbers()}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={() => handleMinusNumbers()}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="*" onClick={() => handleMultNumbers()}/>
          </Row>
          <Row>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="/" onClick={() => handleDivNumbers()}/>
            <Button label="=" onClick={() => handleEquals()} />
          </Row>
          
      </Content>
    </Container>
  );
}

export default App;
