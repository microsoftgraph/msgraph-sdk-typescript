import {TeamworkTagMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkTagMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkTagMember();
}
