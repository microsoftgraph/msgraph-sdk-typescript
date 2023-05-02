import {deserializeIntoTeamJoiningEnabledEventMessageDetail} from './deserializeIntoTeamJoiningEnabledEventMessageDetail';
import {TeamJoiningEnabledEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamJoiningEnabledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamJoiningEnabledEventMessageDetail;
}
