import {AdministrativeUnit} from './administrativeUnit';
import {AttributeSet} from './attributeSet';
import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {createAttributeSetFromDiscriminatorValue} from './createAttributeSetFromDiscriminatorValue';
import {createCustomSecurityAttributeDefinitionFromDiscriminatorValue} from './createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createOnPremisesDirectorySynchronizationFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationFromDiscriminatorValue';
import {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Directory} from './directory';
import {DirectoryObject} from './directoryObject';
import {IdentityProviderBase} from './identityProviderBase';
import {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeAttributeSet} from './serializeAttributeSet';
import {serializeCustomSecurityAttributeDefinition} from './serializeCustomSecurityAttributeDefinition';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeOnPremisesDirectorySynchronization} from './serializeOnPremisesDirectorySynchronization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
