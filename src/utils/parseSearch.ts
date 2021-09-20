import {
  AddEntryInstruction,
  Instruction,
  SearchResults,
  TweetValue,
  UserValue
} from '../types/searchResults'

export const getNextToken = (d: SearchResults): string | undefined => {
  const instructions = d?.timeline?.instructions
  if (!instructions?.length) {
    return undefined
  }
  const lastInstruction: Instruction = instructions[instructions.length - 1]
  if (lastInstruction.addEntries) {
    return getTokenFromAddEntry(lastInstruction)
  }
  return undefined
}

const getTokenFromAddEntry = (
  entry: AddEntryInstruction
): string | undefined => {
  const entries = entry.addEntries.entries
  const last = entries[entries.length - 1]
  return last.content.operation?.cursor.value || undefined
}

export interface ParsedSearchResult {
  users: {
    [key: string]: UserValue
  }
  tweets: {
    [key: string]: TweetValue
  }
  nextToken: string | undefined
}

export const parseSearch = (d: SearchResults): ParsedSearchResult => {
  const result = {
    users: d.globalObjects.users,
    tweets: d.globalObjects.tweets,
    nextToken: getNextToken(d)
  }
  return result
}
