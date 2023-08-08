import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Invitation} from './invitation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface InvitationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Invitation[] | undefined;
}
