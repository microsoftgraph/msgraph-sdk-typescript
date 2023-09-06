import { deserializeIntoLearningContentCollectionResponse } from './deserializeIntoLearningContentCollectionResponse';
import { type LearningContentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLearningContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningContentCollectionResponse;
}
