import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Chat} from './chat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Chat[] | undefined;
}
