import {deserializeIntoEducationAssignmentGradeType} from './deserializeIntoEducationAssignmentGradeType';
import {deserializeIntoEducationAssignmentPointsGradeType} from './deserializeIntoEducationAssignmentPointsGradeType';
import {EducationAssignmentGradeType, EducationAssignmentPointsGradeType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationAssignmentPointsGradeType":
                    return deserializeIntoEducationAssignmentPointsGradeType;
            }
        }
    }
    return deserializeIntoEducationAssignmentGradeType;
}
