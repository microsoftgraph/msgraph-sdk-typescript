import { deserializeIntoAddPostRequestBody } from './deserializeIntoAddPostRequestBody';
import { type AddPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddPostRequestBody;
}
