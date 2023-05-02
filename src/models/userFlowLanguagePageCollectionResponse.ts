import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguagePageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UserFlowLanguagePage[] | undefined;
}
