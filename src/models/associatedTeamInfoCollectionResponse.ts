import { type AssociatedTeamInfo } from './associatedTeamInfo';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AssociatedTeamInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AssociatedTeamInfo[] | undefined;
}
