function Prompt(props){
    function x(){
        window.confirm("You lost :(, thanks for playing!");
        setInterval(()=>{
            window.location.reload();
        },0)   
    }
    function y(){
        window.confirm("Pat yourself on the back you won! :) You have a great memory!");
        setInterval(()=>{
            window.location.reload();
        },0)   
    }
    if(props.gameCompleted){
        return(
            <>
                {y()}
            </>
        )
    }
    if(props.gameOver){
        return(
            <>
                {x()}
            </>
        );
    }
}
export default Prompt;