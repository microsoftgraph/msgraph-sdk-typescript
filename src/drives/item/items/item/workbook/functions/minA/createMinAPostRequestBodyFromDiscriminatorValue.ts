import { deserializeIntoMinAPostRequestBody } from './deserializeIntoMinAPostRequestBody';
import { type MinAPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMinAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMinAPostRequestBody;
}
