import React, {Component} from 'react'
import Data from './Data';

const initialSlides = [
    {
        title: "Today's workout Plan",
        text: "we going to do exercises",
    },
    {
        title: "First 10 push up",
        text: "10 push",
    },
    {
        title: "Next 20 squats",
        text: "20 squats",
    },
    {
        title: "Finally 15",
        text: "15 captured",
    },
    {
        title: "Great job",
        text: "Have a nice day",
    }
  ];

class Slides extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mainSlide: [],
            selectedIndex: 0
            }  
        
        this.Restart = this.Restart.bind(this);
        this.Prev = this.Prev.bind(this);
        this.Next = this.Next.bind(this);
   
    }  
    componentDidMount(){
        let mainSlide =  initialSlides.map((data) =>{
               return <Data title={data.title} text={data.text} />
               });
       this.setState({
       mainSlide: mainSlide,
       selectedIndex: 0
       });
   };
    
   Next() {
        console.log("Next");
        if(this.state.selectedIndex === this.state.mainSlide.length - 1)
        return;

        this.setState(prevState => ({
            selectedIndex: prevState.selectedIndex + 1
            }))
        }
    
    Prev() {
        console.log("Previous");
        if(this.state.selectedIndex === 0)
        return;

        this.setState(prevState => ({
            selectedIndex: prevState.selectedIndex - 1
            }))
        }
      Restart(){
        console.log("Restart");

         this.setState({
            selectedIndex: 0
           });  
        }


      render(){
        let {selectedIndex, mainSlide} = this.state;
      
        return(
          <>
          <div className='container'>
            <div className='row'>
                <div className='col s4'></div>
                <div className='col s4 button_main'>
                  <div id="navigation" className="text-center" style={{padding:"60px 100px 40px"}}>
                      <button data-testid="button-restart" className="small outlined" onClick={this.Restart}>Restart</button>
                      <button data-testid="button-prev" className="small pre" onClick={this.Prev} disabled={selectedIndex === 0}>Prev</button> 
                      <button data-testid="button-next" className="small nex" onClick={this.Next} disabled={selectedIndex === mainSlide.length - 1}>Next</button>
                  </div>
                </div>
                <div className='col s4'></div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
                <div className='col s4'></div>
                <div className='col s4 slider_content'>
                       {mainSlide[selectedIndex]}
                </div>
                <div className='col s4'></div>
            </div>
          </div>
          </>
      );
    }
      
 };
  export default Slides;
