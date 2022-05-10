import {CallOptionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallOptionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallOptionsImpl();
}
