import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityUserFlowAttributeAssignment[] | undefined;
}
