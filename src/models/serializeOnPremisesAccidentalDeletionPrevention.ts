import {OnPremisesAccidentalDeletionPrevention} from './onPremisesAccidentalDeletionPrevention';
import {OnPremisesDirectorySynchronizationDeletionPreventionType} from './onPremisesDirectorySynchronizationDeletionPreventionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesAccidentalDeletionPrevention(writer: SerializationWriter, onPremisesAccidentalDeletionPrevention: OnPremisesAccidentalDeletionPrevention | undefined = {} as OnPremisesAccidentalDeletionPrevention) : void {
        writer.writeNumberValue("alertThreshold", onPremisesAccidentalDeletionPrevention.alertThreshold);
        writer.writeStringValue("@odata.type", onPremisesAccidentalDeletionPrevention.odataType);
        writer.writeEnumValue<OnPremisesDirectorySynchronizationDeletionPreventionType>("synchronizationPreventionType", onPremisesAccidentalDeletionPrevention.synchronizationPreventionType);
        writer.writeAdditionalData(onPremisesAccidentalDeletionPrevention.additionalData);
}
