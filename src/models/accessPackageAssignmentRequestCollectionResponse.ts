import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageAssignmentRequest[] | undefined;
}
