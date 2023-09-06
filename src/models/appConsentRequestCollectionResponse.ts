import { type AppConsentRequest } from './appConsentRequest';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AppConsentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AppConsentRequest[] | undefined;
}
