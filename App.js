import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display: '',
      result: '',
      hasOperationButton: false
    }

    this.opButtons = ['÷', 'x', '-', '+']
  }

  handleOp = (op) => {

    if (op === 'C') {
      this.setState({
        display: '',
        result: ''
      })
    }
    else if (op === '=') {
      this.setState({
        display: this.state.result,
        result: '',
        isOperationButton: true
      })
    } else {
      
      if (this.opButtons.includes( op ) && op !== "-") {
        if (! this.state.hasOperationButton ) {
          this.setState({ hasOperationButton: true })
        } else {
          return
        }
      } else {
        this.setState({ hasOperationButton: false })
      }

      let display = this.state.display
      let result = this.state.result

      if (display.length <= 15) {
        display = display + op
      }

      try {

        let operation = display.split('x').join('*')
        operation = operation.split('÷').join('/')
        operation = operation.split(',').join('.')
        
        result = new String(eval( operation )).toString()
        
        if (result.length > 10) {
          result = ( (result / 100) * 100 ).toFixed(3)
        }

      } catch (e) {}

      result = result.split('.').join(',')

      this.setState({ display, result })
    }
  }

  render() {

    const { display, result } = this.state

    const col1Buttons = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '=']
    ]

    const col2Buttons = ['C', ...this.opButtons]

    return (
      <View style={styles.container}>
        <Text style={display.length > 10 ? styles.displaySmaller : styles.display}>{ display }</Text>
        <Text style={styles.result}>{ result }</Text>
        <View style={styles.buttons}>
          <View style={styles.col1}>
            {
              col1Buttons.map((line, idx) => 
                <View key={idx} style={styles.line}>
                  {
                    line.map(op => 
                      <TouchableOpacity key={op} style={styles.btn} onPress={ () => this.handleOp(op) }>
                        <Text style={styles.btnText}>{op}</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
              )
            }
          </View>
          <View style={styles.col2}>
          {
            col2Buttons.map( (op, idx) => 
              <View key={idx} style={styles.line}>
                <TouchableOpacity key={op} style={styles.btnOperations} onPress={ () => this.handleOp(op) }>
                  <Text style={styles.btnText}>{op}</Text>
                </TouchableOpacity>
              </View>
            )
          }
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with ❤ by Rafael Calhau</Text>
        </View>
      </View>
    )

  }
}

