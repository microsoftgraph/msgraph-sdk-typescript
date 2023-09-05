import { PrintOperationProcessingState } from './printOperationProcessingState';
import { type PrintOperationStatus } from './printOperationStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintOperationStatus(printOperationStatus: PrintOperationStatus | undefined = {} as PrintOperationStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printOperationStatus.description = n.getStringValue(); },
        "@odata.type": n => { printOperationStatus.odataType = n.getStringValue(); },
        "state": n => { printOperationStatus.state = n.getEnumValue<PrintOperationProcessingState>(PrintOperationProcessingState); },
    }
}
