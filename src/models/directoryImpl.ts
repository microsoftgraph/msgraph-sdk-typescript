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
    private _administrativeUnits?: AdministrativeUnit[] | undefined;
    /** Recently deleted items. Read-only. Nullable. */
    private _deletedItems?: DirectoryObject[] | undefined;
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    private _federationConfigurations?: IdentityProviderBase[] | undefined;
    /**
     * Gets the administrativeUnits property value. Conceptual container for user and group directory objects.
     * @returns a AdministrativeUnitInterface
     */
    public get administrativeUnits() {
        return this._administrativeUnits;
    };
    /**
     * Sets the administrativeUnits property value. Conceptual container for user and group directory objects.
     * @param value Value to set for the administrativeUnits property.
     */
    public set administrativeUnits(value: AdministrativeUnit[] | undefined) {
        if(value) {
            const administrativeUnitsArrValue: AdministrativeUnitImpl[] = [];
            this.administrativeUnits?.forEach(element => {
                administrativeUnitsArrValue.push((element instanceof AdministrativeUnitImpl? element as AdministrativeUnitImpl:new AdministrativeUnitImpl(element)));
            });
            this._administrativeUnits = administrativeUnitsArrValue;
        }
    };
    /**
     * Instantiates a new directory and sets the default values.
     * @param directoryParameterValue 
     */
    public constructor(directoryParameterValue?: Directory | undefined) {
        super(directoryParameterValue);
        this._administrativeUnits = directoryParameterValue?.administrativeUnits;
        this._deletedItems = directoryParameterValue?.deletedItems;
        this._federationConfigurations = directoryParameterValue?.federationConfigurations;
    };
    /**
     * Gets the deletedItems property value. Recently deleted items. Read-only. Nullable.
     * @returns a DirectoryObjectInterface
     */
    public get deletedItems() {
        return this._deletedItems;
    };
    /**
     * Sets the deletedItems property value. Recently deleted items. Read-only. Nullable.
     * @param value Value to set for the deletedItems property.
     */
    public set deletedItems(value: DirectoryObject[] | undefined) {
        if(value) {
            const deletedItemsArrValue: DirectoryObjectImpl[] = [];
            this.deletedItems?.forEach(element => {
                deletedItemsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._deletedItems = deletedItemsArrValue;
        }
    };
    /**
     * Gets the federationConfigurations property value. Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
     * @returns a IdentityProviderBaseInterface
     */
    public get federationConfigurations() {
        return this._federationConfigurations;
    };
    /**
     * Sets the federationConfigurations property value. Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
     * @param value Value to set for the federationConfigurations property.
     */
    public set federationConfigurations(value: IdentityProviderBase[] | undefined) {
        if(value) {
            const federationConfigurationsArrValue: IdentityProviderBaseImpl[] = [];
            this.federationConfigurations?.forEach(element => {
                federationConfigurationsArrValue.push((element instanceof IdentityProviderBaseImpl? element as IdentityProviderBaseImpl:new IdentityProviderBaseImpl(element)));
            });
            this._federationConfigurations = federationConfigurationsArrValue;
        }
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
        if(this.administrativeUnits && this.administrativeUnits.length != 0){        const administrativeUnitsArrValue: AdministrativeUnitImpl[] = [];
        this.administrativeUnits?.forEach(element => {
            administrativeUnitsArrValue.push((element instanceof AdministrativeUnitImpl? element as AdministrativeUnitImpl:new AdministrativeUnitImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AdministrativeUnitImpl>("administrativeUnits", administrativeUnitsArrValue);
        }
        if(this.deletedItems && this.deletedItems.length != 0){        const deletedItemsArrValue: DirectoryObjectImpl[] = [];
        this.deletedItems?.forEach(element => {
            deletedItemsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("deletedItems", deletedItemsArrValue);
        }
        if(this.federationConfigurations && this.federationConfigurations.length != 0){        const federationConfigurationsArrValue: IdentityProviderBaseImpl[] = [];
        this.federationConfigurations?.forEach(element => {
            federationConfigurationsArrValue.push((element instanceof IdentityProviderBaseImpl? element as IdentityProviderBaseImpl:new IdentityProviderBaseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentityProviderBaseImpl>("federationConfigurations", federationConfigurationsArrValue);
        }
    };
}
