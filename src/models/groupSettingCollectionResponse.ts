import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {GroupSetting} from './groupSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupSettingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: GroupSetting[] | undefined;
}
