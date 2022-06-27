import {OutgoingCallOptionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutgoingCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutgoingCallOptionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutgoingCallOptionsImpl();
}
