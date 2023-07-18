import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {PrinterStatus} from './printerStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterStatus(printerStatus: PrinterStatus | undefined = {} as PrinterStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printerStatus.description = n.getStringValue(); },
        "details": n => { printerStatus.details = n.getCollectionOfEnumValues<PrinterProcessingStateDetail>(PrinterProcessingStateDetail); },
        "@odata.type": n => { printerStatus.odataType = n.getStringValue(); },
        "state": n => { printerStatus.state = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState); },
    }
}
