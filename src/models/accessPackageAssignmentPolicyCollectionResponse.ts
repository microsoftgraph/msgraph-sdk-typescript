import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AccessPackageAssignmentPolicy[] | undefined;
}
