import {createSynchronizationJobApplicationParametersFromDiscriminatorValue} from '../../../../../../models/createSynchronizationJobApplicationParametersFromDiscriminatorValue';
import {serializeSynchronizationJobApplicationParameters} from '../../../../../../models/serializeSynchronizationJobApplicationParameters';
import {SynchronizationJobApplicationParameters} from '../../../../../../models/synchronizationJobApplicationParameters';
import {ProvisionOnDemandPostRequestBody} from './provisionOnDemandPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionOnDemandPostRequestBody(provisionOnDemandPostRequestBody: ProvisionOnDemandPostRequestBody | undefined = {} as ProvisionOnDemandPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "parameters": n => { provisionOnDemandPostRequestBody.parameters = n.getCollectionOfObjectValues<SynchronizationJobApplicationParameters>(createSynchronizationJobApplicationParametersFromDiscriminatorValue); },
    }
}
