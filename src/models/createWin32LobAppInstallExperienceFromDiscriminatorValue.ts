import {deserializeIntoWin32LobAppInstallExperience} from './deserializeIntoWin32LobAppInstallExperience';
import {Win32LobAppInstallExperience} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppInstallExperienceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppInstallExperience;
}
