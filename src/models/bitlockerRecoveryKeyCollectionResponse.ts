import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKeyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BitlockerRecoveryKey[] | undefined;
}
