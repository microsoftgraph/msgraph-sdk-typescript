import {deserializeIntoTeamworkTagMember} from './deserializeIntoTeamworkTagMember';
import {TeamworkTagMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkTagMember;
}
