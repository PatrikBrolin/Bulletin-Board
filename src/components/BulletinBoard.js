import ReactPost from './ReactPost'
import styles from './BulletinBoard.module.scss'
const Questions = [
	{
		question: "Vad är tre fördelar med att använda React?",
		awnser: "1: det är enkelt att återanvända komponenter istället för att man behöver skriva samma sak flera gånger. 2: Snabb och snygg användarupplevelse eftersom man endast behöver uppdatera komponenter istället för hela sidan. 3: React har en stor community vilket gör att det ofta är enkelt att hitta lösningar på problem."
	},
	{
		question:
			"Vad betyder Single Page Application och vad skiljer det från en 'Vanlig' webbplats?",
		awnser: "Single Page Application betyder att hela websidan laddas en gång. Istället för att man vid klick via länkar till olika sidor behöver ladda om hela webbsidan så laddas endast den komponent som behöver laddas om. Detta resulterar i mindre trafik via nätverket och en snabbare användarupplevelse",
	},
	{
		question: "Nämn tre skillnader mellan React och Angular?",
		awnser: "1: Angular är ett ramverk medans React är ett bibliotek. 2: React går att kombinera med andra programerings bibliotek. Angular är mer låst. 3: React skrivs med Javascript, Angular använder Typescript ",
	},
];

const BulletinBoard = () => {
	return(
    <main className={styles.main}> 
    {Questions.map((question, index)=> (
      <ReactPost key={index} {...question}/>
    ))}
    </main>
  );
};

export default BulletinBoard;
