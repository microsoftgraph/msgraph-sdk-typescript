import {createGroupSettingTemplateFromDiscriminatorValue} from './createGroupSettingTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {GroupSettingTemplate} from './groupSettingTemplate';
import type {GroupSettingTemplateCollectionResponse} from './groupSettingTemplateCollectionResponse';
import {serializeGroupSettingTemplate} from './serializeGroupSettingTemplate';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingTemplateCollectionResponse(groupSettingTemplateCollectionResponse: GroupSettingTemplateCollectionResponse | undefined = {} as GroupSettingTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupSettingTemplateCollectionResponse),
        "value": n => { groupSettingTemplateCollectionResponse.value = n.getCollectionOfObjectValues<GroupSettingTemplate>(createGroupSettingTemplateFromDiscriminatorValue); },
    }
}
