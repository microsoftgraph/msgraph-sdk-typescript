import type {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import type {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse: GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse)
        writer.writeCollectionOfObjectValues<ArchivedPrintJob>("value", getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse.value, serializeArchivedPrintJob);
}
