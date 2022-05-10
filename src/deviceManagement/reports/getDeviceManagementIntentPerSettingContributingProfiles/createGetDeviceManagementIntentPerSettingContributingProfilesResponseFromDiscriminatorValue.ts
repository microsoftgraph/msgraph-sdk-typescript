import {GetDeviceManagementIntentPerSettingContributingProfilesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentPerSettingContributingProfilesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentPerSettingContributingProfilesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentPerSettingContributingProfilesResponseImpl();
}
