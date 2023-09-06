import { createSynchronizationJobApplicationParametersFromDiscriminatorValue } from '../../../../../../models/createSynchronizationJobApplicationParametersFromDiscriminatorValue';
import { serializeSynchronizationJobApplicationParameters } from '../../../../../../models/serializeSynchronizationJobApplicationParameters';
import { type SynchronizationJobApplicationParameters } from '../../../../../../models/synchronizationJobApplicationParameters';
import { type ProvisionOnDemandPostRequestBody } from './provisionOnDemandPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionOnDemandPostRequestBody(provisionOnDemandPostRequestBody: ProvisionOnDemandPostRequestBody | undefined = {} as ProvisionOnDemandPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "parameters": n => { provisionOnDemandPostRequestBody.parameters = n.getCollectionOfObjectValues<SynchronizationJobApplicationParameters>(createSynchronizationJobApplicationParametersFromDiscriminatorValue); },
    }
}
