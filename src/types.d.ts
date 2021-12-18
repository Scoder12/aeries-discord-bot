import { CommandInteraction } from "discord.js";
import { RESTPostAPIApplicationCommandsJSONBody } from "discord.js/node_modules/discord-api-types";

export interface CommandMeta {
  name: string;
  toJSON: () => RESTPostAPIApplicationCommandsJSONBody;
}

export type CommandType = {
  meta: CommandMeta;
  handler: (interaction: CommandInteraction) => Promise<void>;
};

export interface Assignment {
  name: string;
  grade: string;
  description: string;
}

export interface ClassSummary {
  gradebookUrl: string | null; // parse(Gradebook)
  name: string | undefined; // CourseName
  teacher: string | undefined; // TeacherName
  period: string | undefined; // PeriodTitle or Period.toString()
  gradeSummary: string | undefined; // CurrentMarkAndScore
  missing: string | undefined; // regex match ">(.*)<" or getTextFromHtml(MissingAssignments)
}
