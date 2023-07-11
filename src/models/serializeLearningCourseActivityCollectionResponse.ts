import {LearningCourseActivity} from './learningCourseActivity';
import {LearningCourseActivityCollectionResponse} from './learningCourseActivityCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningCourseActivityCollectionResponse(writer: SerializationWriter, learningCourseActivityCollectionResponse: LearningCourseActivityCollectionResponse | undefined = {} as LearningCourseActivityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, learningCourseActivityCollectionResponse)
        writer.writeCollectionOfObjectValues<LearningCourseActivity>("value", learningCourseActivityCollectionResponse.value, serializeLearningCourseActivity);
}
