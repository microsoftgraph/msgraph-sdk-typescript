import type {GroupSettingTemplate} from './groupSettingTemplate';
import type {GroupSettingTemplateCollectionResponse} from './groupSettingTemplateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGroupSettingTemplate} from './serializeGroupSettingTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSettingTemplateCollectionResponse(writer: SerializationWriter, groupSettingTemplateCollectionResponse: GroupSettingTemplateCollectionResponse | undefined = {} as GroupSettingTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupSettingTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<GroupSettingTemplate>("value", groupSettingTemplateCollectionResponse.value, serializeGroupSettingTemplate);
}
