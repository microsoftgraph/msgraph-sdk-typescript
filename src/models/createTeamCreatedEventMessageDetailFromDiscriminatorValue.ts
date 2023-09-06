import { deserializeIntoTeamCreatedEventMessageDetail } from './deserializeIntoTeamCreatedEventMessageDetail';
import { type TeamCreatedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamCreatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamCreatedEventMessageDetail;
}
