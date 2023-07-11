import {createLearningCourseActivityFromDiscriminatorValue} from './createLearningCourseActivityFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {LearningCourseActivity} from './learningCourseActivity';
import {LearningCourseActivityCollectionResponse} from './learningCourseActivityCollectionResponse';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningCourseActivityCollectionResponse(learningCourseActivityCollectionResponse: LearningCourseActivityCollectionResponse | undefined = {} as LearningCourseActivityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(learningCourseActivityCollectionResponse),
        "value": n => { learningCourseActivityCollectionResponse.value = n.getCollectionOfObjectValues<LearningCourseActivity>(createLearningCourseActivityFromDiscriminatorValue); },
    }
}
