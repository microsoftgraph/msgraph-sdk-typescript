import {deserializeIntoLearningContentCollectionResponse} from './deserializeIntoLearningContentCollectionResponse';
import {LearningContentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningContentCollectionResponse;
}
