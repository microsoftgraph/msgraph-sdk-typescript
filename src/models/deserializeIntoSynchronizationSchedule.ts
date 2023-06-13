import {SynchronizationSchedule} from './synchronizationSchedule';
import {SynchronizationScheduleState} from './synchronizationScheduleState';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationSchedule(synchronizationSchedule: SynchronizationSchedule | undefined = {} as SynchronizationSchedule) : Record<string, (node: ParseNode) => void> {
    return {
        "expiration": n => { synchronizationSchedule.expiration = n.getDateValue(); },
        "interval": n => { synchronizationSchedule.interval = n.getDurationValue(); },
        "@odata.type": n => { synchronizationSchedule.odataType = n.getStringValue(); },
        "state": n => { synchronizationSchedule.state = n.getEnumValue<SynchronizationScheduleState>(SynchronizationScheduleState); },
    }
}
