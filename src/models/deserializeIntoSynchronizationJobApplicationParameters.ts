import { createSynchronizationJobSubjectFromDiscriminatorValue } from './createSynchronizationJobSubjectFromDiscriminatorValue';
import { serializeSynchronizationJobSubject } from './serializeSynchronizationJobSubject';
import { type SynchronizationJobApplicationParameters } from './synchronizationJobApplicationParameters';
import { type SynchronizationJobSubject } from './synchronizationJobSubject';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJobApplicationParameters(synchronizationJobApplicationParameters: SynchronizationJobApplicationParameters | undefined = {} as SynchronizationJobApplicationParameters) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { synchronizationJobApplicationParameters.odataType = n.getStringValue(); },
        "ruleId": n => { synchronizationJobApplicationParameters.ruleId = n.getStringValue(); },
        "subjects": n => { synchronizationJobApplicationParameters.subjects = n.getCollectionOfObjectValues<SynchronizationJobSubject>(createSynchronizationJobSubjectFromDiscriminatorValue); },
    }
}
