import {deserializeIntoAcceptPostRequestBody} from './deserializeIntoAcceptPostRequestBody';
import {AcceptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcceptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcceptPostRequestBody;
}
