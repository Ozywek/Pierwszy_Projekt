  import dziejepolski from './assets/dziejepolski.jpg';




  function Filmy({plakat, tytul, rok}): do_filmow{
    return(
        <div>
            <img src={plakat} alt={tytul} height="200" width="150" />
            <br />
            <h2>{tytul}</h2>
            <i>{rok}</i>
        </div>
    );
  }

  function Ksiazki({okladka, tytul, strony, rok}: do_ksiazek){
      return (
        <div>
          <img src={okladka} alt={tytul} height="200" width="150" />
          <br />
          <p>{tytul}</p>
          <p>{strony}</p>
          <p>{rok}</p>
        </div>
      );
  }
  function Muzyka({}: do_muzyki){
    return (
        <div>
            

            


        </div>
    );
  }





  function App(){





    
    return(

     <div>  
        

        
<h2>Album 1: The College Dropout (2004)</h2>
<ul>
    <li>We Don't Care – 239 s</li>
    <li>All Falls Down – 223 s</li>
    <li>Jesus Walks – 193 s</li>
    <li>Slow Jamz – 316 s</li>
    <li>Through the Wire – 221 s</li>
    <li>Family Business – 278 s</li>
</ul>

<h2>Album 2: Graduation (2007)</h2>
<ul>
    <li>Good Morning – 195 s</li>
    <li>Champion – 167 s</li>
    <li>Stronger – 312 s</li>
    <li>I Wonder – 243 s</li>
    <li>Good Life – 207 s</li>
    <li>Flashing Lights – 237 s</li>
</ul>


        <h1> Filmy </h1>
        <div>
            <Filmy plakat={dziejepolski} tytul="2001: Odyseja kosmiczna" rok={1968} />
            <Filmy plakat={dziejepolski} tytul="Gwiezdne wojny: część V – Imperium kontratakuje" rok={1980} />
            <Filmy plakat={dziejepolski} tytul="Projekt Hail Mary" rok={2026} />

        </div>
        <div>
            <Ksiazki okladka={dziejepolski} tytul="Zbrodnia i Kara" strony={416} rok={1866} />
            <Ksiazki okladka={dziejepolski} tytul="Harry Potter i Kamień Filozoficzny" strony={328} rok={1997} />
            <Ksiazki okladka={dziejepolski} tytul="Lalka" strony={632} rok={1890 } />
        </div>
     </div>
    );
  }
  

  interface do_filmow {
    plakat: string;
    tytul: string;
    rok: number;
  }

  interface do_ksiazek {
    okladka: string;
    tytul: string;
    strony: number;
    rok: number;
  }

  interface do_muzyki {



  }

  export default App
