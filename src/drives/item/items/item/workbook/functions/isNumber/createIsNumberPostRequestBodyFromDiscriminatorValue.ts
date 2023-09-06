import { deserializeIntoIsNumberPostRequestBody } from './deserializeIntoIsNumberPostRequestBody';
import { type IsNumberPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsNumberPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsNumberPostRequestBody;
}
