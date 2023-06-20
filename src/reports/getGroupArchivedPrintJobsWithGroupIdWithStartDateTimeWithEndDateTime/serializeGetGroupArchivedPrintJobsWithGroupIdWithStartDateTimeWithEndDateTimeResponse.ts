import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse} from './getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse(getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse: GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse)
        writer.writeCollectionOfObjectValues<ArchivedPrintJob>("value", getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse.value, serializeArchivedPrintJob);
}
