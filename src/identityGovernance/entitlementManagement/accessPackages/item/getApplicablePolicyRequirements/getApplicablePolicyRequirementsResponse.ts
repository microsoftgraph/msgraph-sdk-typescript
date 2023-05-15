import {AccessPackageAssignmentRequestRequirements} from '../../../../../models/accessPackageAssignmentRequestRequirements';
import {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetApplicablePolicyRequirementsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AccessPackageAssignmentRequestRequirements[] | undefined;
}
