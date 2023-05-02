import {deserializeIntoApiAuthenticationConfigurationBase} from './deserializeIntoApiAuthenticationConfigurationBase';
import {Pkcs12Certificate} from './pkcs12Certificate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPkcs12Certificate(pkcs12Certificate: Pkcs12Certificate | undefined = {} as Pkcs12Certificate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiAuthenticationConfigurationBase(pkcs12Certificate),
        "password": n => { pkcs12Certificate.password = n.getStringValue(); },
        "pkcs12Value": n => { pkcs12Certificate.pkcs12Value = n.getStringValue(); },
    }
}
