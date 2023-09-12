import { type ArchivedPrintJob } from '../../models/archivedPrintJob';
import { serializeArchivedPrintJob } from '../../models/serializeArchivedPrintJob';
import { serializeBaseCollectionPaginationCountResponse } from '../../models/serializeBaseCollectionPaginationCountResponse';
import { type GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse } from './getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse)
        writer.writeCollectionOfObjectValues<ArchivedPrintJob>("value", getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse.value, serializeArchivedPrintJob);
}
