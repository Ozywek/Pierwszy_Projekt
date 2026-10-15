// interface Props {
// plakat: string;
// tytul: string;
// rok: number;
// }
  import dziejepolski from './assets/dziejepolski.jpg';




  function Greeter(props){
    console.log(props);

      const plik = props.plik;
      const tytul = props.tytul;
      const strony = props.strony;
      const rok = props.rok;

      return (
        <div>
          <img src={plik} alt={tytul} height="200" width="150" />
          <br />
          <p>{tytul}</p>
          <p>{strony}</p>
          <p>{rok}</p>
        </div>
      );
    


      
  }


  function App(){
    return(
      <div>
          <Greeter plik={dziejepolski} tytul="Dzieje Polski" strony="1414310" rok="2020" />
          <Greeter plik={dziejepolski} tytul="Harry Potter i Kamień Filozoficzny" strony="312321" rok="2231020" />
          <Greeter plik={dziejepolski} tytul="Dzieje Polski" strony="1414310" rok="2020" />
      </div>
    );


  }



  export default App
