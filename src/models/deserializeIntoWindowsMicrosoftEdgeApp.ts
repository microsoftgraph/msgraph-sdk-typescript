import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {WindowsMicrosoftEdgeApp} from './windowsMicrosoftEdgeApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsMicrosoftEdgeApp(windowsMicrosoftEdgeApp: WindowsMicrosoftEdgeApp | undefined = {} as WindowsMicrosoftEdgeApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(windowsMicrosoftEdgeApp),
        "channel": n => { windowsMicrosoftEdgeApp.channel = n.getEnumValue<MicrosoftEdgeChannel>(MicrosoftEdgeChannel); },
        "displayLanguageLocale": n => { windowsMicrosoftEdgeApp.displayLanguageLocale = n.getStringValue(); },
    }
}
