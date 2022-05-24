import {ForwardPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createForwardPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ForwardPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ForwardPostRequestBodyImpl();
}
