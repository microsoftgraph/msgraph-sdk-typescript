import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MacOSMicrosoftEdgeApp} from './macOSMicrosoftEdgeApp';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMicrosoftEdgeApp(macOSMicrosoftEdgeApp: MacOSMicrosoftEdgeApp | undefined = {} as MacOSMicrosoftEdgeApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSMicrosoftEdgeApp),
        "channel": n => { macOSMicrosoftEdgeApp.channel = n.getEnumValue<MicrosoftEdgeChannel>(MicrosoftEdgeChannel); },
    }
}
