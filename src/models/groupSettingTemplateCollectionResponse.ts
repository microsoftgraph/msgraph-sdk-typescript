import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {GroupSettingTemplate} from './groupSettingTemplate';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupSettingTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: GroupSettingTemplate[] | undefined;
}
