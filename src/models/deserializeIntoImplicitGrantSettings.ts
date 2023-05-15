import {ImplicitGrantSettings} from './implicitGrantSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImplicitGrantSettings(implicitGrantSettings: ImplicitGrantSettings | undefined = {} as ImplicitGrantSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "enableAccessTokenIssuance": n => { implicitGrantSettings.enableAccessTokenIssuance = n.getBooleanValue(); },
        "enableIdTokenIssuance": n => { implicitGrantSettings.enableIdTokenIssuance = n.getBooleanValue(); },
        "@odata.type": n => { implicitGrantSettings.odataType = n.getStringValue(); },
    }
}
