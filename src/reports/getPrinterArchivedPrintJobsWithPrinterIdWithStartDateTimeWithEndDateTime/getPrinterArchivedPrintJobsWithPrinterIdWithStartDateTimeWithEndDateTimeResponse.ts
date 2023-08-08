import type {ArchivedPrintJob} from '../../models/archivedPrintJob';
import type {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ArchivedPrintJob[] | undefined;
}
