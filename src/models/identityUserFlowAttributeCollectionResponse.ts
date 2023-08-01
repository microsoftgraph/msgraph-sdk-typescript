import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityUserFlowAttribute[] | undefined;
}
