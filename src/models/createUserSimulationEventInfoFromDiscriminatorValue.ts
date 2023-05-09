import {deserializeIntoUserSimulationEventInfo} from './deserializeIntoUserSimulationEventInfo';
import {UserSimulationEventInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSimulationEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSimulationEventInfo;
}
