import {deserializeIntoMatchPostRequestBody} from './deserializeIntoMatchPostRequestBody';
import {MatchPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMatchPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMatchPostRequestBody;
}
