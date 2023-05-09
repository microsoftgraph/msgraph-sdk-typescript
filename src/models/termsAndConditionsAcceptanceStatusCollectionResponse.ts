import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAcceptanceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TermsAndConditionsAcceptanceStatus[] | undefined;
}
