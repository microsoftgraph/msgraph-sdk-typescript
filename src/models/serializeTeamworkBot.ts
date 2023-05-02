import {serializeEntity} from './serializeEntity';
import {TeamworkBot} from './teamworkBot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkBot(writer: SerializationWriter, teamworkBot: TeamworkBot | undefined = {} as TeamworkBot) : void {
        serializeEntity(writer, teamworkBot)
}
