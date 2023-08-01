import type {ArchivedPrintJob} from '../../models/archivedPrintJob';
import type {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetUserArchivedPrintJobsWithUserIdWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ArchivedPrintJob[] | undefined;
}
