import { deserializeIntoMatchPostRequestBody } from './deserializeIntoMatchPostRequestBody';
import { type MatchPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMatchPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMatchPostRequestBody;
}
