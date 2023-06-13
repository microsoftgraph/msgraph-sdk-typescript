import {SynchronizationProgress} from './synchronizationProgress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationProgress(writer: SerializationWriter, synchronizationProgress: SynchronizationProgress | undefined = {} as SynchronizationProgress) : void {
        writer.writeNumberValue("completedUnits", synchronizationProgress.completedUnits);
        writer.writeStringValue("@odata.type", synchronizationProgress.odataType);
        writer.writeDateValue("progressObservationDateTime", synchronizationProgress.progressObservationDateTime);
        writer.writeNumberValue("totalUnits", synchronizationProgress.totalUnits);
        writer.writeStringValue("units", synchronizationProgress.units);
        writer.writeAdditionalData(synchronizationProgress.additionalData);
}
