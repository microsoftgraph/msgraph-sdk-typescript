import {createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue} from '../../../../../models/createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue';
import {serializeSynchronizationSecretKeyStringValuePair} from '../../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import type {SynchronizationSecretKeyStringValuePair} from '../../../../../models/synchronizationSecretKeyStringValuePair';
import type {ValidateCredentialsPostRequestBody} from './validateCredentialsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoValidateCredentialsPostRequestBody(validateCredentialsPostRequestBody: ValidateCredentialsPostRequestBody | undefined = {} as ValidateCredentialsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationIdentifier": n => { validateCredentialsPostRequestBody.applicationIdentifier = n.getStringValue(); },
        "credentials": n => { validateCredentialsPostRequestBody.credentials = n.getCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>(createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue); },
        "templateId": n => { validateCredentialsPostRequestBody.templateId = n.getStringValue(); },
        "useSavedCredentials": n => { validateCredentialsPostRequestBody.useSavedCredentials = n.getBooleanValue(); },
    }
}
