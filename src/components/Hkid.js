import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

const prefix = {
    10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F", 16:"G", 17:"H", 18:"I", 19:"J",
    20:"K", 21:"L", 22:"M", 23:"N", 24:"O", 25:"P", 26:"Q", 27:"R", 28:"S", 29:"T",
    30:"U", 31:"V", 32:"W", 33:"X", 34:"Y", 35:"Z", 36:" "
  };

class Hkid extends Component {
    constructor(props){
        super(props)
        this.state = {count: this.genHkid()}
        // this.genHkid = this.genHkid.bind(this)
        this.updateHkid = this.updateHkid.bind(this)
    }

    genHkid() {
        var randHkid = "";
        var checkDigit = 0;

        /*------------------------prefix------------------------*/
        for (var i = 0; i < 2; i++) {
            if (i === 0) {
                if (this.randNum(100, 0) < 35) {
                    var randPrefix = this.randNum(36, 10);
                    checkDigit += 9*randPrefix;
                    randHkid += prefix[randPrefix];
                }
            } else {
                randPrefix = this.randNum(35, 10);
                checkDigit += 8*randPrefix;
                randHkid += prefix[randPrefix];
            }
        }
        /*------------------------------------------------------*/

        /*------------------------number------------------------*/
        for (var y = 2; y < 8; y++) {
            var randNumPart = this.randNum(9, 0);
            checkDigit += (9-y)*randNumPart;
            randHkid += randNumPart;
        }
        /*------------------------------------------------------*/

        var remainder = checkDigit%11;
        if (remainder === 0) {
            randHkid += "0";
        } else if (remainder === 1) {
            randHkid += "A";
        } else {
            randHkid += (11-remainder);
        }
        
        //this.setState({count: randHkid})
        return randHkid;
    }

    randNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateHkid() {
        this.setState({count: this.genHkid()})
    }

    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <button className="genHkidButton" onClick={this.updateHkid}>Generate HKID</button>
            </div>
        )
    }
}

export default Hkid