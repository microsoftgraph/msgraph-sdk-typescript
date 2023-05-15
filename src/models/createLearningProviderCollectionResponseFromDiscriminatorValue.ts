import {deserializeIntoLearningProviderCollectionResponse} from './deserializeIntoLearningProviderCollectionResponse';
import {LearningProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLearningProviderCollectionResponse;
}
