import {serializeSynchronizationSecretKeyStringValuePair} from '../../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import {SynchronizationSecretKeyStringValuePair} from '../../../../../models/synchronizationSecretKeyStringValuePair';
import {ValidateCredentialsPostRequestBody} from './validateCredentialsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeValidateCredentialsPostRequestBody(writer: SerializationWriter, validateCredentialsPostRequestBody: ValidateCredentialsPostRequestBody | undefined = {} as ValidateCredentialsPostRequestBody) : void {
        writer.writeStringValue("applicationIdentifier", validateCredentialsPostRequestBody.applicationIdentifier);
        writer.writeCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>("credentials", validateCredentialsPostRequestBody.credentials, serializeSynchronizationSecretKeyStringValuePair);
        writer.writeStringValue("templateId", validateCredentialsPostRequestBody.templateId);
        writer.writeBooleanValue("useSavedCredentials", validateCredentialsPostRequestBody.useSavedCredentials);
        writer.writeAdditionalData(validateCredentialsPostRequestBody.additionalData);
}
