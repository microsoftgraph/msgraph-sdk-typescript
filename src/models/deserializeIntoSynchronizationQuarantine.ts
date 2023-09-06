import { createSynchronizationErrorFromDiscriminatorValue } from './createSynchronizationErrorFromDiscriminatorValue';
import { QuarantineReason } from './quarantineReason';
import { serializeSynchronizationError } from './serializeSynchronizationError';
import { type SynchronizationError } from './synchronizationError';
import { type SynchronizationQuarantine } from './synchronizationQuarantine';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationQuarantine(synchronizationQuarantine: SynchronizationQuarantine | undefined = {} as SynchronizationQuarantine) : Record<string, (node: ParseNode) => void> {
    return {
        "currentBegan": n => { synchronizationQuarantine.currentBegan = n.getDateValue(); },
        "error": n => { synchronizationQuarantine.errorEscaped = n.getObjectValue<SynchronizationError>(createSynchronizationErrorFromDiscriminatorValue); },
        "nextAttempt": n => { synchronizationQuarantine.nextAttempt = n.getDateValue(); },
        "@odata.type": n => { synchronizationQuarantine.odataType = n.getStringValue(); },
        "reason": n => { synchronizationQuarantine.reason = n.getEnumValue<QuarantineReason>(QuarantineReason); },
        "seriesBegan": n => { synchronizationQuarantine.seriesBegan = n.getDateValue(); },
        "seriesCount": n => { synchronizationQuarantine.seriesCount = n.getNumberValue(); },
    }
}
