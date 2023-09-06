import { deserializeIntoExpPostRequestBody } from './deserializeIntoExpPostRequestBody';
import { type ExpPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExpPostRequestBody;
}
