import {deserializeIntoLogicAppTriggerEndpointConfiguration} from './deserializeIntoLogicAppTriggerEndpointConfiguration';
import {LogicAppTriggerEndpointConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogicAppTriggerEndpointConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogicAppTriggerEndpointConfiguration;
}
