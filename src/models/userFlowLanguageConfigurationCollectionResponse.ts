import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguageConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserFlowLanguageConfiguration[] | undefined;
}
