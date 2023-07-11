import {LogicAppTriggerEndpointConfiguration} from './logicAppTriggerEndpointConfiguration';
import {serializeCustomExtensionEndpointConfiguration} from './serializeCustomExtensionEndpointConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLogicAppTriggerEndpointConfiguration(writer: SerializationWriter, logicAppTriggerEndpointConfiguration: LogicAppTriggerEndpointConfiguration | undefined = {} as LogicAppTriggerEndpointConfiguration) : void {
        serializeCustomExtensionEndpointConfiguration(writer, logicAppTriggerEndpointConfiguration)
        writer.writeStringValue("logicAppWorkflowName", logicAppTriggerEndpointConfiguration.logicAppWorkflowName);
        writer.writeStringValue("resourceGroupName", logicAppTriggerEndpointConfiguration.resourceGroupName);
        writer.writeStringValue("subscriptionId", logicAppTriggerEndpointConfiguration.subscriptionId);
        writer.writeStringValue("url", logicAppTriggerEndpointConfiguration.url);
}
