import { deserializeIntoUserFlowApiConnectorConfiguration } from './deserializeIntoUserFlowApiConnectorConfiguration';
import { type UserFlowApiConnectorConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserFlowApiConnectorConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowApiConnectorConfiguration;
}
