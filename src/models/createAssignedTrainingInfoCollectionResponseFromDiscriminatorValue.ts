import {AssignedTrainingInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedTrainingInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedTrainingInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedTrainingInfoCollectionResponse();
}
