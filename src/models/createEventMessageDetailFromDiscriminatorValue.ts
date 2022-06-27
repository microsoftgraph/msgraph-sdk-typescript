import {EventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageDetailImpl();
}
