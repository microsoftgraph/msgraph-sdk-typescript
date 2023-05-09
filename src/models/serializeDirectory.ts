import {AdministrativeUnit} from './administrativeUnit';
import {AttributeSet} from './attributeSet';
import {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import {Directory} from './directory';
import {DirectoryObject} from './directoryObject';
import {IdentityProviderBase} from './identityProviderBase';
import {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeAttributeSet} from './serializeAttributeSet';
import {serializeCustomSecurityAttributeDefinition} from './serializeCustomSecurityAttributeDefinition';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeOnPremisesDirectorySynchronization} from './serializeOnPremisesDirectorySynchronization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectory(writer: SerializationWriter, directory: Directory | undefined = {} as Directory) : void {
        serializeEntity(writer, directory)
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("administrativeUnits", directory.administrativeUnits, serializeAdministrativeUnit);
        writer.writeCollectionOfObjectValues<AttributeSet>("attributeSets", directory.attributeSets, serializeAttributeSet);
        writer.writeCollectionOfObjectValues<CustomSecurityAttributeDefinition>("customSecurityAttributeDefinitions", directory.customSecurityAttributeDefinitions, serializeCustomSecurityAttributeDefinition);
        writer.writeCollectionOfObjectValues<DirectoryObject>("deletedItems", directory.deletedItems, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("federationConfigurations", directory.federationConfigurations, serializeIdentityProviderBase);
        writer.writeCollectionOfObjectValues<OnPremisesDirectorySynchronization>("onPremisesSynchronization", directory.onPremisesSynchronization, serializeOnPremisesDirectorySynchronization);
}
