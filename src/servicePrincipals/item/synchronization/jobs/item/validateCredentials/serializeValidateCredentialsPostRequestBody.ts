import { serializeSynchronizationSecretKeyStringValuePair } from '../../../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import { type SynchronizationSecretKeyStringValuePair } from '../../../../../../models/synchronizationSecretKeyStringValuePair';
import { type ValidateCredentialsPostRequestBody } from './validateCredentialsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeValidateCredentialsPostRequestBody(writer: SerializationWriter, validateCredentialsPostRequestBody: ValidateCredentialsPostRequestBody | undefined = {} as ValidateCredentialsPostRequestBody) : void {
        writer.writeStringValue("applicationIdentifier", validateCredentialsPostRequestBody.applicationIdentifier);
        writer.writeCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>("credentials", validateCredentialsPostRequestBody.credentials, serializeSynchronizationSecretKeyStringValuePair);
        writer.writeStringValue("templateId", validateCredentialsPostRequestBody.templateId);
        writer.writeBooleanValue("useSavedCredentials", validateCredentialsPostRequestBody.useSavedCredentials);
        writer.writeAdditionalData(validateCredentialsPostRequestBody.additionalData);
}
