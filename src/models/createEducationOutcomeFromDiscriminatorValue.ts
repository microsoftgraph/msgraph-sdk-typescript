import {EducationFeedbackOutcome, EducationFeedbackResourceOutcome, EducationOutcome, EducationPointsOutcome, EducationRubricOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOutcome {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationFeedbackOutcome":
                    return new EducationFeedbackOutcome();
                case "#microsoft.graph.educationFeedbackResourceOutcome":
                    return new EducationFeedbackResourceOutcome();
                case "#microsoft.graph.educationPointsOutcome":
                    return new EducationPointsOutcome();
                case "#microsoft.graph.educationRubricOutcome":
                    return new EducationRubricOutcome();
            }
        }
    }
    return new EducationOutcome();
}
