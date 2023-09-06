import { serializeCustomExtensionData } from '../serializeCustomExtensionData';
import { type CustomTaskExtensionCallbackData } from './customTaskExtensionCallbackData';
import { CustomTaskExtensionOperationStatus } from './customTaskExtensionOperationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtensionCallbackData(writer: SerializationWriter, customTaskExtensionCallbackData: CustomTaskExtensionCallbackData | undefined = {} as CustomTaskExtensionCallbackData) : void {
        serializeCustomExtensionData(writer, customTaskExtensionCallbackData)
        writer.writeEnumValue<CustomTaskExtensionOperationStatus>("operationStatus", customTaskExtensionCallbackData.operationStatus);
}
