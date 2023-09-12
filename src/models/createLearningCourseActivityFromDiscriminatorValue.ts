import { deserializeIntoLearningAssignment } from './deserializeIntoLearningAssignment';
import { deserializeIntoLearningCourseActivity } from './deserializeIntoLearningCourseActivity';
import { deserializeIntoLearningSelfInitiatedCourse } from './deserializeIntoLearningSelfInitiatedCourse';
import { type LearningAssignment, type LearningCourseActivity, type LearningSelfInitiatedCourse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLearningCourseActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.learningAssignment":
                    return deserializeIntoLearningAssignment;
                case "#microsoft.graph.learningSelfInitiatedCourse":
                    return deserializeIntoLearningSelfInitiatedCourse;
            }
        }
    }
    return deserializeIntoLearningCourseActivity;
}
