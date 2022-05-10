import {CallImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallImpl();
}
