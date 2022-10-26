import { useAppContext } from "../context/appContext";
import StatsItem from "./StatsItem";
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaBug,
  FaIdBadge,
} from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      title: "internship",
      count: stats.internship || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "remote",
      count: stats.remote || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "part time",
      count: stats.part_time || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
    {
      title: "full time",
      count: stats.full_time || 0,
      icon: <FaIdBadge />,
      color: "#0f5132",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
