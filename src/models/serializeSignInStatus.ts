import {SignInStatus} from './signInStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignInStatus(writer: SerializationWriter, signInStatus: SignInStatus | undefined = {} as SignInStatus) : void {
        writer.writeStringValue("additionalDetails", signInStatus.additionalDetails);
        writer.writeNumberValue("errorCode", signInStatus.errorCode);
        writer.writeStringValue("failureReason", signInStatus.failureReason);
        writer.writeStringValue("@odata.type", signInStatus.odataType);
        writer.writeAdditionalData(signInStatus.additionalData);
}
