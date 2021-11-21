import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import "./Detailed.css";

type Props = Record<string, unknown>;
export default function ContactCard(props: Props): ReactElement {
  const params = useParams();
  return <h2>Id: {params.id}</h2>;
}
