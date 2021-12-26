import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './StatisticsList.styled'



export const StatisticsList = ({ stats }) => {
    
    return (<StatsList>
        {stats.map(stat => (
            <StatsItem key={stat.id} >
                <StatisticsItem
                    label={stat.label}
                    percentage={stat.percentage}
                />
            </StatsItem>
        ))}
    </StatsList>)
}

 StatisticsList.propTypes = {
 
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

