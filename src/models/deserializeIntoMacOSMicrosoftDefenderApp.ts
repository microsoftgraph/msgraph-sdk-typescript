import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MacOSMicrosoftDefenderApp} from './macOSMicrosoftDefenderApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMicrosoftDefenderApp(macOSMicrosoftDefenderApp: MacOSMicrosoftDefenderApp | undefined = {} as MacOSMicrosoftDefenderApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSMicrosoftDefenderApp),
    }
}
