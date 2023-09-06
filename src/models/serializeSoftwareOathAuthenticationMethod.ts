import { serializeAuthenticationMethod } from './serializeAuthenticationMethod';
import { type SoftwareOathAuthenticationMethod } from './softwareOathAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSoftwareOathAuthenticationMethod(writer: SerializationWriter, softwareOathAuthenticationMethod: SoftwareOathAuthenticationMethod | undefined = {} as SoftwareOathAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, softwareOathAuthenticationMethod)
        writer.writeStringValue("secretKey", softwareOathAuthenticationMethod.secretKey);
}
