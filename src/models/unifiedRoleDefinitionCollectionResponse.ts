import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedRoleDefinition[] | undefined;
}
