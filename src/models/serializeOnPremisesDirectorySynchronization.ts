import {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {OnPremisesDirectorySynchronizationConfiguration} from './onPremisesDirectorySynchronizationConfiguration';
import {OnPremisesDirectorySynchronizationFeature} from './onPremisesDirectorySynchronizationFeature';
import {serializeEntity} from './serializeEntity';
import {serializeOnPremisesDirectorySynchronizationConfiguration} from './serializeOnPremisesDirectorySynchronizationConfiguration';
import {serializeOnPremisesDirectorySynchronizationFeature} from './serializeOnPremisesDirectorySynchronizationFeature';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesDirectorySynchronization(writer: SerializationWriter, onPremisesDirectorySynchronization: OnPremisesDirectorySynchronization | undefined = {} as OnPremisesDirectorySynchronization) : void {
        serializeEntity(writer, onPremisesDirectorySynchronization)
        writer.writeObjectValue<OnPremisesDirectorySynchronizationConfiguration>("configuration", onPremisesDirectorySynchronization.configuration, serializeOnPremisesDirectorySynchronizationConfiguration);
        writer.writeObjectValue<OnPremisesDirectorySynchronizationFeature>("features", onPremisesDirectorySynchronization.features, serializeOnPremisesDirectorySynchronizationFeature);
}
