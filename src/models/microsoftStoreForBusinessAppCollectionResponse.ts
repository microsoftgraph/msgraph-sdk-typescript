import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MicrosoftStoreForBusinessApp } from './microsoftStoreForBusinessApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MicrosoftStoreForBusinessApp[] | undefined;
}
