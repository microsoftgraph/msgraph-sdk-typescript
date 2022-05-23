import {AcceptPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcceptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AcceptPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AcceptPostRequestBodyImpl();
}
