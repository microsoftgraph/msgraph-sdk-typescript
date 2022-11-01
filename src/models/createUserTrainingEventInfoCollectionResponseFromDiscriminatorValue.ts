import {UserTrainingEventInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTrainingEventInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserTrainingEventInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserTrainingEventInfoCollectionResponse();
}
