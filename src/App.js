import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import {Card} from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  render() {
    return (
      <> 
      <Card style={{ width:" 350px", height: "150px", padding:"100",margin: "500px"}}>
      <h1>BMI Converter</h1>
        <select id="method" value={this.state.method} onChange={ () => this.setState({ method: 'imperial'})}>
          <option value="metric">metric</option>
          <option value="imperial">imperial</option>
        </select>
        <div>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>
        <div>
            <label>Height(cm)</label>
            <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })}/>
        </div>

				<DisplayResult 
					weight={this.state.weight}
					height={this.state.height}
				/>
        </Card>
        </>
    );
  }
}

export default App;