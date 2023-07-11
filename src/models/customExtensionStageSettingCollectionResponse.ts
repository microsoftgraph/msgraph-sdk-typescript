import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {CustomExtensionStageSetting} from './customExtensionStageSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomExtensionStageSettingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CustomExtensionStageSetting[] | undefined;
}
