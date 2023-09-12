import { deserializeIntoAddPasswordPostRequestBody } from './deserializeIntoAddPasswordPostRequestBody';
import { type AddPasswordPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddPasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddPasswordPostRequestBody;
}
