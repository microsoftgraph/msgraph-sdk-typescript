import {EntityImpl} from './index';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionType} from './permissionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class PermissionGrantConditionSetImpl extends EntityImpl implements Parsable, PermissionGrantConditionSet {
    /** A list of appId values for the client applications to match with, or a list with the single value all to match any client application. Default is the single value all. */
    public clientApplicationIds?: string[] | undefined;
    /** A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the single value all to match with client apps from any publisher. Default is the single value all. */
    public clientApplicationPublisherIds?: string[] | undefined;
    /** Set to true to only match on client applications with a verified publisher. Set to false to match on any client app, even if it does not have a verified publisher. Default is false. */
    public clientApplicationsFromVerifiedPublisherOnly?: boolean | undefined;
    /** A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single value all to match with client apps registered in any tenant. Default is the single value all. */
    public clientApplicationTenantIds?: string[] | undefined;
    /** The permission classification for the permission being granted, or all to match with any permission classification (including permissions which are not classified). Default is all. */
    public permissionClassification?: string | undefined;
    /** The list of id values for the specific permissions to match with, or a list with the single value all to match with any permission. The id of delegated permissions can be found in the publishedPermissionScopes property of the API's **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's **servicePrincipal** object. The id of resource-specific application permissions can be found in the resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value all. */
    public permissions?: string[] | undefined;
    /** The permission type of the permission being granted. Possible values: application for application permissions (e.g. app roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions which have not been configured by the API publisher to require admin consent—this value may be used in built-in permission grant policies, but cannot be used in custom permission grant policies. Required. */
    public permissionType?: PermissionType | undefined;
    /** The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any resource application or API. Default is any. */
    public resourceApplication?: string | undefined;
    /**
     * Instantiates a new permissionGrantConditionSet and sets the default values.
     * @param permissionGrantConditionSetParameterValue 
     */
    public constructor(permissionGrantConditionSetParameterValue?: PermissionGrantConditionSet | undefined) {
        super();
        this.clientApplicationIds = permissionGrantConditionSetParameterValue?.clientApplicationIds ;
        this.clientApplicationPublisherIds = permissionGrantConditionSetParameterValue?.clientApplicationPublisherIds ;
        this.clientApplicationsFromVerifiedPublisherOnly = permissionGrantConditionSetParameterValue?.clientApplicationsFromVerifiedPublisherOnly ;
        this.clientApplicationTenantIds = permissionGrantConditionSetParameterValue?.clientApplicationTenantIds ;
        this.permissionClassification = permissionGrantConditionSetParameterValue?.permissionClassification ;
        this.permissions = permissionGrantConditionSetParameterValue?.permissions ;
        this.permissionType = permissionGrantConditionSetParameterValue?.permissionType ;
        this.resourceApplication = permissionGrantConditionSetParameterValue?.resourceApplication ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clientApplicationIds": n => { this.clientApplicationIds = n.getCollectionOfPrimitiveValues<string>(); },
            "clientApplicationPublisherIds": n => { this.clientApplicationPublisherIds = n.getCollectionOfPrimitiveValues<string>(); },
            "clientApplicationsFromVerifiedPublisherOnly": n => { this.clientApplicationsFromVerifiedPublisherOnly = n.getBooleanValue(); },
            "clientApplicationTenantIds": n => { this.clientApplicationTenantIds = n.getCollectionOfPrimitiveValues<string>(); },
            "permissionClassification": n => { this.permissionClassification = n.getStringValue(); },
            "permissions": n => { this.permissions = n.getCollectionOfPrimitiveValues<string>(); },
            "permissionType": n => { this.permissionType = n.getEnumValue<PermissionType>(PermissionType); },
            "resourceApplication": n => { this.resourceApplication = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.clientApplicationIds){
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationIds", this.clientApplicationIds);
        }
        if(this.clientApplicationPublisherIds){
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationPublisherIds", this.clientApplicationPublisherIds);
        }
        if(this.clientApplicationsFromVerifiedPublisherOnly){
        writer.writeBooleanValue("clientApplicationsFromVerifiedPublisherOnly", this.clientApplicationsFromVerifiedPublisherOnly);
        }
        if(this.clientApplicationTenantIds){
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationTenantIds", this.clientApplicationTenantIds);
        }
        if(this.permissionClassification){
        writer.writeStringValue("permissionClassification", this.permissionClassification);
        }
        if(this.permissions){
        writer.writeCollectionOfPrimitiveValues<string>("permissions", this.permissions);
        }
        if(this.permissionType){
        writer.writeEnumValue<PermissionType>("permissionType", this.permissionType);
        }
        if(this.resourceApplication){
        writer.writeStringValue("resourceApplication", this.resourceApplication);
        }
    };
}
