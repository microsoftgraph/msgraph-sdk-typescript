import {serializeSynchronizationJobApplicationParameters} from '../../../../../../models/serializeSynchronizationJobApplicationParameters';
import {SynchronizationJobApplicationParameters} from '../../../../../../models/synchronizationJobApplicationParameters';
import {ProvisionOnDemandPostRequestBody} from './provisionOnDemandPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisionOnDemandPostRequestBody(writer: SerializationWriter, provisionOnDemandPostRequestBody: ProvisionOnDemandPostRequestBody | undefined = {} as ProvisionOnDemandPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<SynchronizationJobApplicationParameters>("parameters", provisionOnDemandPostRequestBody.parameters, serializeSynchronizationJobApplicationParameters);
        writer.writeAdditionalData(provisionOnDemandPostRequestBody.additionalData);
}
