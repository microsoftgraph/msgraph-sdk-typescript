import { deserializeIntoCustomExtensionData } from '../deserializeIntoCustomExtensionData';
import { type CustomTaskExtensionCallbackData } from './customTaskExtensionCallbackData';
import { CustomTaskExtensionOperationStatus } from './customTaskExtensionOperationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomTaskExtensionCallbackData(customTaskExtensionCallbackData: CustomTaskExtensionCallbackData | undefined = {} as CustomTaskExtensionCallbackData) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomExtensionData(customTaskExtensionCallbackData),
        "operationStatus": n => { customTaskExtensionCallbackData.operationStatus = n.getEnumValue<CustomTaskExtensionOperationStatus>(CustomTaskExtensionOperationStatus); },
    }
}
