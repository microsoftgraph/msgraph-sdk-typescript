import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserConsentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserConsentRequest[] | undefined;
}
