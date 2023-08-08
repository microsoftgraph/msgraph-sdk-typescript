import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {RoleDefinition} from './roleDefinition';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoleDefinition[] | undefined;
}
