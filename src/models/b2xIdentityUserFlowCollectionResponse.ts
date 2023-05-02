import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface B2xIdentityUserFlowCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: B2xIdentityUserFlow[] | undefined;
}
