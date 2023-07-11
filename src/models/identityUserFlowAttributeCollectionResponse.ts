import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityUserFlowAttribute[] | undefined;
}
