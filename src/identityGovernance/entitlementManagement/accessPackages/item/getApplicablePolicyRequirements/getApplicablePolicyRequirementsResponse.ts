import type {AccessPackageAssignmentRequestRequirements} from '../../../../../models/accessPackageAssignmentRequestRequirements';
import type {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GetApplicablePolicyRequirementsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageAssignmentRequestRequirements[] | undefined;
}
