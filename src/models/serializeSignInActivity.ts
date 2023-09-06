import { type SignInActivity } from './signInActivity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSignInActivity(writer: SerializationWriter, signInActivity: SignInActivity | undefined = {} as SignInActivity) : void {
        writer.writeDateValue("lastNonInteractiveSignInDateTime", signInActivity.lastNonInteractiveSignInDateTime);
        writer.writeStringValue("lastNonInteractiveSignInRequestId", signInActivity.lastNonInteractiveSignInRequestId);
        writer.writeDateValue("lastSignInDateTime", signInActivity.lastSignInDateTime);
        writer.writeStringValue("lastSignInRequestId", signInActivity.lastSignInRequestId);
        writer.writeStringValue("@odata.type", signInActivity.odataType);
        writer.writeAdditionalData(signInActivity.additionalData);
}
