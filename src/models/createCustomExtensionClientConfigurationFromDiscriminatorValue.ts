import {deserializeIntoCustomExtensionClientConfiguration} from './deserializeIntoCustomExtensionClientConfiguration';
import {CustomExtensionClientConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomExtensionClientConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomExtensionClientConfiguration;
}
