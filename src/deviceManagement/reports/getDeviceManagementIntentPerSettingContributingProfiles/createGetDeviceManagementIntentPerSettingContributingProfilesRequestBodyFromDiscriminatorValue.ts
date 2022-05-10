import {GetDeviceManagementIntentPerSettingContributingProfilesRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentPerSettingContributingProfilesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentPerSettingContributingProfilesRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentPerSettingContributingProfilesRequestBodyImpl();
}
