import {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {Fido2RestrictionEnforcementType} from './fido2RestrictionEnforcementType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2KeyRestrictions(fido2KeyRestrictions: Fido2KeyRestrictions | undefined = {} as Fido2KeyRestrictions) : Record<string, (node: ParseNode) => void> {
    return {
        "aaGuids": n => { fido2KeyRestrictions.aaGuids = n.getCollectionOfPrimitiveValues<string>(); },
        "enforcementType": n => { fido2KeyRestrictions.enforcementType = n.getEnumValue<Fido2RestrictionEnforcementType>(Fido2RestrictionEnforcementType); },
        "isEnforced": n => { fido2KeyRestrictions.isEnforced = n.getBooleanValue(); },
        "@odata.type": n => { fido2KeyRestrictions.odataType = n.getStringValue(); },
    }
}
