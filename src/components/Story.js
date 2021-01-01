// Destructure the news story into story component i.e story, and index objects

const Story = ({story}) => {

    // story object has a url - the href - i.e hyperlink
    // story object anchor is the title
    // h5 is the index - single parameter with a . after the value used to format

    return (
        <span>  
            <a href={story.url}>{story.title}</a>
        </span>
    );
}

export default Story;