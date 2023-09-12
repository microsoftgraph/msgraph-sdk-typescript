import { deserializeIntoTabUpdatedEventMessageDetail } from './deserializeIntoTabUpdatedEventMessageDetail';
import { type TabUpdatedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTabUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTabUpdatedEventMessageDetail;
}
