import {deserializeIntoTeamsAppUpgradedEventMessageDetail} from './deserializeIntoTeamsAppUpgradedEventMessageDetail';
import {TeamsAppUpgradedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppUpgradedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppUpgradedEventMessageDetail;
}
