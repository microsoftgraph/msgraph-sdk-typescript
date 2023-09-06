import { createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue } from '../../../../models/createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue';
import { serializeSynchronizationSecretKeyStringValuePair } from '../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import { type SynchronizationSecretKeyStringValuePair } from '../../../../models/synchronizationSecretKeyStringValuePair';
import { type AcquireAccessTokenPostRequestBody } from './acquireAccessTokenPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAcquireAccessTokenPostRequestBody(acquireAccessTokenPostRequestBody: AcquireAccessTokenPostRequestBody | undefined = {} as AcquireAccessTokenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "credentials": n => { acquireAccessTokenPostRequestBody.credentials = n.getCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>(createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue); },
    }
}
