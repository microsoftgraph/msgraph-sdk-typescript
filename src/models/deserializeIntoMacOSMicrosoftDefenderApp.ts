import { deserializeIntoMobileApp } from './deserializeIntoMobileApp';
import { type MacOSMicrosoftDefenderApp } from './macOSMicrosoftDefenderApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMicrosoftDefenderApp(macOSMicrosoftDefenderApp: MacOSMicrosoftDefenderApp | undefined = {} as MacOSMicrosoftDefenderApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSMicrosoftDefenderApp),
    }
}
