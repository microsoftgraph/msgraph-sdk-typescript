import {deserializeIntoAmorLincPostRequestBody} from './deserializeIntoAmorLincPostRequestBody';
import {AmorLincPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAmorLincPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAmorLincPostRequestBody;
}
