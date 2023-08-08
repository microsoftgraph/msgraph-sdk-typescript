import type {Approval} from '../../../../models/approval';
import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Approval[] | undefined;
}
