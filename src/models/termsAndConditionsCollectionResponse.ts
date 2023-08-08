import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TermsAndConditions} from './termsAndConditions';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TermsAndConditions[] | undefined;
}
