import { Organisation } from "../types/organisation";
import { LocalStorage } from "@raycast/api";

export async function getOrganisations(): Promise<Organisation[]> {
  const organisations = await LocalStorage.getItem<string>("organisations");
  return (organisations ? JSON.parse(organisations) : []) as Organisation[];
}
