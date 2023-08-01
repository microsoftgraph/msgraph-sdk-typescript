import type {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import type {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse} from './getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse: GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse)
        writer.writeCollectionOfObjectValues<ArchivedPrintJob>("value", getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse.value, serializeArchivedPrintJob);
}
