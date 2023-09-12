import { type SynchronizationSchedule } from './synchronizationSchedule';
import { SynchronizationScheduleState } from './synchronizationScheduleState';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronizationSchedule(writer: SerializationWriter, synchronizationSchedule: SynchronizationSchedule | undefined = {} as SynchronizationSchedule) : void {
        writer.writeDateValue("expiration", synchronizationSchedule.expiration);
        writer.writeDurationValue("interval", synchronizationSchedule.interval);
        writer.writeStringValue("@odata.type", synchronizationSchedule.odataType);
        writer.writeEnumValue<SynchronizationScheduleState>("state", synchronizationSchedule.state);
        writer.writeAdditionalData(synchronizationSchedule.additionalData);
}
