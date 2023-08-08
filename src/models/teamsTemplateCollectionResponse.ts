import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TeamsTemplate} from './teamsTemplate';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsTemplate[] | undefined;
}
