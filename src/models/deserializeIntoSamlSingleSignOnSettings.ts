import type {SamlSingleSignOnSettings} from './samlSingleSignOnSettings';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlSingleSignOnSettings(samlSingleSignOnSettings: SamlSingleSignOnSettings | undefined = {} as SamlSingleSignOnSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { samlSingleSignOnSettings.odataType = n.getStringValue(); },
        "relayState": n => { samlSingleSignOnSettings.relayState = n.getStringValue(); },
    }
}
