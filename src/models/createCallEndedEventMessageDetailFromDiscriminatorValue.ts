import { deserializeIntoCallEndedEventMessageDetail } from './deserializeIntoCallEndedEventMessageDetail';
import { type CallEndedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallEndedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallEndedEventMessageDetail;
}
