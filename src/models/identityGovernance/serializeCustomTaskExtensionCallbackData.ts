import {serializeCustomExtensionData} from '../serializeCustomExtensionData';
import {CustomTaskExtensionCallbackData} from './customTaskExtensionCallbackData';
import {CustomTaskExtensionOperationStatus} from './customTaskExtensionOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtensionCallbackData(writer: SerializationWriter, customTaskExtensionCallbackData: CustomTaskExtensionCallbackData | undefined = {} as CustomTaskExtensionCallbackData) : void {
        serializeCustomExtensionData(writer, customTaskExtensionCallbackData)
        writer.writeEnumValue<CustomTaskExtensionOperationStatus>("operationStatus", customTaskExtensionCallbackData.operationStatus);
}
