import type {ArchivedPrintJob} from './archivedPrintJob';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {PrintJobProcessingState} from './printJobProcessingState';
import {serializeUserIdentity} from './serializeUserIdentity';
import type {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArchivedPrintJob(archivedPrintJob: ArchivedPrintJob | undefined = {} as ArchivedPrintJob) : Record<string, (node: ParseNode) => void> {
    return {
        "acquiredByPrinter": n => { archivedPrintJob.acquiredByPrinter = n.getBooleanValue(); },
        "acquiredDateTime": n => { archivedPrintJob.acquiredDateTime = n.getDateValue(); },
        "completionDateTime": n => { archivedPrintJob.completionDateTime = n.getDateValue(); },
        "copiesPrinted": n => { archivedPrintJob.copiesPrinted = n.getNumberValue(); },
        "createdBy": n => { archivedPrintJob.createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        "createdDateTime": n => { archivedPrintJob.createdDateTime = n.getDateValue(); },
        "id": n => { archivedPrintJob.id = n.getStringValue(); },
        "@odata.type": n => { archivedPrintJob.odataType = n.getStringValue(); },
        "printerId": n => { archivedPrintJob.printerId = n.getStringValue(); },
        "printerName": n => { archivedPrintJob.printerName = n.getStringValue(); },
        "processingState": n => { archivedPrintJob.processingState = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); },
    }
}
