import {BaseCollectionPaginationCountResponse} from '../../../../../../models/baseCollectionPaginationCountResponse';
import {UserConsentRequest} from '../../../../../../models/userConsentRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserConsentRequest[] | undefined;
}
