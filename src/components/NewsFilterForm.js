const NewsFilterForm = ({onUserInput}) => {

    const HandleUserInput = (event) => {
        const onUserInput = event.target.value;
        onUserInput(userInput);

    };

    return (
        <>
        <span>Filter By Story:</span>
        <input 
          type="text" 
          placeholder="search news..."
          onChange={handleFilterInput}
        />
      </>

    )




};