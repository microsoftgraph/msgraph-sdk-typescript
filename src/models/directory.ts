import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {AdministrativeUnit, DirectoryObject, Entity, IdentityProviderBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the directory singleton.
 */
export class Directory extends Entity implements Parsable {
    /** Conceptual container for user and group directory objects. */
    private _administrativeUnits?: AdministrativeUnit[] | undefined;
    /** Recently deleted items. Read-only. Nullable. */
    private _deletedItems?: DirectoryObject[] | undefined;
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    private _federationConfigurations?: IdentityProviderBase[] | undefined;
    /**
     * Gets the administrativeUnits property value. Conceptual container for user and group directory objects.
     * @returns a administrativeUnit
     */
    public get administrativeUnits() {
        return this._administrativeUnits;
    };
    /**
     * Sets the administrativeUnits property value. Conceptual container for user and group directory objects.
     * @param value Value to set for the administrativeUnits property.
     */
    public set administrativeUnits(value: AdministrativeUnit[] | undefined) {
        this._administrativeUnits = value;
    };
    /**
     * Instantiates a new directory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deletedItems property value. Recently deleted items. Read-only. Nullable.
     * @returns a directoryObject
     */
    public get deletedItems() {
        return this._deletedItems;
    };
    /**
     * Sets the deletedItems property value. Recently deleted items. Read-only. Nullable.
     * @param value Value to set for the deletedItems property.
     */
    public set deletedItems(value: DirectoryObject[] | undefined) {
        this._deletedItems = value;
    };
    /**
     * Gets the federationConfigurations property value. Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
     * @returns a identityProviderBase
     */
    public get federationConfigurations() {
        return this._federationConfigurations;
    };
    /**
     * Sets the federationConfigurations property value. Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
     * @param value Value to set for the federationConfigurations property.
     */
    public set federationConfigurations(value: IdentityProviderBase[] | undefined) {
        this._federationConfigurations = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "administrativeUnits": n => { this.administrativeUnits = n.getCollectionOfObjectValues<AdministrativeUnit>(createAdministrativeUnitFromDiscriminatorValue); },
            "deletedItems": n => { this.deletedItems = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "federationConfigurations": n => { this.federationConfigurations = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("administrativeUnits", this.administrativeUnits);
        writer.writeCollectionOfObjectValues<DirectoryObject>("deletedItems", this.deletedItems);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("federationConfigurations", this.federationConfigurations);
    };
}
