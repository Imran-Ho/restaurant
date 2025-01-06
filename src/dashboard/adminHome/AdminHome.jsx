import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaDollarSign, FaListAlt, FaUsers, FaUtensils } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { PieChart, Pie } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const { data: adminState = {} } = useQuery({
    queryKey: ["admin-state"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-state");
      //   console.log(res);
      return res.data;
    },
  });
  // for chart data fetching
  const { data: chartData = [] } = useQuery({
    queryKey: ["orderWise-data"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderWise-data");
      console.log(res);
      return res.data;
    },
  });
  // for custom Barchart manage
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  // for custom Piechart manage
  // difference to show data in pie chart
  const pieCharData = chartData.map((singleData) => {
    return {
      name: singleData.category,
      value: singleData.totalProfit,
    };
  });
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="lg:text-center">
      <h1 className="mb-4">
        Hi, welcome{" "}
        <span className="text-2xl text-red-500">
          {user ? user?.displayName : "Back"}
        </span>
      </h1>
      {/* stat is used for admin */}
      <div>
        <div className="lg:stats shadow mb-6">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-3xl"></FaDollarSign>
            </div>
            <div className="stat-title text-red-500 text-2xl">Revenue</div>
            <div className="stat-value">$ {adminState.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl"></FaUsers>
            </div>
            <div className="stat-title text-red-500 text-2xl">Users</div>
            <div className="stat-value">{adminState.users}</div>
            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUtensils className="text-3xl"></FaUtensils>
            </div>
            <div className="stat-title text-red-500 text-2xl">All Orders</div>
            <div className="stat-value">{adminState.orders}</div>
            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaListAlt className="text-3xl"></FaListAlt>
            </div>
            <div className="stat-title text-red-500 text-2xl">All Menus</div>
            <div className="stat-value">{adminState.menuItems}</div>
            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
          </div>
        </div>
        <div className="lg:flex ">
          <div className="w-1/2">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-1/2">
            <PieChart width={400} height={400}>
              <Legend></Legend>
              <Pie
                data={pieCharData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieCharData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
