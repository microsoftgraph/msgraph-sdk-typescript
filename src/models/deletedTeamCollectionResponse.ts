import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeletedTeam } from './deletedTeam';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeletedTeamCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeletedTeam[] | undefined;
}
