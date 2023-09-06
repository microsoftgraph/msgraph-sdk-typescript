import { deserializeIntoCustomExtensionEndpointConfiguration } from './deserializeIntoCustomExtensionEndpointConfiguration';
import { type LogicAppTriggerEndpointConfiguration } from './logicAppTriggerEndpointConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLogicAppTriggerEndpointConfiguration(logicAppTriggerEndpointConfiguration: LogicAppTriggerEndpointConfiguration | undefined = {} as LogicAppTriggerEndpointConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomExtensionEndpointConfiguration(logicAppTriggerEndpointConfiguration),
        "logicAppWorkflowName": n => { logicAppTriggerEndpointConfiguration.logicAppWorkflowName = n.getStringValue(); },
        "resourceGroupName": n => { logicAppTriggerEndpointConfiguration.resourceGroupName = n.getStringValue(); },
        "subscriptionId": n => { logicAppTriggerEndpointConfiguration.subscriptionId = n.getStringValue(); },
        "url": n => { logicAppTriggerEndpointConfiguration.url = n.getStringValue(); },
    }
}
