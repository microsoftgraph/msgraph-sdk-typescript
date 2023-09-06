import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserFlowLanguagePage } from './userFlowLanguagePage';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserFlowLanguagePageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserFlowLanguagePage[] | undefined;
}
