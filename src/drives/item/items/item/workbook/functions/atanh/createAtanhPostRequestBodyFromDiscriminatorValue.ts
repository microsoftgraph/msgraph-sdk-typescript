import { deserializeIntoAtanhPostRequestBody } from './deserializeIntoAtanhPostRequestBody';
import { type AtanhPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAtanhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAtanhPostRequestBody;
}
