import {EventMessageResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageResponseImpl();
}
