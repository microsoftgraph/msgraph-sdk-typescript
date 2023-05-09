import {AlternativeSecurityId} from './alternativeSecurityId';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlternativeSecurityId(writer: SerializationWriter, alternativeSecurityId: AlternativeSecurityId | undefined = {} as AlternativeSecurityId) : void {
        writer.writeStringValue("identityProvider", alternativeSecurityId.identityProvider);
        writer.writeStringValue("key", alternativeSecurityId.key);
        writer.writeStringValue("@odata.type", alternativeSecurityId.odataType);
        writer.writeNumberValue("type", alternativeSecurityId.type);
        writer.writeAdditionalData(alternativeSecurityId.additionalData);
}
