import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {createArchivedPrintJobFromDiscriminatorValue} from '../../models/createArchivedPrintJobFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeArchivedPrintJob} from '../../models/serializeArchivedPrintJob';
import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse} from './getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse(getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse: GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse | undefined = {} as GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValues<ArchivedPrintJob>(createArchivedPrintJobFromDiscriminatorValue); },
    }
}
