import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ArchivedPrintJob[] | undefined;
}
