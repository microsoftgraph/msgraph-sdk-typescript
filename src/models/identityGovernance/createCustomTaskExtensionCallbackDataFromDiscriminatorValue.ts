import { deserializeIntoCustomTaskExtensionCallbackData } from './deserializeIntoCustomTaskExtensionCallbackData';
import { type CustomTaskExtensionCallbackData } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomTaskExtensionCallbackDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomTaskExtensionCallbackData;
}
