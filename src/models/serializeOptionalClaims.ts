import { type OptionalClaim } from './optionalClaim';
import { type OptionalClaims } from './optionalClaims';
import { serializeOptionalClaim } from './serializeOptionalClaim';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOptionalClaims(writer: SerializationWriter, optionalClaims: OptionalClaims | undefined = {} as OptionalClaims) : void {
        writer.writeCollectionOfObjectValues<OptionalClaim>("accessToken", optionalClaims.accessToken, serializeOptionalClaim);
        writer.writeCollectionOfObjectValues<OptionalClaim>("idToken", optionalClaims.idToken, serializeOptionalClaim);
        writer.writeStringValue("@odata.type", optionalClaims.odataType);
        writer.writeCollectionOfObjectValues<OptionalClaim>("saml2Token", optionalClaims.saml2Token, serializeOptionalClaim);
        writer.writeAdditionalData(optionalClaims.additionalData);
}
