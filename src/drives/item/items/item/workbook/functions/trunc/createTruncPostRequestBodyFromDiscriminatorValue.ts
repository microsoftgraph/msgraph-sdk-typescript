import { deserializeIntoTruncPostRequestBody } from './deserializeIntoTruncPostRequestBody';
import { type TruncPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTruncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTruncPostRequestBody;
}
