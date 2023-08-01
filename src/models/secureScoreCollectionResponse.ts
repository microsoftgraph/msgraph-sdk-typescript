import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SecureScore} from './secureScore';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SecureScore[] | undefined;
}
