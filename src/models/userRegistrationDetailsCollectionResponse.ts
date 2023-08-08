import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserRegistrationDetails} from './userRegistrationDetails';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserRegistrationDetails[] | undefined;
}
