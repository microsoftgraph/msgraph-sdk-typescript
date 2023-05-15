import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {createArchivedPrintJobFromDiscriminatorValue} from '../../models/createArchivedPrintJobFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse} from './getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse(getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValues<ArchivedPrintJob>(createArchivedPrintJobFromDiscriminatorValue); },
    }
}
