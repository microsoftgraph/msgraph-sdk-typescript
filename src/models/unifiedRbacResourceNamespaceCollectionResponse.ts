import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRbacResourceNamespaceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRbacResourceNamespace[] | undefined;
}
