import { deserializeIntoIsErrorPostRequestBody } from './deserializeIntoIsErrorPostRequestBody';
import { type IsErrorPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsErrorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsErrorPostRequestBody;
}
