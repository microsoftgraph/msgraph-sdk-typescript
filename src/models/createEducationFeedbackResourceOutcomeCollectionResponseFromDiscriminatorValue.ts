import {EducationFeedbackResourceOutcomeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackResourceOutcomeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationFeedbackResourceOutcomeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationFeedbackResourceOutcomeCollectionResponse();
}
