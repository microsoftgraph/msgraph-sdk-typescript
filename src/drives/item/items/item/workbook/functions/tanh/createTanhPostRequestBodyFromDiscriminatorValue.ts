import { deserializeIntoTanhPostRequestBody } from './deserializeIntoTanhPostRequestBody';
import { type TanhPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTanhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTanhPostRequestBody;
}
