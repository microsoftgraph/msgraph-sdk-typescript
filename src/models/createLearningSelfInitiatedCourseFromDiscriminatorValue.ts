import {deserializeIntoLearningSelfInitiatedCourse} from './deserializeIntoLearningSelfInitiatedCourse';
import {LearningSelfInitiatedCourse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningSelfInitiatedCourseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningSelfInitiatedCourse;
}
