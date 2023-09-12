import { deserializeIntoImCscPostRequestBody } from './deserializeIntoImCscPostRequestBody';
import { type ImCscPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImCscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCscPostRequestBody;
}
