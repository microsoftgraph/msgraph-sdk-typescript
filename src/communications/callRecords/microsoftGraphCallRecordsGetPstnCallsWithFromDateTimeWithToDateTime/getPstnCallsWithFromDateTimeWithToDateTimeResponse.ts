import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {PstnCallLogRow} from '../../../models/callRecords/pstnCallLogRow';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetPstnCallsWithFromDateTimeWithToDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PstnCallLogRow[] | undefined;
}
