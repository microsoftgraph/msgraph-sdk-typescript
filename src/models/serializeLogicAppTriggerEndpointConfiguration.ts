import { type LogicAppTriggerEndpointConfiguration } from './logicAppTriggerEndpointConfiguration';
import { serializeCustomExtensionEndpointConfiguration } from './serializeCustomExtensionEndpointConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLogicAppTriggerEndpointConfiguration(writer: SerializationWriter, logicAppTriggerEndpointConfiguration: LogicAppTriggerEndpointConfiguration | undefined = {} as LogicAppTriggerEndpointConfiguration) : void {
        serializeCustomExtensionEndpointConfiguration(writer, logicAppTriggerEndpointConfiguration)
        writer.writeStringValue("logicAppWorkflowName", logicAppTriggerEndpointConfiguration.logicAppWorkflowName);
        writer.writeStringValue("resourceGroupName", logicAppTriggerEndpointConfiguration.resourceGroupName);
        writer.writeStringValue("subscriptionId", logicAppTriggerEndpointConfiguration.subscriptionId);
        writer.writeStringValue("url", logicAppTriggerEndpointConfiguration.url);
}
