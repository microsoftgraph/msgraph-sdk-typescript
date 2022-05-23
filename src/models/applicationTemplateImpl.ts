import {ApplicationTemplate} from './applicationTemplate';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of applicationTemplate entities. */
export class ApplicationTemplateImpl extends EntityImpl implements ApplicationTemplate, Parsable {
    /** The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer, Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications, Tools, Travel, and Web design & hosting. */
    public categories?: string[] | undefined;
    /** A description of the application. */
    public description?: string | undefined;
    /** The name of the application. */
    public displayName?: string | undefined;
    /** The home page URL of the application. */
    public homePageUrl?: string | undefined;
    /** The URL to get the logo for this application. */
    public logoUrl?: string | undefined;
    /** The name of the publisher for this application. */
    public publisher?: string | undefined;
    /** The list of provisioning modes supported by this application. The only valid value is sync. */
    public supportedProvisioningTypes?: string[] | undefined;
    /** The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and notSupported. */
    public supportedSingleSignOnModes?: string[] | undefined;
    /**
     * Instantiates a new applicationTemplate and sets the default values.
     * @param applicationTemplateParameterValue 
     */
    public constructor(applicationTemplateParameterValue?: ApplicationTemplate | undefined) {
        super();
        this.categories = applicationTemplateParameterValue?.categories ;
        this.description = applicationTemplateParameterValue?.description ;
        this.displayName = applicationTemplateParameterValue?.displayName ;
        this.homePageUrl = applicationTemplateParameterValue?.homePageUrl ;
        this.logoUrl = applicationTemplateParameterValue?.logoUrl ;
        this.publisher = applicationTemplateParameterValue?.publisher ;
        this.supportedProvisioningTypes = applicationTemplateParameterValue?.supportedProvisioningTypes ;
        this.supportedSingleSignOnModes = applicationTemplateParameterValue?.supportedSingleSignOnModes ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.categories){
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.homePageUrl){
        writer.writeStringValue("homePageUrl", this.homePageUrl);
        }
        if(this.logoUrl){
        writer.writeStringValue("logoUrl", this.logoUrl);
        }
        if(this.publisher){
        writer.writeStringValue("publisher", this.publisher);
        }
        if(this.supportedProvisioningTypes){
        writer.writeCollectionOfPrimitiveValues<string>("supportedProvisioningTypes", this.supportedProvisioningTypes);
        }
        if(this.supportedSingleSignOnModes){
        writer.writeCollectionOfPrimitiveValues<string>("supportedSingleSignOnModes", this.supportedSingleSignOnModes);
        }
    };
}
