import {deserializeIntoUserSimulationDetails} from './deserializeIntoUserSimulationDetails';
import {UserSimulationDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSimulationDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSimulationDetails;
}
