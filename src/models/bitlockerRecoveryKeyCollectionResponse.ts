import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type BitlockerRecoveryKey } from './bitlockerRecoveryKey';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKeyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BitlockerRecoveryKey[] | undefined;
}
