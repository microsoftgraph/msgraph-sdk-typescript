import {deserializeIntoEducationAssignmentGrade} from './deserializeIntoEducationAssignmentGrade';
import {deserializeIntoEducationAssignmentPointsGrade} from './deserializeIntoEducationAssignmentPointsGrade';
import {EducationAssignmentGrade, EducationAssignmentPointsGrade} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationAssignmentPointsGrade":
                    return deserializeIntoEducationAssignmentPointsGrade;
            }
        }
    }
    return deserializeIntoEducationAssignmentGrade;
}
