// Destructure the news story into story component i.e story, and index objects

const Story = ({title, url}) => {

    // story object has a url - the href - i.e hyperlink
    // story object anchor is the title
    // h5 is the index - single parameter with a . after the value used to format

    return (
        <>  
            <h2> Headline: {title}</h2>
            <h4> Link: {url}</h4>
            {/* <a href={story}>{story}</a> */}
        </>
    );
}

export default Story;

// WHEN COMING BACK TO THIS TIDT THE STORY AND STORY LIST - USE THE TOP 20 FILE FOR REFERENCE ON OW TO POINT TO OBJECT PARAMETERS