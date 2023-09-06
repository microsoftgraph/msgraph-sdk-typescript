import { deserializeIntoOrPostRequestBody } from './deserializeIntoOrPostRequestBody';
import { type OrPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrPostRequestBody;
}
