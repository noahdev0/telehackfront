import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title: string;
  value: number;
  bg?: string;
};

function InfoCard({ title, value, bg }: Props) {
  return (
    <Card
      className={`border-2 border-blue-500 hover:scale-105 transition-all ${bg} `}
    >
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold">{value}</span>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
