"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CiPhone } from "react-icons/ci";
import { RxCheckCircled } from "react-icons/rx";
import { useEffect } from "react";

export function HandleComlaint() {
  useEffect(() => {
    const getCompalins = async () => {
      try {
        const response = await fetch("/api/complaints/");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    getCompalins();
  }, []);

  return (
    <Card key="1">
      <CardHeader>
        <CardTitle>Complaints</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table className="divide-y p-5">
          <TableHeader>
            <TableRow>
              <TableHead className="w-0.5">ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right w-20" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>555-555-5555</TableCell>
                <TableCell>2022-06-01</TableCell>
                <TableCell className="grid w-20 gap-1 mx-auto">
                  <Button className="rounded-lg" size="icon">
                    <RxCheckCircled className="text-xl" />
                  </Button>
                  <Button className="rounded-lg" size="icon">
                    <CiPhone className="text-xl" />
                  </Button>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
