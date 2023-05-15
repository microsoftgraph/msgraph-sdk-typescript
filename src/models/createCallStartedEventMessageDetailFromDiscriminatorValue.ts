import {deserializeIntoCallStartedEventMessageDetail} from './deserializeIntoCallStartedEventMessageDetail';
import {CallStartedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallStartedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallStartedEventMessageDetail;
}
