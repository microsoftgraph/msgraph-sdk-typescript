import { deserializeIntoCountAPostRequestBody } from './deserializeIntoCountAPostRequestBody';
import { type CountAPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCountAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountAPostRequestBody;
}
