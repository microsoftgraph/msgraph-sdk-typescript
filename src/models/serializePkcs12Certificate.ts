import {Pkcs12Certificate} from './pkcs12Certificate';
import {serializeApiAuthenticationConfigurationBase} from './serializeApiAuthenticationConfigurationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePkcs12Certificate(writer: SerializationWriter, pkcs12Certificate: Pkcs12Certificate | undefined = {} as Pkcs12Certificate) : void {
        serializeApiAuthenticationConfigurationBase(writer, pkcs12Certificate)
        writer.writeStringValue("password", pkcs12Certificate.password);
        writer.writeStringValue("pkcs12Value", pkcs12Certificate.pkcs12Value);
}
