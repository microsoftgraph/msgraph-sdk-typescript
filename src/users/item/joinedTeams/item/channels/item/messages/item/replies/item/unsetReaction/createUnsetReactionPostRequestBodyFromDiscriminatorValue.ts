import { deserializeIntoUnsetReactionPostRequestBody } from './deserializeIntoUnsetReactionPostRequestBody';
import { type UnsetReactionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnsetReactionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnsetReactionPostRequestBody;
}
