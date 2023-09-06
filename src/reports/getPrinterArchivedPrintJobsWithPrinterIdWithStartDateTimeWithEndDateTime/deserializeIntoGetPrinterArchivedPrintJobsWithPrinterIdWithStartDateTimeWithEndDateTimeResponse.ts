import { type ArchivedPrintJob } from '../../models/archivedPrintJob';
import { createArchivedPrintJobFromDiscriminatorValue } from '../../models/createArchivedPrintJobFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeArchivedPrintJob } from '../../models/serializeArchivedPrintJob';
import { type GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse } from './getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse(getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValues<ArchivedPrintJob>(createArchivedPrintJobFromDiscriminatorValue); },
    }
}
