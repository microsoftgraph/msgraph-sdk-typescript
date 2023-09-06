import { serializeEntity } from './serializeEntity';
import { type TeamworkTagMember } from './teamworkTagMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagMember(writer: SerializationWriter, teamworkTagMember: TeamworkTagMember | undefined = {} as TeamworkTagMember) : void {
        serializeEntity(writer, teamworkTagMember)
        writer.writeStringValue("displayName", teamworkTagMember.displayName);
        writer.writeStringValue("tenantId", teamworkTagMember.tenantId);
        writer.writeStringValue("userId", teamworkTagMember.userId);
}
