import { Resolvers } from "../.mesh";
import * as moment from "moment";

export const resolvers: Resolvers = {
  Query: {
    viewsInPastMonth: async (root, args, context, info) => {
      console.log("context", context);
      return await context.Wiki.Query.newPages({
        root,
        args: {
          project: args.project,
          editorType: args.editorType,
          end: "",
          granularity: args.granularity,
          pageType: args.pageType,
          start: "",
        },
        context,
        info,
        selectionSet: /* GraphQL */ `
          {
            views
          }
        `,
      });
    },
  },
};
