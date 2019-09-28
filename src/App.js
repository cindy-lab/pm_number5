import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            sec: 0,
            millisec: 0
        }
    }

    handleCntDwn = (e) => {
        e.preventDefault();
        
        this.timer = setInterval(() => {
            const { min, sec, millisec } = this.state;
            if (millisec > 0) {
                this.setState(({ millisec}) => ({
                    millisec: millisec - 1
                }))

            }
            else {
                if (sec > 0) {
                    this.setState(({ sec}) => ({
                        sec: sec - 1,
                        millisec: 59
                    }))
                } else {
                    if (min === 0) {
                        clearInterval(this.timer);
                    } else {
                        this.setState(({min}) => ({
                            min: min - 1,
                            sec: 59,
                        }))
                    }
                }

            }
        }, 1000 / 60);
    
    }
    timerStop(e){
        e.preventDefault();
        clearInterval(this.timer)
    }
    render() {
        const { min, sec, millisec } = this.state;
        return (
            <div className = "center">
                <br/><br/>
                <h1>CountDown</h1>
                <hr/>
                <label>Minutes: </label><input type = "number"placeholder="Minutes" onChange={e => this.setState({ min: e.target.value })}></input>
                <label>Seconds: </label><input type = "number"placeholder="Seconds"onChange={e => this.setState({ sec: e.target.value })}></input>
                <label>Millisecs:</label> <input type = "number"placeholder="Milliseconds"onChange={e => this.setState({ millisec: e.target.value })}></input>
                <br/><br/>            
                    <button onClick={e => this.handleCntDwn(e)}>Start</button>
                    <button onClick={e => this.timerStop(e)}>Stop</button>   
                <br/><br/>
                <h1>{min} : {sec} : {millisec}</h1>     
            </div>
        );
    }
}

export default App;