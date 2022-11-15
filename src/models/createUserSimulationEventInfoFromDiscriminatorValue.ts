import {UserSimulationEventInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSimulationEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSimulationEventInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSimulationEventInfo();
}
