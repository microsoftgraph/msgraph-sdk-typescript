import {Entity} from './entity';
import {SynchronizationMetadataEntry} from './synchronizationMetadataEntry';
import {SynchronizationSchema} from './synchronizationSchema';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface SynchronizationTemplate extends Entity, Parsable {
    /**
     * Identifier of the application this template belongs to.
     */
    applicationId?: Guid | undefined;
    /**
     * true if this template is recommended to be the default for the application.
     */
    defaultEscaped?: boolean | undefined;
    /**
     * Description of the template.
     */
    description?: string | undefined;
    /**
     * true if this template should appear in the collection of templates available for the application instance (service principal).
     */
    discoverable?: boolean | undefined;
    /**
     * One of the well-known factory tags supported by the synchronization engine. The factoryTag tells the synchronization engine which implementation to use when processing jobs based on this template.
     */
    factoryTag?: string | undefined;
    /**
     * Additional extension properties. Unless mentioned explicitly, metadata values should not be changed.
     */
    metadata?: SynchronizationMetadataEntry[] | undefined;
    /**
     * Default synchronization schema for the jobs based on this template.
     */
    schema?: SynchronizationSchema | undefined;
}
