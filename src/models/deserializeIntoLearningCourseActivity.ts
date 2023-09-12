import { CourseStatus } from './courseStatus';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type LearningCourseActivity } from './learningCourseActivity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningCourseActivity(learningCourseActivity: LearningCourseActivity | undefined = {} as LearningCourseActivity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(learningCourseActivity),
        "completedDateTime": n => { learningCourseActivity.completedDateTime = n.getDateValue(); },
        "completionPercentage": n => { learningCourseActivity.completionPercentage = n.getNumberValue(); },
        "externalcourseActivityId": n => { learningCourseActivity.externalcourseActivityId = n.getStringValue(); },
        "learnerUserId": n => { learningCourseActivity.learnerUserId = n.getStringValue(); },
        "learningContentId": n => { learningCourseActivity.learningContentId = n.getStringValue(); },
        "learningProviderId": n => { learningCourseActivity.learningProviderId = n.getStringValue(); },
        "status": n => { learningCourseActivity.status = n.getEnumValue<CourseStatus>(CourseStatus); },
    }
}
