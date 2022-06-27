import {EducationAssignmentGradeTypeImpl, EducationAssignmentPointsGradeTypeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentGradeTypeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationAssignmentPointsGradeType":
                    return new EducationAssignmentPointsGradeTypeImpl();
            }
        }
    }
    return new EducationAssignmentGradeTypeImpl();
}
