import { type ArchivedPrintJob } from '../../models/archivedPrintJob';
import { createArchivedPrintJobFromDiscriminatorValue } from '../../models/createArchivedPrintJobFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeArchivedPrintJob } from '../../models/serializeArchivedPrintJob';
import { type GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse } from './getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse(getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse: GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValues<ArchivedPrintJob>(createArchivedPrintJobFromDiscriminatorValue); },
    }
}
