import {createGroupSettingTemplateFromDiscriminatorValue} from './createGroupSettingTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {GroupSettingTemplate} from './groupSettingTemplate';
import {GroupSettingTemplateCollectionResponse} from './groupSettingTemplateCollectionResponse';
import {serializeGroupSettingTemplate} from './serializeGroupSettingTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingTemplateCollectionResponse(groupSettingTemplateCollectionResponse: GroupSettingTemplateCollectionResponse | undefined = {} as GroupSettingTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupSettingTemplateCollectionResponse),
        "value": n => { groupSettingTemplateCollectionResponse.value = n.getCollectionOfObjectValues<GroupSettingTemplate>(createGroupSettingTemplateFromDiscriminatorValue); },
    }
}
