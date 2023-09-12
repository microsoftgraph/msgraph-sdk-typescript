import { deserializeIntoNperPostRequestBody } from './deserializeIntoNperPostRequestBody';
import { type NperPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNperPostRequestBody;
}
