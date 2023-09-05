import { deserializeIntoMobileApp } from './deserializeIntoMobileApp';
import { type MacOSMicrosoftEdgeApp } from './macOSMicrosoftEdgeApp';
import { MicrosoftEdgeChannel } from './microsoftEdgeChannel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMicrosoftEdgeApp(macOSMicrosoftEdgeApp: MacOSMicrosoftEdgeApp | undefined = {} as MacOSMicrosoftEdgeApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSMicrosoftEdgeApp),
        "channel": n => { macOSMicrosoftEdgeApp.channel = n.getEnumValue<MicrosoftEdgeChannel>(MicrosoftEdgeChannel); },
    }
}
