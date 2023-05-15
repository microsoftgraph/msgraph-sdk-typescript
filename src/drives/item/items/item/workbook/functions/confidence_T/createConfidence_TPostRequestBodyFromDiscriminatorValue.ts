import {deserializeIntoConfidence_TPostRequestBody} from './deserializeIntoConfidence_TPostRequestBody';
import {Confidence_TPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfidence_TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfidence_TPostRequestBody;
}
