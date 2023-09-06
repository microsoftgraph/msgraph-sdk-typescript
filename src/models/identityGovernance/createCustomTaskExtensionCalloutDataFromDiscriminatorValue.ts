import { deserializeIntoCustomTaskExtensionCalloutData } from './deserializeIntoCustomTaskExtensionCalloutData';
import { type CustomTaskExtensionCalloutData } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomTaskExtensionCalloutDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomTaskExtensionCalloutData;
}
