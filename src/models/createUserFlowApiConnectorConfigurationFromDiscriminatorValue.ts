import {deserializeIntoUserFlowApiConnectorConfiguration} from './deserializeIntoUserFlowApiConnectorConfiguration';
import {UserFlowApiConnectorConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowApiConnectorConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFlowApiConnectorConfiguration;
}
