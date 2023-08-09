import { Model, Schema, model } from 'mongoose'

interface IPost {
  image: string
  heading: string
  description: string
  creationDate: Date
}

const postSchema = new Schema<IPost>(
  {
    image: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
)

export default model<IPost>('post', postSchema)
