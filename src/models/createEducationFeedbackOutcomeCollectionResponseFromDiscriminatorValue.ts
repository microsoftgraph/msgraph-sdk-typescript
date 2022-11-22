import {EducationFeedbackOutcomeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackOutcomeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationFeedbackOutcomeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationFeedbackOutcomeCollectionResponse();
}
