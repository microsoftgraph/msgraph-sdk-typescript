import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRbacResourceNamespaceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UnifiedRbacResourceNamespace[] | undefined;
}
