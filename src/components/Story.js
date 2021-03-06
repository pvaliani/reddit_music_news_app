// Destructure the news story into story component i.e story, and index objects

const Story = ({title, url, thumbnail}) => {

    // story object has a url - the href - i.e hyperlink
    // story object anchor is the title
    // h5 is the index - single parameter with a . after the value used to format

    return (
        <>  
            <h4>    </h4>
            <a href={url}>{title} </a>
            <h4>    </h4>
            <img src={thumbnail}></img>
        </>
    );
}

export default Story;

