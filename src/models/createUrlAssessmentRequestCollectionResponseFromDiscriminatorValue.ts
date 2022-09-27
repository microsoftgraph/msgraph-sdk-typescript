import {UrlAssessmentRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlAssessmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UrlAssessmentRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UrlAssessmentRequestCollectionResponse();
}
