import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TeamsTab} from './teamsTab';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTabCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsTab[] | undefined;
}
