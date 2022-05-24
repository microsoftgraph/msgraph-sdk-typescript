import {CancelPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelPostRequestBodyImpl();
}
