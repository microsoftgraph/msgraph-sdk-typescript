import {GetDeviceManagementIntentPerSettingContributingProfilesResponse} from './getDeviceManagementIntentPerSettingContributingProfilesResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentPerSettingContributingProfilesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentPerSettingContributingProfilesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentPerSettingContributingProfilesResponse();
}
