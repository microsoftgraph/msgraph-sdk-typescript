import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserRegistrationDetails} from './userRegistrationDetails';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserRegistrationDetails[] | undefined;
}
