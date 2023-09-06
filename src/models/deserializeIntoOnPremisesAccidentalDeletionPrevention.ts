import { type OnPremisesAccidentalDeletionPrevention } from './onPremisesAccidentalDeletionPrevention';
import { OnPremisesDirectorySynchronizationDeletionPreventionType } from './onPremisesDirectorySynchronizationDeletionPreventionType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesAccidentalDeletionPrevention(onPremisesAccidentalDeletionPrevention: OnPremisesAccidentalDeletionPrevention | undefined = {} as OnPremisesAccidentalDeletionPrevention) : Record<string, (node: ParseNode) => void> {
    return {
        "alertThreshold": n => { onPremisesAccidentalDeletionPrevention.alertThreshold = n.getNumberValue(); },
        "@odata.type": n => { onPremisesAccidentalDeletionPrevention.odataType = n.getStringValue(); },
        "synchronizationPreventionType": n => { onPremisesAccidentalDeletionPrevention.synchronizationPreventionType = n.getEnumValue<OnPremisesDirectorySynchronizationDeletionPreventionType>(OnPremisesDirectorySynchronizationDeletionPreventionType); },
    }
}
