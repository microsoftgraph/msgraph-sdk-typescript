import {InformationalUrl} from './informationalUrl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationalUrl(informationalUrl: InformationalUrl | undefined = {} as InformationalUrl) : Record<string, (node: ParseNode) => void> {
    return {
        "logoUrl": n => { informationalUrl.logoUrl = n.getStringValue(); },
        "marketingUrl": n => { informationalUrl.marketingUrl = n.getStringValue(); },
        "@odata.type": n => { informationalUrl.odataType = n.getStringValue(); },
        "privacyStatementUrl": n => { informationalUrl.privacyStatementUrl = n.getStringValue(); },
        "supportUrl": n => { informationalUrl.supportUrl = n.getStringValue(); },
        "termsOfServiceUrl": n => { informationalUrl.termsOfServiceUrl = n.getStringValue(); },
    }
}
