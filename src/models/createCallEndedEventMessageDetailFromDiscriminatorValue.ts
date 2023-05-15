import {deserializeIntoCallEndedEventMessageDetail} from './deserializeIntoCallEndedEventMessageDetail';
import {CallEndedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallEndedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallEndedEventMessageDetail;
}
