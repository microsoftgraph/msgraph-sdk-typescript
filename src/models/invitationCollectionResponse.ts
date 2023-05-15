import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Invitation} from './invitation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InvitationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Invitation[] | undefined;
}
