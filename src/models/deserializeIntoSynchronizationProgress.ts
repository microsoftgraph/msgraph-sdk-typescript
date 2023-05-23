import {SynchronizationProgress} from './synchronizationProgress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationProgress(synchronizationProgress: SynchronizationProgress | undefined = {} as SynchronizationProgress) : Record<string, (node: ParseNode) => void> {
    return {
        "completedUnits": n => { synchronizationProgress.completedUnits = n.getNumberValue(); },
        "@odata.type": n => { synchronizationProgress.odataType = n.getStringValue(); },
        "progressObservationDateTime": n => { synchronizationProgress.progressObservationDateTime = n.getDateValue(); },
        "totalUnits": n => { synchronizationProgress.totalUnits = n.getNumberValue(); },
        "units": n => { synchronizationProgress.units = n.getStringValue(); },
    }
}
