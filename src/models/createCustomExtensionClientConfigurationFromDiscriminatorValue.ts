import { deserializeIntoCustomExtensionClientConfiguration } from './deserializeIntoCustomExtensionClientConfiguration';
import { type CustomExtensionClientConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomExtensionClientConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomExtensionClientConfiguration;
}
