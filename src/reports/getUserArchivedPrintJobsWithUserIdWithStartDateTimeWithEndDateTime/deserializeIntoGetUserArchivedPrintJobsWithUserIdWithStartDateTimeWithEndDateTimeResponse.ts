import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {createArchivedPrintJobFromDiscriminatorValue} from '../../models/createArchivedPrintJobFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse} from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse(getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse: GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValues<ArchivedPrintJob>(createArchivedPrintJobFromDiscriminatorValue); },
    }
}
