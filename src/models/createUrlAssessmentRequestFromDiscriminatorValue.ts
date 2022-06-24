import {UrlAssessmentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : UrlAssessmentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UrlAssessmentRequestImpl();
}
