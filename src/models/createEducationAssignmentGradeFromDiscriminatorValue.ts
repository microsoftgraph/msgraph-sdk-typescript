import {EducationAssignmentGradeImpl, EducationAssignmentPointsGradeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentGradeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationAssignmentPointsGrade":
                    return new EducationAssignmentPointsGradeImpl();
            }
        }
    }
    return new EducationAssignmentGradeImpl();
}
