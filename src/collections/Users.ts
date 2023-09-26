import { CollectionConfig } from "payload/types";
import { UsersEdit } from "../components/Users/Edit";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    components: {
      views: {
        Edit: UsersEdit,
      },
    },
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
