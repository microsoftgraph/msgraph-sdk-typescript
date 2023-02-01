import {Confidence_NormPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfidence_NormPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Confidence_NormPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Confidence_NormPostRequestBody();
}
