import { type BaseCollectionPaginationCountResponse } from '../../../models/baseCollectionPaginationCountResponse';
import { type PstnCallLogRow } from '../../../models/callRecords/pstnCallLogRow';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetPstnCallsWithFromDateTimeWithToDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PstnCallLogRow[] | undefined;
}
