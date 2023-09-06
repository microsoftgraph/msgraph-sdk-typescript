import { type SynchronizationJobRestartCriteria } from './synchronizationJobRestartCriteria';
import { SynchronizationJobRestartScope } from './synchronizationJobRestartScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronizationJobRestartCriteria(writer: SerializationWriter, synchronizationJobRestartCriteria: SynchronizationJobRestartCriteria | undefined = {} as SynchronizationJobRestartCriteria) : void {
        writer.writeStringValue("@odata.type", synchronizationJobRestartCriteria.odataType);
        writer.writeEnumValue<SynchronizationJobRestartScope[]>("resetScope", synchronizationJobRestartCriteria.resetScope);
        writer.writeAdditionalData(synchronizationJobRestartCriteria.additionalData);
}
