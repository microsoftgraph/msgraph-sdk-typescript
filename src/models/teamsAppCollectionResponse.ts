import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TeamsApp} from './teamsApp';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsApp[] | undefined;
}
