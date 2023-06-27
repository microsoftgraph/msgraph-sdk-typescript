import {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import {Permission} from '../../../../../models/permission';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InviteResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Permission[] | undefined;
}
