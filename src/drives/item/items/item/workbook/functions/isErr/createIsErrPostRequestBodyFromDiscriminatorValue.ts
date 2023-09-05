import { deserializeIntoIsErrPostRequestBody } from './deserializeIntoIsErrPostRequestBody';
import { type IsErrPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsErrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsErrPostRequestBody;
}
