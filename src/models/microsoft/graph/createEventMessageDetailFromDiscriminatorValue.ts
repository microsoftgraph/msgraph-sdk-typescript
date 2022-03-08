import {EventMessageDetail} from './eventMessageDetail';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageDetail();
}
