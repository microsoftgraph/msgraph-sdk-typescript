import {createPrintDocumentFromDiscriminatorValue} from './createPrintDocumentFromDiscriminatorValue';
import {createPrintJobConfigurationFromDiscriminatorValue} from './createPrintJobConfigurationFromDiscriminatorValue';
import {createPrintJobStatusFromDiscriminatorValue} from './createPrintJobStatusFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintDocument} from './printDocument';
import {PrintJob} from './printJob';
import {PrintJobConfiguration} from './printJobConfiguration';
import {PrintJobStatus} from './printJobStatus';
import {PrintTask} from './printTask';
import {serializePrintDocument} from './serializePrintDocument';
import {serializePrintJobConfiguration} from './serializePrintJobConfiguration';
import {serializePrintJobStatus} from './serializePrintJobStatus';
import {serializePrintTask} from './serializePrintTask';
import {serializeUserIdentity} from './serializeUserIdentity';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJob(printJob: PrintJob | undefined = {} as PrintJob) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printJob),
        "configuration": n => { printJob.configuration = n.getObjectValue<PrintJobConfiguration>(createPrintJobConfigurationFromDiscriminatorValue); },
        "createdBy": n => { printJob.createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        "createdDateTime": n => { printJob.createdDateTime = n.getDateValue(); },
        "documents": n => { printJob.documents = n.getCollectionOfObjectValues<PrintDocument>(createPrintDocumentFromDiscriminatorValue); },
        "isFetchable": n => { printJob.isFetchable = n.getBooleanValue(); },
        "redirectedFrom": n => { printJob.redirectedFrom = n.getStringValue(); },
        "redirectedTo": n => { printJob.redirectedTo = n.getStringValue(); },
        "status": n => { printJob.status = n.getObjectValue<PrintJobStatus>(createPrintJobStatusFromDiscriminatorValue); },
        "tasks": n => { printJob.tasks = n.getCollectionOfObjectValues<PrintTask>(createPrintTaskFromDiscriminatorValue); },
    }
}
