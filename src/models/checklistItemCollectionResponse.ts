import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ChecklistItem} from './checklistItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ChecklistItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ChecklistItem[] | undefined;
}
