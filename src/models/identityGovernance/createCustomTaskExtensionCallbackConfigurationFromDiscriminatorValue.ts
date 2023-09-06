import { deserializeIntoCustomTaskExtensionCallbackConfiguration } from './deserializeIntoCustomTaskExtensionCallbackConfiguration';
import { type CustomTaskExtensionCallbackConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomTaskExtensionCallbackConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomTaskExtensionCallbackConfiguration;
}
