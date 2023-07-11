import {deserializeIntoCustomExtensionEndpointConfiguration} from './deserializeIntoCustomExtensionEndpointConfiguration';
import {LogicAppTriggerEndpointConfiguration} from './logicAppTriggerEndpointConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLogicAppTriggerEndpointConfiguration(logicAppTriggerEndpointConfiguration: LogicAppTriggerEndpointConfiguration | undefined = {} as LogicAppTriggerEndpointConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomExtensionEndpointConfiguration(logicAppTriggerEndpointConfiguration),
        "logicAppWorkflowName": n => { logicAppTriggerEndpointConfiguration.logicAppWorkflowName = n.getStringValue(); },
        "resourceGroupName": n => { logicAppTriggerEndpointConfiguration.resourceGroupName = n.getStringValue(); },
        "subscriptionId": n => { logicAppTriggerEndpointConfiguration.subscriptionId = n.getStringValue(); },
        "url": n => { logicAppTriggerEndpointConfiguration.url = n.getStringValue(); },
    }
}
