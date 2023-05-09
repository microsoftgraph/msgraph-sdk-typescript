import {GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody} from './getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody(writer: SerializationWriter, getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody: GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody | undefined = {} as GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody) : void {
        writer.writeStringValue("filter", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.groupBy);
        writer.writeStringValue("name", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.orderBy);
        writer.writeStringValue("search", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.select);
        writer.writeStringValue("sessionId", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.skip);
        writer.writeNumberValue("top", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.top);
        writer.writeAdditionalData(getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.additionalData);
}
