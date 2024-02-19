function Prompt(props){
    function x(){
        const userConfirm=window.confirm("You lost :(, thanks for playing!");
        if(userConfirm){
            window.location.reload();
        }
    }
    function y(){
        const userConfirm=window.confirm("Pat yourself on the back you won! :) You have a great memory!");
        if(userConfirm){
            window.location.reload();
        }
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