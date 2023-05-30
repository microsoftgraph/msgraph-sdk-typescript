import {createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue} from '../../../../models/createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue';
import {serializeSynchronizationSecretKeyStringValuePair} from '../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import {SynchronizationSecretKeyStringValuePair} from '../../../../models/synchronizationSecretKeyStringValuePair';
import {AcquireAccessTokenPostRequestBody} from './acquireAccessTokenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcquireAccessTokenPostRequestBody(acquireAccessTokenPostRequestBody: AcquireAccessTokenPostRequestBody | undefined = {} as AcquireAccessTokenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "credentials": n => { acquireAccessTokenPostRequestBody.credentials = n.getCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>(createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue); },
    }
}
