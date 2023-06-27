import {Entity} from './entity';
import {SynchronizationMetadataEntry} from './synchronizationMetadataEntry';
import {SynchronizationSchema} from './synchronizationSchema';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationTemplate extends Entity, Parsable {
    /**
     * The applicationId property
     */
    applicationId?: string | undefined;
    /**
     * The default property
     */
    defaultEscaped?: boolean | undefined;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The discoverable property
     */
    discoverable?: boolean | undefined;
    /**
     * The factoryTag property
     */
    factoryTag?: string | undefined;
    /**
     * The metadata property
     */
    metadata?: SynchronizationMetadataEntry[] | undefined;
    /**
     * The schema property
     */
    schema?: SynchronizationSchema | undefined;
}
