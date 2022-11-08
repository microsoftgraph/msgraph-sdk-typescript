import {EducationFeedbackResourceOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackResourceOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationFeedbackResourceOutcome {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationFeedbackResourceOutcome();
}
