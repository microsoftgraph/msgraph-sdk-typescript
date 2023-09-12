import { createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue } from './createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue';
import { type OnPremisesAccidentalDeletionPrevention } from './onPremisesAccidentalDeletionPrevention';
import { type OnPremisesDirectorySynchronizationConfiguration } from './onPremisesDirectorySynchronizationConfiguration';
import { serializeOnPremisesAccidentalDeletionPrevention } from './serializeOnPremisesAccidentalDeletionPrevention';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesDirectorySynchronizationConfiguration(onPremisesDirectorySynchronizationConfiguration: OnPremisesDirectorySynchronizationConfiguration | undefined = {} as OnPremisesDirectorySynchronizationConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "accidentalDeletionPrevention": n => { onPremisesDirectorySynchronizationConfiguration.accidentalDeletionPrevention = n.getObjectValue<OnPremisesAccidentalDeletionPrevention>(createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue); },
        "@odata.type": n => { onPremisesDirectorySynchronizationConfiguration.odataType = n.getStringValue(); },
    }
}
