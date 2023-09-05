import { type GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody } from './getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody(getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody: GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody | undefined = {} as GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.top = n.getNumberValue(); },
    }
}
