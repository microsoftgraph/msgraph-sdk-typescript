import {serializeEntity} from './serializeEntity';
import {serializeTeamworkTagMember} from './serializeTeamworkTagMember';
import {TeamworkTag} from './teamworkTag';
import {TeamworkTagMember} from './teamworkTagMember';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTag(writer: SerializationWriter, teamworkTag: TeamworkTag | undefined = {} as TeamworkTag) : void {
        serializeEntity(writer, teamworkTag)
        writer.writeStringValue("description", teamworkTag.description);
        writer.writeStringValue("displayName", teamworkTag.displayName);
        writer.writeNumberValue("memberCount", teamworkTag.memberCount);
        writer.writeCollectionOfObjectValues<TeamworkTagMember>("members", teamworkTag.members, serializeTeamworkTagMember);
        writer.writeEnumValue<TeamworkTagType>("tagType", teamworkTag.tagType);
        writer.writeStringValue("teamId", teamworkTag.teamId);
}
