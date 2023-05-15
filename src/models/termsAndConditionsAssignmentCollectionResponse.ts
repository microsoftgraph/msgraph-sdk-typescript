import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TermsAndConditionsAssignment[] | undefined;
}
