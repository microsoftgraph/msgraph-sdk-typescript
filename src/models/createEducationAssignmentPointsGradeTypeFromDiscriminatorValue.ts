import {EducationAssignmentPointsGradeTypeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentPointsGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentPointsGradeTypeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentPointsGradeTypeImpl();
}
