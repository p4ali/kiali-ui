import * as React from 'react';
import RateChart from './RateChart';

type RateTablePropType = {
  title: string;
  rate: number;
  rate3xx: number;
  rate4xx: number;
  rate5xx: number;
};

export default class RateTable extends React.Component<RateTablePropType, {}> {
  render() {
    // for the table
    const errRate: number = this.props.rate4xx + this.props.rate5xx;
    const percentErr: number = this.props.rate === 0 ? 0 : (errRate / this.props.rate) * 100;
    const successErr: number = 100 - percentErr;

    // for the graph
    const rate2xx: number =
      this.props.rate === 0 ? 0 : this.props.rate - this.props.rate3xx - this.props.rate4xx - this.props.rate5xx;
    const percent2xx: number = this.props.rate === 0 ? 0 : (rate2xx / this.props.rate) * 100;
    const percent3xx: number = this.props.rate === 0 ? 0 : (this.props.rate3xx / this.props.rate) * 100;
    const percent4xx: number = this.props.rate === 0 ? 0 : (this.props.rate4xx / this.props.rate) * 100;
    const percent5xx: number = this.props.rate === 0 ? 0 : (this.props.rate5xx / this.props.rate) * 100;

    return (
      <div>
        <strong>{this.props.title}</strong>
        <table className="table">
          <thead>
            <tr>
              <th>Total</th>
              <th>%Success</th>
              <th>%Error</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.rate.toFixed(2)}</td>
              <td>{successErr.toFixed(2)}</td>
              <td>{percentErr.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <RateChart percent2xx={percent2xx} percent3xx={percent3xx} percent4xx={percent4xx} percent5xx={percent5xx} />
      </div>
    );
  }
}
