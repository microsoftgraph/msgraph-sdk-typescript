import {createPrintOperationStatusFromDiscriminatorValue} from './createPrintOperationStatusFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintOperation} from './printOperation';
import {PrintOperationStatus} from './printOperationStatus';
import {serializePrintOperationStatus} from './serializePrintOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintOperation(printOperation: PrintOperation | undefined = {} as PrintOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printOperation),
        "createdDateTime": n => { printOperation.createdDateTime = n.getDateValue(); },
        "status": n => { printOperation.status = n.getObjectValue<PrintOperationStatus>(createPrintOperationStatusFromDiscriminatorValue); },
    }
}
