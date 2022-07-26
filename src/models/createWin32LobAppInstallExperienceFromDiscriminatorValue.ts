import {Win32LobAppInstallExperience} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppInstallExperienceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppInstallExperience {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppInstallExperience();
}
