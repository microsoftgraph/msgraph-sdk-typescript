import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserConsentRequest} from './userConsentRequest';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserConsentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserConsentRequest[] | undefined;
}
