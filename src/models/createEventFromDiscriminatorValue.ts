import {EventImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventImpl();
}
