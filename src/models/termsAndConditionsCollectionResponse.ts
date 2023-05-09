import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TermsAndConditions} from './termsAndConditions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TermsAndConditions[] | undefined;
}
