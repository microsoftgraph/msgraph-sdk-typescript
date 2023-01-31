import {GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody();
}
