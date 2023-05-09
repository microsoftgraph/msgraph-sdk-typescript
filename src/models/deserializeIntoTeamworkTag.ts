import {createTeamworkTagMemberFromDiscriminatorValue} from './createTeamworkTagMemberFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeTeamworkTagMember} from './serializeTeamworkTagMember';
import {TeamworkTag} from './teamworkTag';
import {TeamworkTagMember} from './teamworkTagMember';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTag(teamworkTag: TeamworkTag | undefined = {} as TeamworkTag) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkTag),
        "description": n => { teamworkTag.description = n.getStringValue(); },
        "displayName": n => { teamworkTag.displayName = n.getStringValue(); },
        "memberCount": n => { teamworkTag.memberCount = n.getNumberValue(); },
        "members": n => { teamworkTag.members = n.getCollectionOfObjectValues<TeamworkTagMember>(createTeamworkTagMemberFromDiscriminatorValue); },
        "tagType": n => { teamworkTag.tagType = n.getEnumValue<TeamworkTagType>(TeamworkTagType); },
        "teamId": n => { teamworkTag.teamId = n.getStringValue(); },
    }
}
