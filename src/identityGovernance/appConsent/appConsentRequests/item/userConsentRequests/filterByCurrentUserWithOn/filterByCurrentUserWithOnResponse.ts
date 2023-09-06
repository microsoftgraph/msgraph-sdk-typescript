import { type BaseCollectionPaginationCountResponse } from '../../../../../../models/baseCollectionPaginationCountResponse';
import { type UserConsentRequest } from '../../../../../../models/userConsentRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserConsentRequest[] | undefined;
}
