import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EducationSubmission} from './educationSubmission';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationSubmission[] | undefined;
}
