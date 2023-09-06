import { createLearningCourseActivityFromDiscriminatorValue } from './createLearningCourseActivityFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type LearningCourseActivity } from './learningCourseActivity';
import { type LearningCourseActivityCollectionResponse } from './learningCourseActivityCollectionResponse';
import { serializeLearningCourseActivity } from './serializeLearningCourseActivity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningCourseActivityCollectionResponse(learningCourseActivityCollectionResponse: LearningCourseActivityCollectionResponse | undefined = {} as LearningCourseActivityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(learningCourseActivityCollectionResponse),
        "value": n => { learningCourseActivityCollectionResponse.value = n.getCollectionOfObjectValues<LearningCourseActivity>(createLearningCourseActivityFromDiscriminatorValue); },
    }
}
