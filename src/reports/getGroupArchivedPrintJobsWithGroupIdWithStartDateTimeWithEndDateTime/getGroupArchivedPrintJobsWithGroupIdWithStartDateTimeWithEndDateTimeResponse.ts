import { type ArchivedPrintJob } from '../../models/archivedPrintJob';
import { type BaseCollectionPaginationCountResponse } from '../../models/baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ArchivedPrintJob[] | undefined;
}
