import {UserFlowApiConnectorConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowApiConnectorConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowApiConnectorConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowApiConnectorConfigurationImpl();
}
