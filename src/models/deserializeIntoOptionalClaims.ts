import {createOptionalClaimFromDiscriminatorValue} from './createOptionalClaimFromDiscriminatorValue';
import {OptionalClaim} from './optionalClaim';
import {OptionalClaims} from './optionalClaims';
import {serializeOptionalClaim} from './serializeOptionalClaim';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOptionalClaims(optionalClaims: OptionalClaims | undefined = {} as OptionalClaims) : Record<string, (node: ParseNode) => void> {
    return {
        "accessToken": n => { optionalClaims.accessToken = n.getCollectionOfObjectValues<OptionalClaim>(createOptionalClaimFromDiscriminatorValue); },
        "idToken": n => { optionalClaims.idToken = n.getCollectionOfObjectValues<OptionalClaim>(createOptionalClaimFromDiscriminatorValue); },
        "@odata.type": n => { optionalClaims.odataType = n.getStringValue(); },
        "saml2Token": n => { optionalClaims.saml2Token = n.getCollectionOfObjectValues<OptionalClaim>(createOptionalClaimFromDiscriminatorValue); },
    }
}
