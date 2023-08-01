import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenLifetimePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TokenLifetimePolicy[] | undefined;
}
