import {deserializeIntoTruncPostRequestBody} from './deserializeIntoTruncPostRequestBody';
import {TruncPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTruncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTruncPostRequestBody;
}
