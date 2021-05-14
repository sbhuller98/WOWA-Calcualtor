import { PieChart } from 'react-minimal-pie-chart';

//interface Props {
//  payment: number;
//  term: number;
//}

const PieChartComponent = (): JSX.Element => {
  
  return (
    <PieChart
      animate
      animationDuration={500}
      animationEasing="ease-out"
      center={[50, 50]}
      data={[
        {
          color: '#E38627',
          title: 'One',
          value: 10,
        },
        {
          color: '#C13C37',
          title: 'Two',
          value: 15,
        },
        {
          color: '#6A2135',
          title: 'Three',
          value: 20,
        },
      ]}
      labelPosition={50}
      lengthAngle={360}
      lineWidth={15}
      paddingAngle={0}
      radius={50}
      rounded
      startAngle={0}
      viewBoxSize={[100, 100]}
    />
  );
};

export default PieChartComponent;
