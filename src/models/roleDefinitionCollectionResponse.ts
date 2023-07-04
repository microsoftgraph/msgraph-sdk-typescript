import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RoleDefinition} from './roleDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoleDefinition[] | undefined;
}
