import { deserializeIntoActivatePostRequestBody } from './deserializeIntoActivatePostRequestBody';
import { type ActivatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createActivatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivatePostRequestBody;
}
