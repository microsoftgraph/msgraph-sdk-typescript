import {UserTrainingStatusInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTrainingStatusInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserTrainingStatusInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserTrainingStatusInfoCollectionResponse();
}
