import {EducationFeedbackOutcomeImpl, EducationOutcomeImpl, EducationPointsOutcomeImpl, EducationRubricOutcomeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOutcomeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationFeedbackOutcome":
                    return new EducationFeedbackOutcomeImpl();
                case "#microsoft.graph.educationPointsOutcome":
                    return new EducationPointsOutcomeImpl();
                case "#microsoft.graph.educationRubricOutcome":
                    return new EducationRubricOutcomeImpl();
            }
        }
    }
    return new EducationOutcomeImpl();
}
