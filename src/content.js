import './style/content.css'
const Content = () => {
    return ( 
        <div className="main-container">
        <div className="container">
        <div className="content-row">
            <div className="content">
                <h1>grow together</h1>
                <p>Generate meaniful discussion with your audience and build the strong, loyal community. Think of insightful conversation you miss out on with  a feedback form</p>
            </div>
            <div className="content-image ">
                <img src="./images/illustration-grow-together.svg" alt="" />
            </div>
        </div>
        </div>

        <div className="container">
        <div className="conversation-row">
        <div className="image">
                <img src="./images/illustration-grow-together.svg" alt="" />
            </div>

            <div className="conversation ">
                <h1 >flowing conversation</h1>
                <p>You wouldn't paginate a conversation in real life. so why do it online? our thread have just-in-time loading for a more natural flow</p>
            </div>
            </div>
        </div>
        
        
        <div className="container">
             <div className="user-row">
            <div className="users">
                <h1>your users</h1>
                <p>It take no time at all to integrate  Huddle with your app's authentication solution.This means once you signed in to your app, your users can start chatting immidiately</p>
            </div>
            <div className="user-image">
                <img src="./images/illustration-grow-together.svg" alt="" />
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default Content;