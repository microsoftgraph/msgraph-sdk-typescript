import { deserializeIntoIsNonTextPostRequestBody } from './deserializeIntoIsNonTextPostRequestBody';
import { type IsNonTextPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsNonTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsNonTextPostRequestBody;
}
