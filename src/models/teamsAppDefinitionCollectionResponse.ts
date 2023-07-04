import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsAppDefinition[] | undefined;
}
