import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse(getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse: GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse)
        writer.writeCollectionOfObjectValues<ArchivedPrintJob>("value", getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse.value, serializeArchivedPrintJob);
}
