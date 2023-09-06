import { deserializeIntoUserSimulationEventInfo } from './deserializeIntoUserSimulationEventInfo';
import { type UserSimulationEventInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserSimulationEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSimulationEventInfo;
}
