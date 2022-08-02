import {EducationFeedbackOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationFeedbackOutcome {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationFeedbackOutcome();
}
