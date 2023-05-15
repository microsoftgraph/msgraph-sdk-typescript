import {serializeEntity} from './serializeEntity';
import {TeamworkTagMember} from './teamworkTagMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTagMember(writer: SerializationWriter, teamworkTagMember: TeamworkTagMember | undefined = {} as TeamworkTagMember) : void {
        serializeEntity(writer, teamworkTagMember)
        writer.writeStringValue("displayName", teamworkTagMember.displayName);
        writer.writeStringValue("tenantId", teamworkTagMember.tenantId);
        writer.writeStringValue("userId", teamworkTagMember.userId);
}
