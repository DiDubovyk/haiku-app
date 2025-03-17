"use server";
import HaikuForm from "../../../components/HaikuForm";
import { getCollection } from "../../../lib/db";
import { ObjectId } from "mongodb";

async function getDoc(id) {
    const haikusCollection = await getCollection("haikus");
    const result = await haikusCollection.findOne({ _id: ObjectId.createFromHexString(id) });
    return result;
}
export default async function Page(props) {
    const params = await props.params
    const haikuFromDb = await getDoc(params.id);
    const plainHaiku = {
        _id: haikuFromDb._id.toString(),
        line1: haikuFromDb.line1,
        line2: haikuFromDb.line2,
        line3: haikuFromDb.line3,
    }

    return (
        <div>
            <h2 className="text-center text-4xl text-gray-600 mb-5">Edit Post</h2>
            <HaikuForm haiku={plainHaiku} action="edit" />
        </div>
    )
}