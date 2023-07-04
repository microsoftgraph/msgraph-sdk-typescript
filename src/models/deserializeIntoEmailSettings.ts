import {EmailSettings} from './emailSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailSettings(emailSettings: EmailSettings | undefined = {} as EmailSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { emailSettings.odataType = n.getStringValue(); },
        "senderDomain": n => { emailSettings.senderDomain = n.getStringValue(); },
        "useCompanyBranding": n => { emailSettings.useCompanyBranding = n.getBooleanValue(); },
    }
}
