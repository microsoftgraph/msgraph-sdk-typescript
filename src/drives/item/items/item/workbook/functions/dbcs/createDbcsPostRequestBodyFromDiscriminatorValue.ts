import { deserializeIntoDbcsPostRequestBody } from './deserializeIntoDbcsPostRequestBody';
import { type DbcsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDbcsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDbcsPostRequestBody;
}
