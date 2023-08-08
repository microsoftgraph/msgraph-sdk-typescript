import type {PrintDocument} from './printDocument';
import type {PrintJob} from './printJob';
import type {PrintJobConfiguration} from './printJobConfiguration';
import type {PrintJobStatus} from './printJobStatus';
import type {PrintTask} from './printTask';
import {serializeEntity} from './serializeEntity';
import {serializePrintDocument} from './serializePrintDocument';
import {serializePrintJobConfiguration} from './serializePrintJobConfiguration';
import {serializePrintJobStatus} from './serializePrintJobStatus';
import {serializePrintTask} from './serializePrintTask';
import {serializeUserIdentity} from './serializeUserIdentity';
import type {UserIdentity} from './userIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintJob(writer: SerializationWriter, printJob: PrintJob | undefined = {} as PrintJob) : void {
        serializeEntity(writer, printJob)
        writer.writeObjectValue<PrintJobConfiguration>("configuration", printJob.configuration, serializePrintJobConfiguration);
        writer.writeObjectValue<UserIdentity>("createdBy", printJob.createdBy, serializeUserIdentity);
        writer.writeDateValue("createdDateTime", printJob.createdDateTime);
        writer.writeCollectionOfObjectValues<PrintDocument>("documents", printJob.documents, serializePrintDocument);
        writer.writeBooleanValue("isFetchable", printJob.isFetchable);
        writer.writeStringValue("redirectedFrom", printJob.redirectedFrom);
        writer.writeStringValue("redirectedTo", printJob.redirectedTo);
        writer.writeObjectValue<PrintJobStatus>("status", printJob.status, serializePrintJobStatus);
        writer.writeCollectionOfObjectValues<PrintTask>("tasks", printJob.tasks, serializePrintTask);
}
