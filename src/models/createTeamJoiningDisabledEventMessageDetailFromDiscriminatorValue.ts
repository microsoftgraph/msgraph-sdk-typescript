import { deserializeIntoTeamJoiningDisabledEventMessageDetail } from './deserializeIntoTeamJoiningDisabledEventMessageDetail';
import { type TeamJoiningDisabledEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamJoiningDisabledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamJoiningDisabledEventMessageDetail;
}
