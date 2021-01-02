import Story from "./Story";

const StoryList = ({stories}) => {

    const storyNodes = stories.map((story) => {

        let title = story["data"].title;
        let url = story["data"].url;
        let thumbnail = story["data"].thumbnail;

        return (<Story title={title} url={url} thumbnail={thumbnail}/>);
    })

    return(
        <>
        {storyNodes}
        </>
        
        );

}

export default StoryList;