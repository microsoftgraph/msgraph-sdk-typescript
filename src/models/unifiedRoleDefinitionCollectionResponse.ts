import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UnifiedRoleDefinition } from './unifiedRoleDefinition';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleDefinition[] | undefined;
}
