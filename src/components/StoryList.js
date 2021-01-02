import Story from "./Story";

// The storyList takes in destructured story objects. These are mapped to a new array called storyNodes 

const StoryList = ({stories}) => {
    
    const storyNodes = stories.map((story) => {

        // Store title, url and img thumbnail as props to pass to story
        // The path of the object data sought is written in relation to a story object key/value pair where we reference the value in relation to each parameter in the .json

        let title = story["data"].title;
        let url = story["data"].url;
        let thumbnail = story["data"].thumbnail;

        // Return title, url and thumbnail props
        return (<Story title={title} url={url} thumbnail={thumbnail}/>);
    })

    // Return the storyNodes destructured array
    
    return(
        <>
        {storyNodes}
        </>
        
        );

}

export default StoryList;