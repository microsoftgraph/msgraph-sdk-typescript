import {DirectoryDefinition} from './directoryDefinition';
import {Entity} from './entity';
import {SynchronizationRule} from './synchronizationRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationSchema extends Entity, Parsable {
    /**
     * Contains the collection of directories and all of their objects.
     */
    directories?: DirectoryDefinition[] | undefined;
    /**
     * A collection of synchronization rules configured for the synchronizationJob or synchronizationTemplate.
     */
    synchronizationRules?: SynchronizationRule[] | undefined;
    /**
     * The version of the schema, updated automatically with every schema change.
     */
    version?: string | undefined;
}
