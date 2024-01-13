import { deleteAsync } from "del"

const deletedDirectoryPaths = await deleteAsync(["build", "dist"])

console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"))
