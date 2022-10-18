import {UserSimulationEventInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSimulationEventInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSimulationEventInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSimulationEventInfoCollectionResponse();
}
