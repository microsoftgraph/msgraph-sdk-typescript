import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SettingStateDeviceSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SettingStateDeviceSummary[] | undefined;
}
