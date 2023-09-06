import { deserializeIntoIsTextPostRequestBody } from './deserializeIntoIsTextPostRequestBody';
import { type IsTextPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsTextPostRequestBody;
}
