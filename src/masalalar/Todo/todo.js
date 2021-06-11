import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    Row,
    Table,
    Progress
} from "reactstrap";

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            work : '',
            todos: [],
            id: 0
        }
    }
    handleInputChange = (event) =>{
        this.setState({
            work: event.target.value
        })
    }
    addClickButton = () =>{
        if(this.state.work !== ''){
            let todo = {
                id: this.state.id,
                work: this.state.work,
                isComplate: false
            }
            this.setState({
                todos:this.state.todos.concat(todo),
                id: this.state.id + 1,
                work:''
            })
        }
        else  alert("Uzur okajon siz malumot umuman kiritmadingiz!")
    }
    deleteClickButton=(id)=>{
        this.setState({
            todos:this.state.todos.filter((item)=>{
                if(item.id !== id)
                    return  item
            })
        })
    }
    checkedinput=(id)=>{
        this.setState({
            todos:this.state.todos.filter((item)=>{
                if(item.id === id)
                    item.isComplate = !item.isComplate
                      return item
            })
        })
    }
    render() {
        let prop = this.props;
        return (
            <div>
                <Container>
                    <Row className="mt-2">
                        <Col md={{size: 10, offset: 1}}>
                            <Card>
                                <CardHeader>
                                    <span style={{"font-size": 24 + "px"}}>
                                        Login = {prop.name}  " "
                                    </span>
                                    <span style={{"font-size": 24 + "px"}}>
                                        Parol = {prop.password}
                                    </span>
                                    <InputGroup>
                                        <Input value={this.state.work}  placeholder="Add words ..." onChange={this.handleInputChange}/>
                                            <InputGroupAddon addonType="append">
                                                <Button color="success" onClick={this.addClickButton}>
                                                    Add words
                                                </Button>
                                            </InputGroupAddon>
                                    </InputGroup>
                                </CardHeader>
                                <CardBody>
                                    <Table className="text-center table-bordered">
                                        <tbody>
                                        {this.state.todos.map((item)=>{
                                            return <tr>
                                                <td><input checked={item.isComplate} onClick={()=>this.checkedinput(item.id)} type="checkbox"/></td>
                                                <td>{item.work}</td>
                                                <td><Button color="danger" onClick={()=> this.deleteClickButton(item.id)}>Delete</Button></td>
                                            </tr>
                                        })}
                                        </tbody>
                                    </Table>
                                    <Progress color="info" value={this.state.todos.filter((item)=>{
                                        if(item.isComplate)
                                            return  item
                                    }).length * 100 / (this.state.todos.length)}>
                                        {this.state.todos.filter((item)=>{
                                            if(item.isComplate)
                                                return  item
                                        }).length * 100 / (this.state.todos.length)}%
                                    </Progress>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Todo;