import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguageConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserFlowLanguageConfiguration[] | undefined;
}
