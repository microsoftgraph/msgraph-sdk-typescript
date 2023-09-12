import { deserializeIntoTeamsAppRemovedEventMessageDetail } from './deserializeIntoTeamsAppRemovedEventMessageDetail';
import { type TeamsAppRemovedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppRemovedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppRemovedEventMessageDetail;
}
