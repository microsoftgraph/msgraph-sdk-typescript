import {LearningProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LearningProviderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LearningProviderCollectionResponse();
}
