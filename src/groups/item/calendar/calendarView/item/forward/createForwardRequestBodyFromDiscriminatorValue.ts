import {ForwardRequestBody} from './forwardRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createForwardRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ForwardRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ForwardRequestBody();
}
