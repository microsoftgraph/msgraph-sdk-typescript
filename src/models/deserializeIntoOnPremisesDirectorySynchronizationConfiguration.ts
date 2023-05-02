import {createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue} from './createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue';
import {OnPremisesAccidentalDeletionPrevention} from './onPremisesAccidentalDeletionPrevention';
import {OnPremisesDirectorySynchronizationConfiguration} from './onPremisesDirectorySynchronizationConfiguration';
import {serializeOnPremisesAccidentalDeletionPrevention} from './serializeOnPremisesAccidentalDeletionPrevention';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesDirectorySynchronizationConfiguration(onPremisesDirectorySynchronizationConfiguration: OnPremisesDirectorySynchronizationConfiguration | undefined = {} as OnPremisesDirectorySynchronizationConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "accidentalDeletionPrevention": n => { onPremisesDirectorySynchronizationConfiguration.accidentalDeletionPrevention = n.getObjectValue<OnPremisesAccidentalDeletionPrevention>(createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue); },
        "@odata.type": n => { onPremisesDirectorySynchronizationConfiguration.odataType = n.getStringValue(); },
    }
}
