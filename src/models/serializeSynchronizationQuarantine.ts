import {QuarantineReason} from './quarantineReason';
import {serializeSynchronizationError} from './serializeSynchronizationError';
import {SynchronizationError} from './synchronizationError';
import {SynchronizationQuarantine} from './synchronizationQuarantine';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationQuarantine(writer: SerializationWriter, synchronizationQuarantine: SynchronizationQuarantine | undefined = {} as SynchronizationQuarantine) : void {
        writer.writeDateValue("currentBegan", synchronizationQuarantine.currentBegan);
        writer.writeObjectValue<SynchronizationError>("error", synchronizationQuarantine.errorEscaped, serializeSynchronizationError);
        writer.writeDateValue("nextAttempt", synchronizationQuarantine.nextAttempt);
        writer.writeStringValue("@odata.type", synchronizationQuarantine.odataType);
        writer.writeEnumValue<QuarantineReason>("reason", synchronizationQuarantine.reason);
        writer.writeDateValue("seriesBegan", synchronizationQuarantine.seriesBegan);
        writer.writeNumberValue("seriesCount", synchronizationQuarantine.seriesCount);
        writer.writeAdditionalData(synchronizationQuarantine.additionalData);
}
