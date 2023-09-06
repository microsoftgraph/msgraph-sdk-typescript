import { type Entity } from './entity';
import { type OnPremisesDirectorySynchronizationConfiguration } from './onPremisesDirectorySynchronizationConfiguration';
import { type OnPremisesDirectorySynchronizationFeature } from './onPremisesDirectorySynchronizationFeature';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
