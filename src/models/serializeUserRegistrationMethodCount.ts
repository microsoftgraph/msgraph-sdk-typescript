import type {UserRegistrationMethodCount} from './userRegistrationMethodCount';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserRegistrationMethodCount(writer: SerializationWriter, userRegistrationMethodCount: UserRegistrationMethodCount | undefined = {} as UserRegistrationMethodCount) : void {
        writer.writeStringValue("authenticationMethod", userRegistrationMethodCount.authenticationMethod);
        writer.writeStringValue("@odata.type", userRegistrationMethodCount.odataType);
        writer.writeNumberValue("userCount", userRegistrationMethodCount.userCount);
        writer.writeAdditionalData(userRegistrationMethodCount.additionalData);
}
