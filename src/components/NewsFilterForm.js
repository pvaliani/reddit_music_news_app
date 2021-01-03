// NewsFilterForm takes in user input text

const NewsFilterForm = ({ onUserInput }) => {

    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput);

    };

    // Create a new input text field where handleFilterInput is the input to onChange

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

export default NewsFilterForm;