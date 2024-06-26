import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Navbar from "../Navbar";
import prisma from "@/prisma/client";

const Bugs = async () => {
  const bugs = await prisma.bug.findMany();
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-10">
          <Link className={buttonVariants()} href="/bugs/new">
            New Bug
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>CreatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bugs.map((bug) => (
              <TableRow key={bug.id}>
                <TableCell> {bug.title} </TableCell>
                <TableCell> {bug.status} </TableCell>
                <TableCell> {bug.createdAt.toDateString()} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Bugs;
