import {deserializeIntoConfidence_NormPostRequestBody} from './deserializeIntoConfidence_NormPostRequestBody';
import {Confidence_NormPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfidence_NormPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfidence_NormPostRequestBody;
}
