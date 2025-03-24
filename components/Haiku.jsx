"use client";

import { deleteHaiku } from "../actions/haikuController";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function Haiku(props) {
  return (
    <div>
      <CldImage
        crop={{ type: "pad", source: true }}
        fillBackground
        width="650"
        height="300"
        src={props.haiku.photo}
        sizes="650px"
        alt="Description of my image"
      />
      {props.haiku.line1} <br />
      {props.haiku.line2} <br />
      {props.haiku.line3} <br />
      <Link href={`/edit-haiku/${props.haiku._id.toString()}`}>Edit</Link>
      <form action={deleteHaiku}>
        <input
          name="id"
          type="hidden"
          defaultValue={props.haiku._id.toString()}
        />
        <button>Delete</button>
      </form>
      <hr />
    </div>
  );
}
