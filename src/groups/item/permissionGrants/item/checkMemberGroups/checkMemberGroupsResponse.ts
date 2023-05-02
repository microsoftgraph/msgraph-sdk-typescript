import {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CheckMemberGroupsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: string[] | undefined;
}
