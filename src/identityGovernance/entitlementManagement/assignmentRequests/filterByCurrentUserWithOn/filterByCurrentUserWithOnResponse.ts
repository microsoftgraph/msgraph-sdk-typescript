import type {AccessPackageAssignmentRequest} from '../../../../models/accessPackageAssignmentRequest';
import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageAssignmentRequest[] | undefined;
}
