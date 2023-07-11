import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamsTemplate} from './teamsTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsTemplate[] | undefined;
}
