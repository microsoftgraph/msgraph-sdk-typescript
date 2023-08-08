import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TermsAndConditionsAssignment[] | undefined;
}
