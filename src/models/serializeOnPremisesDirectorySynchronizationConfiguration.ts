import type {OnPremisesAccidentalDeletionPrevention} from './onPremisesAccidentalDeletionPrevention';
import type {OnPremisesDirectorySynchronizationConfiguration} from './onPremisesDirectorySynchronizationConfiguration';
import {serializeOnPremisesAccidentalDeletionPrevention} from './serializeOnPremisesAccidentalDeletionPrevention';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesDirectorySynchronizationConfiguration(writer: SerializationWriter, onPremisesDirectorySynchronizationConfiguration: OnPremisesDirectorySynchronizationConfiguration | undefined = {} as OnPremisesDirectorySynchronizationConfiguration) : void {
        writer.writeObjectValue<OnPremisesAccidentalDeletionPrevention>("accidentalDeletionPrevention", onPremisesDirectorySynchronizationConfiguration.accidentalDeletionPrevention, serializeOnPremisesAccidentalDeletionPrevention);
        writer.writeStringValue("@odata.type", onPremisesDirectorySynchronizationConfiguration.odataType);
        writer.writeAdditionalData(onPremisesDirectorySynchronizationConfiguration.additionalData);
}
