import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShoutOutsByTo, postShoutOut } from "../services/shoutOutService";
import "./ShoutOutToRoute.css";
import ShoutOut from "../models/ShoutOut";
import ShoutOutItem from "./ShoutOutItem";
import ShoutOutForm from "./ShoutOutForm";

interface RouteParams {
  name: string;
}

const ShoutOutToRoute = () => {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>();
  const { name } = useParams<RouteParams>();
  const getShoutOuts = async () => {
    setShoutOuts(await getShoutOutsByTo(name));
  };
  useEffect(() => {
    getShoutOuts();
  }, [name]);

  const addShoutOut = async (shoutOut: ShoutOut) => {
    await postShoutOut(shoutOut);
  };

  return (
    <div className="ShoutOutToRoute">
      <Link to="/">Back to all shout outs</Link>
      <h1>Shout Outs to {name}</h1>
      <ul>
        {shoutOuts?.map((item) => (
          <ShoutOutItem item={item} key={item._id} />
        ))}
      </ul>
      <ShoutOutForm addShoutOut={addShoutOut} name={name} />
    </div>
  );
};

export default ShoutOutToRoute;
