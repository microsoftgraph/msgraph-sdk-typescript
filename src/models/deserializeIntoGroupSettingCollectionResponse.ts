import {createGroupSettingFromDiscriminatorValue} from './createGroupSettingFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {GroupSetting} from './groupSetting';
import {GroupSettingCollectionResponse} from './groupSettingCollectionResponse';
import {serializeGroupSetting} from './serializeGroupSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingCollectionResponse(groupSettingCollectionResponse: GroupSettingCollectionResponse | undefined = {} as GroupSettingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupSettingCollectionResponse),
        "value": n => { groupSettingCollectionResponse.value = n.getCollectionOfObjectValues<GroupSetting>(createGroupSettingFromDiscriminatorValue); },
    }
}
