import {UrlAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : UrlAssessmentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UrlAssessmentRequest();
}
