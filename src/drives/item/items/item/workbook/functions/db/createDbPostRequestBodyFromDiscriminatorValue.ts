import { deserializeIntoDbPostRequestBody } from './deserializeIntoDbPostRequestBody';
import { type DbPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDbPostRequestBody;
}
