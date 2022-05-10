import {ForwardRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createForwardRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ForwardRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ForwardRequestBodyImpl();
}
