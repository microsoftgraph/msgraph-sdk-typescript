import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplicationTemplate extends Entity implements Parsable {
    /** The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer, Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications, Tools, Travel, and Web design & hosting. */
    private _categories?: string[] | undefined;
    /** A description of the application. */
    private _description?: string | undefined;
    /** The name of the application. */
    private _displayName?: string | undefined;
    /** The home page URL of the application. */
    private _homePageUrl?: string | undefined;
    /** The URL to get the logo for this application. */
    private _logoUrl?: string | undefined;
    /** The name of the publisher for this application. */
    private _publisher?: string | undefined;
    /** The list of provisioning modes supported by this application. The only valid value is sync. */
    private _supportedProvisioningTypes?: string[] | undefined;
    /** The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and notSupported. */
    private _supportedSingleSignOnModes?: string[] | undefined;
    /**
     * Gets the categories property value. The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer, Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications, Tools, Travel, and Web design & hosting.
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer, Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications, Tools, Travel, and Web design & hosting.
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Instantiates a new ApplicationTemplate and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.applicationTemplate";
    };
    /**
     * Gets the description property value. A description of the application.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A description of the application.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The name of the application.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the application.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "categories": n => { this.categories = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "homePageUrl": n => { this.homePageUrl = n.getStringValue(); },
            "logoUrl": n => { this.logoUrl = n.getStringValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "supportedProvisioningTypes": n => { this.supportedProvisioningTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "supportedSingleSignOnModes": n => { this.supportedSingleSignOnModes = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the homePageUrl property value. The home page URL of the application.
     * @returns a string
     */
    public get homePageUrl() {
        return this._homePageUrl;
    };
    /**
     * Sets the homePageUrl property value. The home page URL of the application.
     * @param value Value to set for the homePageUrl property.
     */
    public set homePageUrl(value: string | undefined) {
        this._homePageUrl = value;
    };
    /**
     * Gets the logoUrl property value. The URL to get the logo for this application.
     * @returns a string
     */
    public get logoUrl() {
        return this._logoUrl;
    };
    /**
     * Sets the logoUrl property value. The URL to get the logo for this application.
     * @param value Value to set for the logoUrl property.
     */
    public set logoUrl(value: string | undefined) {
        this._logoUrl = value;
    };
    /**
     * Gets the publisher property value. The name of the publisher for this application.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. The name of the publisher for this application.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("homePageUrl", this.homePageUrl);
        writer.writeStringValue("logoUrl", this.logoUrl);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeCollectionOfPrimitiveValues<string>("supportedProvisioningTypes", this.supportedProvisioningTypes);
        writer.writeCollectionOfPrimitiveValues<string>("supportedSingleSignOnModes", this.supportedSingleSignOnModes);
    };
    /**
     * Gets the supportedProvisioningTypes property value. The list of provisioning modes supported by this application. The only valid value is sync.
     * @returns a string
     */
    public get supportedProvisioningTypes() {
        return this._supportedProvisioningTypes;
    };
    /**
     * Sets the supportedProvisioningTypes property value. The list of provisioning modes supported by this application. The only valid value is sync.
     * @param value Value to set for the supportedProvisioningTypes property.
     */
    public set supportedProvisioningTypes(value: string[] | undefined) {
        this._supportedProvisioningTypes = value;
    };
    /**
     * Gets the supportedSingleSignOnModes property value. The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and notSupported.
     * @returns a string
     */
    public get supportedSingleSignOnModes() {
        return this._supportedSingleSignOnModes;
    };
    /**
     * Sets the supportedSingleSignOnModes property value. The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and notSupported.
     * @param value Value to set for the supportedSingleSignOnModes property.
     */
    public set supportedSingleSignOnModes(value: string[] | undefined) {
        this._supportedSingleSignOnModes = value;
    };
}
