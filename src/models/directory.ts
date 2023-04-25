import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {createAttributeSetFromDiscriminatorValue} from './createAttributeSetFromDiscriminatorValue';
import {createCustomSecurityAttributeDefinitionFromDiscriminatorValue} from './createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createOnPremisesDirectorySynchronizationFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationFromDiscriminatorValue';
import {AdministrativeUnit, AttributeSet, CustomSecurityAttributeDefinition, DirectoryObject, Entity, IdentityProviderBase, OnPremisesDirectorySynchronization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Directory extends Entity implements Parsable {
    /** Conceptual container for user and group directory objects. */
    private _administrativeUnits?: AdministrativeUnit[] | undefined;
    /** The attributeSets property */
    private _attributeSets?: AttributeSet[] | undefined;
    /** The customSecurityAttributeDefinitions property */
    private _customSecurityAttributeDefinitions?: CustomSecurityAttributeDefinition[] | undefined;
    /** Recently deleted items. Read-only. Nullable. */
    private _deletedItems?: DirectoryObject[] | undefined;
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    private _federationConfigurations?: IdentityProviderBase[] | undefined;
    /** A container for on-premises directory synchronization functionalities that are available for the organization. */
    private _onPremisesSynchronization?: OnPremisesDirectorySynchronization[] | undefined;
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
     * Gets the attributeSets property value. The attributeSets property
     * @returns a attributeSet
     */
    public get attributeSets() {
        return this._attributeSets;
    };
    /**
     * Sets the attributeSets property value. The attributeSets property
     * @param value Value to set for the attributeSets property.
     */
    public set attributeSets(value: AttributeSet[] | undefined) {
        this._attributeSets = value;
    };
    /**
     * Instantiates a new Directory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the customSecurityAttributeDefinitions property value. The customSecurityAttributeDefinitions property
     * @returns a customSecurityAttributeDefinition
     */
    public get customSecurityAttributeDefinitions() {
        return this._customSecurityAttributeDefinitions;
    };
    /**
     * Sets the customSecurityAttributeDefinitions property value. The customSecurityAttributeDefinitions property
     * @param value Value to set for the customSecurityAttributeDefinitions property.
     */
    public set customSecurityAttributeDefinitions(value: CustomSecurityAttributeDefinition[] | undefined) {
        this._customSecurityAttributeDefinitions = value;
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
            "attributeSets": n => { this.attributeSets = n.getCollectionOfObjectValues<AttributeSet>(createAttributeSetFromDiscriminatorValue); },
            "customSecurityAttributeDefinitions": n => { this.customSecurityAttributeDefinitions = n.getCollectionOfObjectValues<CustomSecurityAttributeDefinition>(createCustomSecurityAttributeDefinitionFromDiscriminatorValue); },
            "deletedItems": n => { this.deletedItems = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "federationConfigurations": n => { this.federationConfigurations = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
            "onPremisesSynchronization": n => { this.onPremisesSynchronization = n.getCollectionOfObjectValues<OnPremisesDirectorySynchronization>(createOnPremisesDirectorySynchronizationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the onPremisesSynchronization property value. A container for on-premises directory synchronization functionalities that are available for the organization.
     * @returns a onPremisesDirectorySynchronization
     */
    public get onPremisesSynchronization() {
        return this._onPremisesSynchronization;
    };
    /**
     * Sets the onPremisesSynchronization property value. A container for on-premises directory synchronization functionalities that are available for the organization.
     * @param value Value to set for the onPremisesSynchronization property.
     */
    public set onPremisesSynchronization(value: OnPremisesDirectorySynchronization[] | undefined) {
        this._onPremisesSynchronization = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("administrativeUnits", this.administrativeUnits);
        writer.writeCollectionOfObjectValues<AttributeSet>("attributeSets", this.attributeSets);
        writer.writeCollectionOfObjectValues<CustomSecurityAttributeDefinition>("customSecurityAttributeDefinitions", this.customSecurityAttributeDefinitions);
        writer.writeCollectionOfObjectValues<DirectoryObject>("deletedItems", this.deletedItems);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("federationConfigurations", this.federationConfigurations);
        writer.writeCollectionOfObjectValues<OnPremisesDirectorySynchronization>("onPremisesSynchronization", this.onPremisesSynchronization);
    };
}
