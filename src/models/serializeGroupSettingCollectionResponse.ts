import {GroupSetting} from './groupSetting';
import {GroupSettingCollectionResponse} from './groupSettingCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGroupSetting} from './serializeGroupSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSettingCollectionResponse(groupSettingCollectionResponse: GroupSettingCollectionResponse | undefined = {} as GroupSettingCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupSettingCollectionResponse)
        writer.writeCollectionOfObjectValues<GroupSetting>("value", groupSettingCollectionResponse.value, serializeGroupSetting);
}
