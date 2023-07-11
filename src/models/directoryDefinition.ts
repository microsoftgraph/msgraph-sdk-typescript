import {DirectoryDefinitionDiscoverabilities} from './directoryDefinitionDiscoverabilities';
import {Entity} from './entity';
import {ObjectDefinition} from './objectDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryDefinition extends Entity, Parsable {
    /**
     * The discoverabilities property
     */
    discoverabilities?: DirectoryDefinitionDiscoverabilities | undefined;
    /**
     * Represents the discovery date and time using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    discoveryDateTime?: Date | undefined;
    /**
     * Name of the directory. Must be unique within the synchronization schema. Not nullable.
     */
    name?: string | undefined;
    /**
     * Collection of objects supported by the directory.
     */
    objects?: ObjectDefinition[] | undefined;
    /**
     * Whether this object is read-only.
     */
    readOnly?: boolean | undefined;
    /**
     * Read only value that indicates version discovered. null if discovery has not yet occurred.
     */
    version?: string | undefined;
}
