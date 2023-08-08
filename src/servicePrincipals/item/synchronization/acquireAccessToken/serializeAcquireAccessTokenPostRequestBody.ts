import {serializeSynchronizationSecretKeyStringValuePair} from '../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import type {SynchronizationSecretKeyStringValuePair} from '../../../../models/synchronizationSecretKeyStringValuePair';
import type {AcquireAccessTokenPostRequestBody} from './acquireAccessTokenPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcquireAccessTokenPostRequestBody(writer: SerializationWriter, acquireAccessTokenPostRequestBody: AcquireAccessTokenPostRequestBody | undefined = {} as AcquireAccessTokenPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>("credentials", acquireAccessTokenPostRequestBody.credentials, serializeSynchronizationSecretKeyStringValuePair);
        writer.writeAdditionalData(acquireAccessTokenPostRequestBody.additionalData);
}
