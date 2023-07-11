import {deserializeIntoLearningCourseActivityCollectionResponse} from './deserializeIntoLearningCourseActivityCollectionResponse';
import {LearningCourseActivityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningCourseActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningCourseActivityCollectionResponse;
}
