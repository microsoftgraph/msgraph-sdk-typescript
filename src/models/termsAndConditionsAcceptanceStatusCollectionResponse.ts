import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TermsAndConditionsAcceptanceStatus } from './termsAndConditionsAcceptanceStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAcceptanceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TermsAndConditionsAcceptanceStatus[] | undefined;
}
