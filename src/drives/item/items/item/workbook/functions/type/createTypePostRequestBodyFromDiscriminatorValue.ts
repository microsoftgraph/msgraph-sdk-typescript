import { deserializeIntoTypePostRequestBody } from './deserializeIntoTypePostRequestBody';
import { type TypePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTypePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTypePostRequestBody;
}
