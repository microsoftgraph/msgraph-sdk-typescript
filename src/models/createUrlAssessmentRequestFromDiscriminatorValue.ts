import {deserializeIntoUrlAssessmentRequest} from './deserializeIntoUrlAssessmentRequest';
import {UrlAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUrlAssessmentRequest;
}
