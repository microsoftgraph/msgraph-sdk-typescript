import {EmailFileAssessmentRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailFileAssessmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailFileAssessmentRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailFileAssessmentRequestCollectionResponse();
}
