import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EducationOutcome} from './educationOutcome';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationOutcome[] | undefined;
}
