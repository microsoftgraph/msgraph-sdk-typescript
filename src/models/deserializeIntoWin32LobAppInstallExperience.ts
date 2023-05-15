import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppInstallExperience} from './win32LobAppInstallExperience';
import {Win32LobAppRestartBehavior} from './win32LobAppRestartBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppInstallExperience(win32LobAppInstallExperience: Win32LobAppInstallExperience | undefined = {} as Win32LobAppInstallExperience) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceRestartBehavior": n => { win32LobAppInstallExperience.deviceRestartBehavior = n.getEnumValue<Win32LobAppRestartBehavior>(Win32LobAppRestartBehavior); },
        "@odata.type": n => { win32LobAppInstallExperience.odataType = n.getStringValue(); },
        "runAsAccount": n => { win32LobAppInstallExperience.runAsAccount = n.getEnumValue<RunAsAccountType>(RunAsAccountType); },
    }
}
