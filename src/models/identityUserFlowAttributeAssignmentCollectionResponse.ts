import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityUserFlowAttributeAssignment[] | undefined;
}
