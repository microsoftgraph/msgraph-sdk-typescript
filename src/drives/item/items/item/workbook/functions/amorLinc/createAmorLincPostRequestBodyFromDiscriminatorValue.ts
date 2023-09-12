import { deserializeIntoAmorLincPostRequestBody } from './deserializeIntoAmorLincPostRequestBody';
import { type AmorLincPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAmorLincPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAmorLincPostRequestBody;
}
