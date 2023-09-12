import { createGroupSettingFromDiscriminatorValue } from './createGroupSettingFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type GroupSetting } from './groupSetting';
import { type GroupSettingCollectionResponse } from './groupSettingCollectionResponse';
import { serializeGroupSetting } from './serializeGroupSetting';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingCollectionResponse(groupSettingCollectionResponse: GroupSettingCollectionResponse | undefined = {} as GroupSettingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupSettingCollectionResponse),
        "value": n => { groupSettingCollectionResponse.value = n.getCollectionOfObjectValues<GroupSetting>(createGroupSettingFromDiscriminatorValue); },
    }
}
