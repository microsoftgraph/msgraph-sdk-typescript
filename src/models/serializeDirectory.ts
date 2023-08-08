import type {AdministrativeUnit} from './administrativeUnit';
import type {AttributeSet} from './attributeSet';
import type {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import type {Directory} from './directory';
import type {DirectoryObject} from './directoryObject';
import type {IdentityProviderBase} from './identityProviderBase';
import type {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeAttributeSet} from './serializeAttributeSet';
import {serializeCustomSecurityAttributeDefinition} from './serializeCustomSecurityAttributeDefinition';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeOnPremisesDirectorySynchronization} from './serializeOnPremisesDirectorySynchronization';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectory(writer: SerializationWriter, directory: Directory | undefined = {} as Directory) : void {
        serializeEntity(writer, directory)
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("administrativeUnits", directory.administrativeUnits, serializeAdministrativeUnit);
        writer.writeCollectionOfObjectValues<AttributeSet>("attributeSets", directory.attributeSets, serializeAttributeSet);
        writer.writeCollectionOfObjectValues<CustomSecurityAttributeDefinition>("customSecurityAttributeDefinitions", directory.customSecurityAttributeDefinitions, serializeCustomSecurityAttributeDefinition);
        writer.writeCollectionOfObjectValues<DirectoryObject>("deletedItems", directory.deletedItems, serializeDirectoryObject);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("federationConfigurations", directory.federationConfigurations, serializeIdentityProviderBase);
        writer.writeCollectionOfObjectValues<OnPremisesDirectorySynchronization>("onPremisesSynchronization", directory.onPremisesSynchronization, serializeOnPremisesDirectorySynchronization);
}
