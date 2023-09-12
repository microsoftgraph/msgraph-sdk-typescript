import { deserializeIntoFixedPostRequestBody } from './deserializeIntoFixedPostRequestBody';
import { type FixedPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFixedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFixedPostRequestBody;
}
