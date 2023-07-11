import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EducationOutcome} from './educationOutcome';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationOutcome[] | undefined;
}
