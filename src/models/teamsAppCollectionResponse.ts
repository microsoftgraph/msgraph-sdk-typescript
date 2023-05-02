import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamsApp} from './teamsApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TeamsApp[] | undefined;
}
