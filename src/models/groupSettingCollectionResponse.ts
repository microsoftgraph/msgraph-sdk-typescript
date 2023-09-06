import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type GroupSetting } from './groupSetting';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GroupSettingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: GroupSetting[] | undefined;
}
