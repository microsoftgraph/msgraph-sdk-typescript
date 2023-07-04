import {DirectoryDefinition} from './directoryDefinition';
import {Entity} from './entity';
import {SynchronizationRule} from './synchronizationRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationSchema extends Entity, Parsable {
    /**
     * The directories property
     */
    directories?: DirectoryDefinition[] | undefined;
    /**
     * The synchronizationRules property
     */
    synchronizationRules?: SynchronizationRule[] | undefined;
    /**
     * The version property
     */
    version?: string | undefined;
}
