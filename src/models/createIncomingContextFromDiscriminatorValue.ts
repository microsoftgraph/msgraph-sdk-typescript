import {IncomingContextImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncomingContextFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncomingContextImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncomingContextImpl();
}
