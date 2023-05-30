import {DirectoryDefinitionDiscoverabilities} from './directoryDefinitionDiscoverabilities';
import {Entity} from './entity';
import {ObjectDefinition} from './objectDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryDefinition extends Entity, Parsable {
    /** The discoverabilities property */
    discoverabilities?: DirectoryDefinitionDiscoverabilities | undefined;
    /** The discoveryDateTime property */
    discoveryDateTime?: Date | undefined;
    /** The name property */
    name?: string | undefined;
    /** The objects property */
    objects?: ObjectDefinition[] | undefined;
    /** The readOnly property */
    readOnly?: boolean | undefined;
    /** The version property */
    version?: string | undefined;
}
