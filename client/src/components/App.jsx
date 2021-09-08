import React from 'react'
import axios from 'axios'
import Form from './Form.jsx';

export default class App extends React.Component {
  constructor (props) {
    super (props);
      this.state = {
        url: '',
        code: ''
      };

      this.urlShortener = this.urlShortener.bind(this);
    };

    urlShortener (keyword) {
      console.log(keyword);
      axios.post('/cut', {url:keyword})
        .then(res => {
          console.log('response =>', res);
          this.setState({code: res.data.code, url:keyword});
        })
        .catch(err => {
          console.log('error posting url =>', err);
        })
      // axios.get(`/events?q=${keyword}&_page=1`)
      //   .then(res => {
      //     console.log('events: ', res);
      //     this.setState({historicEvents: res.data})
      //   })
      //   .catch(err => {
      //     console.log('error getting events: ', err);
      //   })
    };

    render () {
      return (
        <div>
          <div>*******************************************************</div>
          {/* <div>///////////////////////////////////////////////////////</div> */}
          <Form  urlShortener={this.urlShortener}/>
          {/* <div>///////////////////////////////////////////////////////</div> */}
          <div>*******************************************************</div>
          {/* <Events events={this.state.historicEvents} /> */}
          <div>http://localhost:8080/{this.state.code}</div>
        </div>
      )
    };
}