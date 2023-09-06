import { deserializeIntoGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody } from './deserializeIntoGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody';
import { type GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody;
}
