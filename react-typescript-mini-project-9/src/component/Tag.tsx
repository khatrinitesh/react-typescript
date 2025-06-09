import React, { useEffect, useState } from "react";
import type { Tag } from "../interface";
import { initialTags } from "../constants/constants";

const Tag: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>(initialTags);

  const [title, setTitle] = useState("Happy coding");

  useEffect(() => {
    document.title = title;
    console.log(title);
  });

  // ✅ MAP: render all tag names
  const renderTags = tags.map((tag) => (
    <li key={tag.id}>
      {tag.name} - {tag.category}
    </li>
  ));

  const frontendTags = tags.filter((tag) => tag.category === "Frontend");

  // ✅ FIND: first backend tag
  const firstBackend = tags.find((tag) => tag.category === "Backend");

  // ✅ SOME: is there any database tag?
  const hasDatabase = tags.some((tag) => tag.category === "Database");
  // ✅ EVERY: are all tags assigned a category?
  const allHaveCategory = tags.every((tag) => tag.category !== "");

  // ✅ REDUCE: combine all tag names into a comma-separated string
  const tagNames = tags.reduce((acc, tag, index) => {
    return acc + tag.x1 + (index < tags.length - 1 ? ", " : "");
  }, "");

  return (
    <div>
      <h2>All Tags</h2>
      <ul>{renderTags}</ul>

      <h3>Frontend Tags:</h3>
      <ul>
        {frontendTags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>

      <p>First Backend Tag: {firstBackend?.name || "None found"}</p>
      <p>Contains Database Tag: {hasDatabase ? "Yes" : "No"}</p>
      <p>All Tags Have Category: {allHaveCategory ? "Yes" : "No"}</p>
      <p>Tag Names (Comma-separated): {tagNames}</p>
    </div>
  );
};

export default Tag;
