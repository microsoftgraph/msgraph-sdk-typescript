import {serializeSynchronizationSecretKeyStringValuePair} from '../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import {SynchronizationSecretKeyStringValuePair} from '../../../../models/synchronizationSecretKeyStringValuePair';
import {AcquireAccessTokenPostRequestBody} from './acquireAccessTokenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcquireAccessTokenPostRequestBody(acquireAccessTokenPostRequestBody: AcquireAccessTokenPostRequestBody | undefined = {} as AcquireAccessTokenPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>("credentials", acquireAccessTokenPostRequestBody.credentials, serializeSynchronizationSecretKeyStringValuePair);
        writer.writeAdditionalData(acquireAccessTokenPostRequestBody.additionalData);
}
