import {IncomingCallOptionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncomingCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncomingCallOptionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncomingCallOptionsImpl();
}
