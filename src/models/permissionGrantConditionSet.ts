import {Entity} from './entity';
import {PermissionType} from './permissionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionGrantConditionSet extends Entity, Parsable {
    /**
     * A list of appId values for the client applications to match with, or a list with the single value all to match any client application. Default is the single value all.
     */
    clientApplicationIds?: string[] | undefined;
    /**
     * A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the single value all to match with client apps from any publisher. Default is the single value all.
     */
    clientApplicationPublisherIds?: string[] | undefined;
    /**
     * Set to true to only match on client applications with a verified publisher. Set to false to match on any client app, even if it does not have a verified publisher. Default is false.
     */
    clientApplicationsFromVerifiedPublisherOnly?: boolean | undefined;
    /**
     * A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single value all to match with client apps registered in any tenant. Default is the single value all.
     */
    clientApplicationTenantIds?: string[] | undefined;
    /**
     * The permission classification for the permission being granted, or all to match with any permission classification (including permissions which are not classified). Default is all.
     */
    permissionClassification?: string | undefined;
    /**
     * The list of id values for the specific permissions to match with, or a list with the single value all to match with any permission. The id of delegated permissions can be found in the oauth2PermissionScopes property of the API's **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's **servicePrincipal** object. The id of resource-specific application permissions can be found in the resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value all.
     */
    permissions?: string[] | undefined;
    /**
     * The permission type of the permission being granted. Possible values: application for application permissions (e.g. app roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions which have not been configured by the API publisher to require admin consent—this value may be used in built-in permission grant policies, but cannot be used in custom permission grant policies. Required.
     */
    permissionType?: PermissionType | undefined;
    /**
     * The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any resource application or API. Default is any.
     */
    resourceApplication?: string | undefined;
}
