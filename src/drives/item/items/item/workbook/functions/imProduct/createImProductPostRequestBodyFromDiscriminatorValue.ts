import { deserializeIntoImProductPostRequestBody } from './deserializeIntoImProductPostRequestBody';
import { type ImProductPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImProductPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImProductPostRequestBody;
}
