import {UserSimulationDetailsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSimulationDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSimulationDetailsCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSimulationDetailsCollectionResponse();
}
