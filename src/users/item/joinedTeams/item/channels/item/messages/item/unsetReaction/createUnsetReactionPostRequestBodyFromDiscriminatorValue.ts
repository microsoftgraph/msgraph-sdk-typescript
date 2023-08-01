import {deserializeIntoUnsetReactionPostRequestBody} from './deserializeIntoUnsetReactionPostRequestBody';
import {UnsetReactionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnsetReactionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnsetReactionPostRequestBody;
}
