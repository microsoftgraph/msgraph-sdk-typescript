import {Confidence_TPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfidence_TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Confidence_TPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Confidence_TPostRequestBody();
}
