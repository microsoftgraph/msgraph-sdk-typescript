import {RedirectUriSettings} from './redirectUriSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedirectUriSettings(redirectUriSettings: RedirectUriSettings | undefined = {} as RedirectUriSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "index": n => { redirectUriSettings.index = n.getNumberValue(); },
        "@odata.type": n => { redirectUriSettings.odataType = n.getStringValue(); },
        "uri": n => { redirectUriSettings.uri = n.getStringValue(); },
    }
}
