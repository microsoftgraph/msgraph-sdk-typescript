import { deserializeIntoArabicPostRequestBody } from './deserializeIntoArabicPostRequestBody';
import { type ArabicPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArabicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArabicPostRequestBody;
}
