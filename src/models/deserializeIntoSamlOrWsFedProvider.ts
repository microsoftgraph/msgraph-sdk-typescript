import {AuthenticationProtocol} from './authenticationProtocol';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {SamlOrWsFedProvider} from './samlOrWsFedProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlOrWsFedProvider(samlOrWsFedProvider: SamlOrWsFedProvider | undefined = {} as SamlOrWsFedProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(samlOrWsFedProvider),
        "issuerUri": n => { samlOrWsFedProvider.issuerUri = n.getStringValue(); },
        "metadataExchangeUri": n => { samlOrWsFedProvider.metadataExchangeUri = n.getStringValue(); },
        "passiveSignInUri": n => { samlOrWsFedProvider.passiveSignInUri = n.getStringValue(); },
        "preferredAuthenticationProtocol": n => { samlOrWsFedProvider.preferredAuthenticationProtocol = n.getEnumValue<AuthenticationProtocol>(AuthenticationProtocol); },
        "signingCertificate": n => { samlOrWsFedProvider.signingCertificate = n.getStringValue(); },
    }
}
