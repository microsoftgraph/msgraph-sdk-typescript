import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedWithChannelTeamInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SharedWithChannelTeamInfo[] | undefined;
}
