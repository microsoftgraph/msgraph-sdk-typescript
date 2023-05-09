import {PasswordProfile} from './passwordProfile';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordProfile(writer: SerializationWriter, passwordProfile: PasswordProfile | undefined = {} as PasswordProfile) : void {
        writer.writeBooleanValue("forceChangePasswordNextSignIn", passwordProfile.forceChangePasswordNextSignIn);
        writer.writeBooleanValue("forceChangePasswordNextSignInWithMfa", passwordProfile.forceChangePasswordNextSignInWithMfa);
        writer.writeStringValue("@odata.type", passwordProfile.odataType);
        writer.writeStringValue("password", passwordProfile.password);
        writer.writeAdditionalData(passwordProfile.additionalData);
}
