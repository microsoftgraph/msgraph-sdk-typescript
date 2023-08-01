import type {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageAssignmentRequest[] | undefined;
}
