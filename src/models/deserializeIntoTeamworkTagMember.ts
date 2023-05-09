import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamworkTagMember} from './teamworkTagMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagMember(teamworkTagMember: TeamworkTagMember | undefined = {} as TeamworkTagMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkTagMember),
        "displayName": n => { teamworkTagMember.displayName = n.getStringValue(); },
        "tenantId": n => { teamworkTagMember.tenantId = n.getStringValue(); },
        "userId": n => { teamworkTagMember.userId = n.getStringValue(); },
    }
}
