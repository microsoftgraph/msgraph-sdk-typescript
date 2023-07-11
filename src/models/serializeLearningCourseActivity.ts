import {CourseStatus} from './courseStatus';
import {LearningCourseActivity} from './learningCourseActivity';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningCourseActivity(writer: SerializationWriter, learningCourseActivity: LearningCourseActivity | undefined = {} as LearningCourseActivity) : void {
        serializeEntity(writer, learningCourseActivity)
        writer.writeDateValue("completedDateTime", learningCourseActivity.completedDateTime);
        writer.writeNumberValue("completionPercentage", learningCourseActivity.completionPercentage);
        writer.writeStringValue("externalcourseActivityId", learningCourseActivity.externalcourseActivityId);
        writer.writeStringValue("learnerUserId", learningCourseActivity.learnerUserId);
        writer.writeStringValue("learningContentId", learningCourseActivity.learningContentId);
        writer.writeStringValue("learningProviderId", learningCourseActivity.learningProviderId);
        writer.writeEnumValue<CourseStatus>("status", learningCourseActivity.status);
}
