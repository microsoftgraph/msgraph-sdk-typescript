import { deserializeIntoUserSimulationDetails } from './deserializeIntoUserSimulationDetails';
import { type UserSimulationDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserSimulationDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSimulationDetails;
}
