import {deserializeIntoTeamJoiningDisabledEventMessageDetail} from './deserializeIntoTeamJoiningDisabledEventMessageDetail';
import {TeamJoiningDisabledEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamJoiningDisabledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamJoiningDisabledEventMessageDetail;
}
