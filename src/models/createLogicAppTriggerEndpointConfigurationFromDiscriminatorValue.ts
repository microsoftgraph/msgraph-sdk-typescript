import { deserializeIntoLogicAppTriggerEndpointConfiguration } from './deserializeIntoLogicAppTriggerEndpointConfiguration';
import { type LogicAppTriggerEndpointConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLogicAppTriggerEndpointConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogicAppTriggerEndpointConfiguration;
}
