import { type GroupSetting } from './groupSetting';
import { type GroupSettingCollectionResponse } from './groupSettingCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeGroupSetting } from './serializeGroupSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGroupSettingCollectionResponse(writer: SerializationWriter, groupSettingCollectionResponse: GroupSettingCollectionResponse | undefined = {} as GroupSettingCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupSettingCollectionResponse)
        writer.writeCollectionOfObjectValues<GroupSetting>("value", groupSettingCollectionResponse.value, serializeGroupSetting);
}
