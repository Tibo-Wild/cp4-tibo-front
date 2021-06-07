import React, { Component } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

export default class Countdown extends Component {
    render() {
        return (
          <div className="countdown-date">
              <FlipCountdown
                hideYear 
                monthTitle='Mois'
                dayTitle='Jours'
                hourTitle='Heures'
                minuteTitle='Minutes'
                secondTitle='Secondes'
                theme='light'
                endAt={'2021-08-10 21:00:00'} // Date/Time
              />
          </div>
            
        );
    }
}