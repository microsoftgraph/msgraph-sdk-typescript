import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeletedTeam} from './deletedTeam';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeletedTeamCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeletedTeam[] | undefined;
}
