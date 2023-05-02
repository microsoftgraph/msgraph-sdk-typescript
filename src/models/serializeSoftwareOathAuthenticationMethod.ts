import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSoftwareOathAuthenticationMethod(writer: SerializationWriter, softwareOathAuthenticationMethod: SoftwareOathAuthenticationMethod | undefined = {} as SoftwareOathAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, softwareOathAuthenticationMethod)
        writer.writeStringValue("secretKey", softwareOathAuthenticationMethod.secretKey);
}
