import { serializeEntity } from './serializeEntity';
import { type TeamworkHostedContent } from './teamworkHostedContent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkHostedContent(writer: SerializationWriter, teamworkHostedContent: TeamworkHostedContent | undefined = {} as TeamworkHostedContent) : void {
        serializeEntity(writer, teamworkHostedContent)
        writer.writeStringValue("contentBytes", teamworkHostedContent.contentBytes);
        writer.writeStringValue("contentType", teamworkHostedContent.contentType);
}
