import { deserializeIntoImExpPostRequestBody } from './deserializeIntoImExpPostRequestBody';
import { type ImExpPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImExpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImExpPostRequestBody;
}
