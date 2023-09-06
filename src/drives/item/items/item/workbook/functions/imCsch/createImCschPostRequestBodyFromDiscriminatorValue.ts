import { deserializeIntoImCschPostRequestBody } from './deserializeIntoImCschPostRequestBody';
import { type ImCschPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImCschPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCschPostRequestBody;
}
