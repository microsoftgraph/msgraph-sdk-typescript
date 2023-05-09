import {createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue';
import {createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {OnPremisesDirectorySynchronizationConfiguration} from './onPremisesDirectorySynchronizationConfiguration';
import {OnPremisesDirectorySynchronizationFeature} from './onPremisesDirectorySynchronizationFeature';
import {serializeOnPremisesDirectorySynchronizationConfiguration} from './serializeOnPremisesDirectorySynchronizationConfiguration';
import {serializeOnPremisesDirectorySynchronizationFeature} from './serializeOnPremisesDirectorySynchronizationFeature';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesDirectorySynchronization(onPremisesDirectorySynchronization: OnPremisesDirectorySynchronization | undefined = {} as OnPremisesDirectorySynchronization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onPremisesDirectorySynchronization),
        "configuration": n => { onPremisesDirectorySynchronization.configuration = n.getObjectValue<OnPremisesDirectorySynchronizationConfiguration>(createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue); },
        "features": n => { onPremisesDirectorySynchronization.features = n.getObjectValue<OnPremisesDirectorySynchronizationFeature>(createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue); },
    }
}
