import {deserializeIntoTeamCreatedEventMessageDetail} from './deserializeIntoTeamCreatedEventMessageDetail';
import {TeamCreatedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamCreatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamCreatedEventMessageDetail;
}
