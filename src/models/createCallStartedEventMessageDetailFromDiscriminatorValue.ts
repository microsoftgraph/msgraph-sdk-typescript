import { deserializeIntoCallStartedEventMessageDetail } from './deserializeIntoCallStartedEventMessageDetail';
import { type CallStartedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallStartedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallStartedEventMessageDetail;
}
