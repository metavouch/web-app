import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { create } from "ipfs-http-client";

interface EventInput {
  title: string;
  description: string;
  location: string;
  datetime: string;
}

const EventForm: React.FC = () => {
  const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventInput>();

  const onSubmit: SubmitHandler<EventInput> = async (data) => {
    console.log(data);
    try {
      // Using the 'new' keyword makes this a JavaScript string and
      // not a TypeScript string, which is required for IPFS `add`.
      const jsonData = JSON.stringify(data);
      const added = await client.add(jsonData);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">
        Event Title {errors.title && <span className="error">Required</span>}
      </label>
      <input
        {...register("title", { required: true })}
        type="text"
        name="title"
        id="title"
        placeholder="Event Title"
      />
      <label htmlFor="description">
        Event Description{" "}
        {errors.description && <span className="error">Required</span>}
      </label>
      <textarea
        {...register("description", { required: true })}
        name="description"
        id="description"
        placeholder="Event Description"
      ></textarea>
      <label htmlFor="location">
        Event Location{" "}
        {errors.location && <span className="error">Required</span>}
      </label>
      <input
        {...register("location", { required: true })}
        type="text"
        name="location"
        id="location"
        placeholder="Event Location"
      />
      <label htmlFor="datetime">
        Event Time {errors.datetime && <span className="error">Required</span>}
      </label>
      <input
        {...register("datetime", { required: true })}
        type="datetime-local"
        name="datetime"
        id="datetime"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default EventForm;
