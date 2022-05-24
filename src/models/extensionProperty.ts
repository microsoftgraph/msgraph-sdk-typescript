import {DirectoryObject} from './directoryObject';

export interface ExtensionProperty extends DirectoryObject{
    /** Display name of the application object on which this extension property is defined. Read-only. */
    appDisplayName?:string | undefined;
    /** Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable. Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer - 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum */
    dataType?:string | undefined;
    /** Indicates if this extension property was synced from on-premises active directory using Azure AD Connect. Read-only. */
    isSyncedFromOnPremises?:boolean | undefined;
    /** Name of the extension property. Not nullable. */
    name?:string | undefined;
    /** Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication */
    targetObjects?:string[] | undefined;
}
