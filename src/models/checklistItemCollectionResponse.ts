import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ChecklistItem} from './checklistItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChecklistItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ChecklistItem[] | undefined;
}
