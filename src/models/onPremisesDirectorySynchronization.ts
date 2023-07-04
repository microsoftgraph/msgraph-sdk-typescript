import {Entity} from './entity';
import {OnPremisesDirectorySynchronizationConfiguration} from './onPremisesDirectorySynchronizationConfiguration';
import {OnPremisesDirectorySynchronizationFeature} from './onPremisesDirectorySynchronizationFeature';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesDirectorySynchronization extends Entity, Parsable {
    /**
     * Consists of configurations that can be fine-tuned and impact the on-premises directory synchronization process for a tenant.
     */
    configuration?: OnPremisesDirectorySynchronizationConfiguration | undefined;
    /**
     * The features property
     */
    features?: OnPremisesDirectorySynchronizationFeature | undefined;
}
