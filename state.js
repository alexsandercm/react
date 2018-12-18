

const HelloWorld = (props)=> (
<div>
    <h1>Hello {props.name}!</h1>
</div>
);

class Hello extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nome: "Alexsander",
            numero: 0
        };
        this.addCont = this.addCont.bind(this);
    }

    addCont(){
        const contagem = this.state.numero;
        this.setState({numero: contagem+1})
    }   

    render (){
        return (
            <div>
                 <HelloWorld name={this.state.nome} /><br />
                 {this.state.numero}<br />
                 <button onClick={this.addCont}>+</button>
            </div>
        );
    }
};
