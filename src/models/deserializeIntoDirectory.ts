import type {AdministrativeUnit} from './administrativeUnit';
import type {AttributeSet} from './attributeSet';
import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {createAttributeSetFromDiscriminatorValue} from './createAttributeSetFromDiscriminatorValue';
import {createCustomSecurityAttributeDefinitionFromDiscriminatorValue} from './createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createOnPremisesDirectorySynchronizationFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationFromDiscriminatorValue';
import type {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {Directory} from './directory';
import type {DirectoryObject} from './directoryObject';
import type {IdentityProviderBase} from './identityProviderBase';
import type {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeAttributeSet} from './serializeAttributeSet';
import {serializeCustomSecurityAttributeDefinition} from './serializeCustomSecurityAttributeDefinition';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeOnPremisesDirectorySynchronization} from './serializeOnPremisesDirectorySynchronization';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectory(directory: Directory | undefined = {} as Directory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directory),
        "administrativeUnits": n => { directory.administrativeUnits = n.getCollectionOfObjectValues<AdministrativeUnit>(createAdministrativeUnitFromDiscriminatorValue); },
        "attributeSets": n => { directory.attributeSets = n.getCollectionOfObjectValues<AttributeSet>(createAttributeSetFromDiscriminatorValue); },
        "customSecurityAttributeDefinitions": n => { directory.customSecurityAttributeDefinitions = n.getCollectionOfObjectValues<CustomSecurityAttributeDefinition>(createCustomSecurityAttributeDefinitionFromDiscriminatorValue); },
        "deletedItems": n => { directory.deletedItems = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "federationConfigurations": n => { directory.federationConfigurations = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
        "onPremisesSynchronization": n => { directory.onPremisesSynchronization = n.getCollectionOfObjectValues<OnPremisesDirectorySynchronization>(createOnPremisesDirectorySynchronizationFromDiscriminatorValue); },
    }
}
