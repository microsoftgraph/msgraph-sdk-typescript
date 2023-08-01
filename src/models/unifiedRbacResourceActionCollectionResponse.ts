import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRbacResourceActionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRbacResourceAction[] | undefined;
}
