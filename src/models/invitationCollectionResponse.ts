import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Invitation} from './invitation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InvitationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Invitation[] | undefined;
}
