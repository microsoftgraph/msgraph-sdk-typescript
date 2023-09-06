import { deserializeIntoLearningProviderCollectionResponse } from './deserializeIntoLearningProviderCollectionResponse';
import { type LearningProviderCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLearningProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningProviderCollectionResponse;
}
