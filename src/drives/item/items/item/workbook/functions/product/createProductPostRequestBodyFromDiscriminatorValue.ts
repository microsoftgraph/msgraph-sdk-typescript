import { deserializeIntoProductPostRequestBody } from './deserializeIntoProductPostRequestBody';
import { type ProductPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProductPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProductPostRequestBody;
}
