import { deserializeIntoTeamsAppUpgradedEventMessageDetail } from './deserializeIntoTeamsAppUpgradedEventMessageDetail';
import { type TeamsAppUpgradedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppUpgradedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppUpgradedEventMessageDetail;
}
