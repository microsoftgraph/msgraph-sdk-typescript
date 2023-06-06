import {serializeSynchronizationJobSubject} from './serializeSynchronizationJobSubject';
import {SynchronizationJobApplicationParameters} from './synchronizationJobApplicationParameters';
import {SynchronizationJobSubject} from './synchronizationJobSubject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationJobApplicationParameters(writer: SerializationWriter, synchronizationJobApplicationParameters: SynchronizationJobApplicationParameters | undefined = {} as SynchronizationJobApplicationParameters) : void {
        writer.writeStringValue("@odata.type", synchronizationJobApplicationParameters.odataType);
        writer.writeStringValue("ruleId", synchronizationJobApplicationParameters.ruleId);
        writer.writeCollectionOfObjectValues<SynchronizationJobSubject>("subjects", synchronizationJobApplicationParameters.subjects, serializeSynchronizationJobSubject);
        writer.writeAdditionalData(synchronizationJobApplicationParameters.additionalData);
}
