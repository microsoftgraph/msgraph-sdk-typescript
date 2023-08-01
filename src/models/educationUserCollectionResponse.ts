import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EducationUser} from './educationUser';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationUserCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationUser[] | undefined;
}
