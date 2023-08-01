import {PrintTaskProcessingState} from './printTaskProcessingState';
import type {PrintTaskStatus} from './printTaskStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskStatus(writer: SerializationWriter, printTaskStatus: PrintTaskStatus | undefined = {} as PrintTaskStatus) : void {
        writer.writeStringValue("description", printTaskStatus.description);
        writer.writeStringValue("@odata.type", printTaskStatus.odataType);
        writer.writeEnumValue<PrintTaskProcessingState>("state", printTaskStatus.state);
        writer.writeAdditionalData(printTaskStatus.additionalData);
}
