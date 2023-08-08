import type {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import type {Permission} from '../../../../../models/permission';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface InviteResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Permission[] | undefined;
}
