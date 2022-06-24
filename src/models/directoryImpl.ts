import {AdministrativeUnit} from './administrativeUnit';
import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {Directory} from './directory';
import {DirectoryObject} from './directoryObject';
import {IdentityProviderBase} from './identityProviderBase';
import {AdministrativeUnitImpl, DirectoryObjectImpl, EntityImpl, IdentityProviderBaseImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the directory singleton. */
export class DirectoryImpl extends EntityImpl implements Directory {
    /** Conceptual container for user and group directory objects. */
    public administrativeUnits?: AdministrativeUnit[] | undefined;
    /** Recently deleted items. Read-only. Nullable. */
    public deletedItems?: DirectoryObject[] | undefined;
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    public federationConfigurations?: IdentityProviderBase[] | undefined;
    /**
     * Instantiates a new directory and sets the default values.
     * @param directoryParameterValue 
     */
    public constructor(directoryParameterValue?: Directory | undefined) {
        super(directoryParameterValue);
        const administrativeUnitsArrValue: AdministrativeUnitImpl[] = []; directoryParameterValue.administrativeUnits?.forEach(element => {administrativeUnitsArrValue.push(element instanceof AdministrativeUnitImpl? element : new AdministrativeUnitImpl(element));});
        this.administrativeUnits = administrativeUnitsArrValue;
        const deletedItemsArrValue: DirectoryObjectImpl[] = []; directoryParameterValue.deletedItems?.forEach(element => {deletedItemsArrValue.push(element instanceof DirectoryObjectImpl? element : new DirectoryObjectImpl(element));});
        this.deletedItems = deletedItemsArrValue;
        const federationConfigurationsArrValue: IdentityProviderBaseImpl[] = []; directoryParameterValue.federationConfigurations?.forEach(element => {federationConfigurationsArrValue.push(element instanceof IdentityProviderBaseImpl? element : new IdentityProviderBaseImpl(element));});
        this.federationConfigurations = federationConfigurationsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "administrativeUnits": n => { this.administrativeUnits = n.getCollectionOfObjectValues<AdministrativeUnitImpl>(createAdministrativeUnitFromDiscriminatorValue); },
            "deletedItems": n => { this.deletedItems = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "federationConfigurations": n => { this.federationConfigurations = n.getCollectionOfObjectValues<IdentityProviderBaseImpl>(createIdentityProviderBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.administrativeUnits && this.administrativeUnits.length != 0){        const administrativeUnitsArrValue: AdministrativeUnitImpl[] = []; this.administrativeUnits?.forEach(element => {administrativeUnitsArrValue.push(element instanceof AdministrativeUnitImpl? element : new AdministrativeUnitImpl(element));});
            writer.writeCollectionOfObjectValues<AdministrativeUnitImpl>("administrativeUnits", administrativeUnitsArrValue);
        }
        if(this.deletedItems && this.deletedItems.length != 0){        const deletedItemsArrValue: DirectoryObjectImpl[] = []; this.deletedItems?.forEach(element => {deletedItemsArrValue.push(element instanceof DirectoryObjectImpl? element : new DirectoryObjectImpl(element));});
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("deletedItems", deletedItemsArrValue);
        }
        if(this.federationConfigurations && this.federationConfigurations.length != 0){        const federationConfigurationsArrValue: IdentityProviderBaseImpl[] = []; this.federationConfigurations?.forEach(element => {federationConfigurationsArrValue.push(element instanceof IdentityProviderBaseImpl? element : new IdentityProviderBaseImpl(element));});
            writer.writeCollectionOfObjectValues<IdentityProviderBaseImpl>("federationConfigurations", federationConfigurationsArrValue);
        }
    };
}
