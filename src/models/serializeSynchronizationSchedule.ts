import {SynchronizationSchedule} from './synchronizationSchedule';
import {SynchronizationScheduleState} from './synchronizationScheduleState';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationSchedule(writer: SerializationWriter, synchronizationSchedule: SynchronizationSchedule | undefined = {} as SynchronizationSchedule) : void {
        writer.writeDateValue("expiration", synchronizationSchedule.expiration);
        writer.writeDurationValue("interval", synchronizationSchedule.interval);
        writer.writeStringValue("@odata.type", synchronizationSchedule.odataType);
        writer.writeEnumValue<SynchronizationScheduleState>("state", synchronizationSchedule.state);
        writer.writeAdditionalData(synchronizationSchedule.additionalData);
}
