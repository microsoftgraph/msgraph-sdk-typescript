import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamsTab} from './teamsTab';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTabCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsTab[] | undefined;
}
