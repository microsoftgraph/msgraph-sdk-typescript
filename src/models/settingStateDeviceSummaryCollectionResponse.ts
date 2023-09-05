import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SettingStateDeviceSummary } from './settingStateDeviceSummary';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SettingStateDeviceSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SettingStateDeviceSummary[] | undefined;
}
