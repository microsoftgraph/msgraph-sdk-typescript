import {LearningContentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLearningContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LearningContentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LearningContentCollectionResponse();
}
