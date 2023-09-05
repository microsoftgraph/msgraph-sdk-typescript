import { PrintJobProcessingState } from './printJobProcessingState';
import { PrintJobStateDetail } from './printJobStateDetail';
import { type PrintJobStatus } from './printJobStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJobStatus(printJobStatus: PrintJobStatus | undefined = {} as PrintJobStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printJobStatus.description = n.getStringValue(); },
        "details": n => { printJobStatus.details = n.getCollectionOfEnumValues<PrintJobStateDetail>(PrintJobStateDetail); },
        "isAcquiredByPrinter": n => { printJobStatus.isAcquiredByPrinter = n.getBooleanValue(); },
        "@odata.type": n => { printJobStatus.odataType = n.getStringValue(); },
        "state": n => { printJobStatus.state = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); },
    }
}
