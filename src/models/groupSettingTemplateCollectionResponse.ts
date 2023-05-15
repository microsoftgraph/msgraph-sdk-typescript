import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {GroupSettingTemplate} from './groupSettingTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupSettingTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: GroupSettingTemplate[] | undefined;
}
