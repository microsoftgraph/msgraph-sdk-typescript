import {deserializeIntoEducationFeedbackOutcome} from './deserializeIntoEducationFeedbackOutcome';
import {deserializeIntoEducationFeedbackResourceOutcome} from './deserializeIntoEducationFeedbackResourceOutcome';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {deserializeIntoEducationPointsOutcome} from './deserializeIntoEducationPointsOutcome';
import {deserializeIntoEducationRubricOutcome} from './deserializeIntoEducationRubricOutcome';
import {EducationFeedbackOutcome, EducationFeedbackResourceOutcome, EducationOutcome, EducationPointsOutcome, EducationRubricOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationFeedbackOutcome":
                    return deserializeIntoEducationFeedbackOutcome;
                case "#microsoft.graph.educationFeedbackResourceOutcome":
                    return deserializeIntoEducationFeedbackResourceOutcome;
                case "#microsoft.graph.educationPointsOutcome":
                    return deserializeIntoEducationPointsOutcome;
                case "#microsoft.graph.educationRubricOutcome":
                    return deserializeIntoEducationRubricOutcome;
            }
        }
    }
    return deserializeIntoEducationOutcome;
}
