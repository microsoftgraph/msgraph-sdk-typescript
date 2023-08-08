import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import type {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTemporaryAccessPassAuthenticationMethod(writer: SerializationWriter, temporaryAccessPassAuthenticationMethod: TemporaryAccessPassAuthenticationMethod | undefined = {} as TemporaryAccessPassAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, temporaryAccessPassAuthenticationMethod)
        writer.writeDateValue("createdDateTime", temporaryAccessPassAuthenticationMethod.createdDateTime);
        writer.writeBooleanValue("isUsable", temporaryAccessPassAuthenticationMethod.isUsable);
        writer.writeBooleanValue("isUsableOnce", temporaryAccessPassAuthenticationMethod.isUsableOnce);
        writer.writeNumberValue("lifetimeInMinutes", temporaryAccessPassAuthenticationMethod.lifetimeInMinutes);
        writer.writeStringValue("methodUsabilityReason", temporaryAccessPassAuthenticationMethod.methodUsabilityReason);
        writer.writeDateValue("startDateTime", temporaryAccessPassAuthenticationMethod.startDateTime);
        writer.writeStringValue("temporaryAccessPass", temporaryAccessPassAuthenticationMethod.temporaryAccessPass);
}
