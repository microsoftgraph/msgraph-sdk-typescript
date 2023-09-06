import { serializeEntity } from './serializeEntity';
import { type TeamworkBot } from './teamworkBot';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkBot(writer: SerializationWriter, teamworkBot: TeamworkBot | undefined = {} as TeamworkBot) : void {
        serializeEntity(writer, teamworkBot)
}
