import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TeamsAppDefinition} from './teamsAppDefinition';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsAppDefinition[] | undefined;
}
