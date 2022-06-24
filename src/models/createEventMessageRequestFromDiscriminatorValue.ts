import {EventMessageRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageRequestImpl();
}
