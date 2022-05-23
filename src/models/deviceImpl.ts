import {AlternativeSecurityId} from './alternativeSecurityId';
import {createAlternativeSecurityIdFromDiscriminatorValue} from './createAlternativeSecurityIdFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {Device} from './device';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {AlternativeSecurityIdImpl, DirectoryObjectImpl, ExtensionImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class DeviceImpl extends DirectoryObjectImpl implements Device, Parsable {
    /** true if the account is enabled; otherwise, false. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property. */
    public accountEnabled?: boolean | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le). */
    public alternativeSecurityIds?: AlternativeSecurityId[] | undefined;
    /** The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy. */
    public approximateLastSignInDateTime?: Date | undefined;
    /** The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public complianceExpirationDateTime?: Date | undefined;
    /** Identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith). */
    public deviceId?: string | undefined;
    /** For internal use only. Set to null. */
    public deviceMetadata?: string | undefined;
    /** For internal use only. */
    public deviceVersion?: number | undefined;
    /** The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    public displayName?: string | undefined;
    /** The collection of open extensions defined for the device. Read-only. Nullable. */
    public extensions?: Extension[] | undefined;
    /** true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    public isCompliant?: boolean | undefined;
    /** true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    public isManaged?: boolean | undefined;
    /** Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith). */
    public mdmAppId?: string | undefined;
    /** Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand. */
    public memberOf?: DirectoryObject[] | undefined;
    /** The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    public onPremisesLastSyncDateTime?: Date | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    public onPremisesSyncEnabled?: boolean | undefined;
    /** The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    public operatingSystem?: string | undefined;
    /** Operating system version of the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    public operatingSystemVersion?: string | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections). */
    public physicalIds?: string[] | undefined;
    /** The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT. */
    public profileType?: string | undefined;
    /** The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand. */
    public registeredOwners?: DirectoryObject[] | undefined;
    /** Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand. */
    public registeredUsers?: DirectoryObject[] | undefined;
    /** List of labels applied to the device by the system. Supports $filter (eq when counting empty collections). */
    public systemLabels?: string[] | undefined;
    /** Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand. */
    public transitiveMemberOf?: DirectoryObject[] | undefined;
    /** Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory */
    public trustType?: string | undefined;
    /**
     * Instantiates a new device and sets the default values.
     * @param deviceParameterValue 
     */
    public constructor(deviceParameterValue?: Device | undefined) {
        super();
        this.accountEnabled = deviceParameterValue?.accountEnabled ;
        this.alternativeSecurityIds = deviceParameterValue?.alternativeSecurityIds ;
        this.approximateLastSignInDateTime = deviceParameterValue?.approximateLastSignInDateTime ;
        this.complianceExpirationDateTime = deviceParameterValue?.complianceExpirationDateTime ;
        this.deviceId = deviceParameterValue?.deviceId ;
        this.deviceMetadata = deviceParameterValue?.deviceMetadata ;
        this.deviceVersion = deviceParameterValue?.deviceVersion ;
        this.displayName = deviceParameterValue?.displayName ;
        this.extensions = deviceParameterValue?.extensions ;
        this.isCompliant = deviceParameterValue?.isCompliant ;
        this.isManaged = deviceParameterValue?.isManaged ;
        this.mdmAppId = deviceParameterValue?.mdmAppId ;
        this.memberOf = deviceParameterValue?.memberOf ;
        this.onPremisesLastSyncDateTime = deviceParameterValue?.onPremisesLastSyncDateTime ;
        this.onPremisesSyncEnabled = deviceParameterValue?.onPremisesSyncEnabled ;
        this.operatingSystem = deviceParameterValue?.operatingSystem ;
        this.operatingSystemVersion = deviceParameterValue?.operatingSystemVersion ;
        this.physicalIds = deviceParameterValue?.physicalIds ;
        this.profileType = deviceParameterValue?.profileType ;
        this.registeredOwners = deviceParameterValue?.registeredOwners ;
        this.registeredUsers = deviceParameterValue?.registeredUsers ;
        this.systemLabels = deviceParameterValue?.systemLabels ;
        this.transitiveMemberOf = deviceParameterValue?.transitiveMemberOf ;
        this.trustType = deviceParameterValue?.trustType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountEnabled": n => { this.accountEnabled = n.getBooleanValue(); },
            "alternativeSecurityIds": n => { this.alternativeSecurityIds = n.getCollectionOfObjectValues<AlternativeSecurityIdImpl>(createAlternativeSecurityIdFromDiscriminatorValue); },
            "approximateLastSignInDateTime": n => { this.approximateLastSignInDateTime = n.getDateValue(); },
            "complianceExpirationDateTime": n => { this.complianceExpirationDateTime = n.getDateValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceMetadata": n => { this.deviceMetadata = n.getStringValue(); },
            "deviceVersion": n => { this.deviceVersion = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "isCompliant": n => { this.isCompliant = n.getBooleanValue(); },
            "isManaged": n => { this.isManaged = n.getBooleanValue(); },
            "mdmAppId": n => { this.mdmAppId = n.getStringValue(); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "operatingSystemVersion": n => { this.operatingSystemVersion = n.getStringValue(); },
            "physicalIds": n => { this.physicalIds = n.getCollectionOfPrimitiveValues<string>(); },
            "profileType": n => { this.profileType = n.getStringValue(); },
            "registeredOwners": n => { this.registeredOwners = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "registeredUsers": n => { this.registeredUsers = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "systemLabels": n => { this.systemLabels = n.getCollectionOfPrimitiveValues<string>(); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "trustType": n => { this.trustType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountEnabled){
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        }
        if(this.alternativeSecurityIds && this.alternativeSecurityIds.length != 0){        const alternativeSecurityIdsArrValue: AlternativeSecurityIdImpl[] = []; this.alternativeSecurityIds?.forEach(element => {alternativeSecurityIdsArrValue.push(new AlternativeSecurityIdImpl(element));});
        writer.writeCollectionOfObjectValues<AlternativeSecurityIdImpl>("alternativeSecurityIds", alternativeSecurityIdsArrValue);
        }
        if(this.approximateLastSignInDateTime){
        writer.writeDateValue("approximateLastSignInDateTime", this.approximateLastSignInDateTime);
        }
        if(this.complianceExpirationDateTime){
        writer.writeDateValue("complianceExpirationDateTime", this.complianceExpirationDateTime);
        }
        if(this.deviceId){
        writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.deviceMetadata){
        writer.writeStringValue("deviceMetadata", this.deviceMetadata);
        }
        if(this.deviceVersion){
        writer.writeNumberValue("deviceVersion", this.deviceVersion);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.isCompliant){
        writer.writeBooleanValue("isCompliant", this.isCompliant);
        }
        if(this.isManaged){
        writer.writeBooleanValue("isManaged", this.isManaged);
        }
        if(this.mdmAppId){
        writer.writeStringValue("mdmAppId", this.mdmAppId);
        }
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = []; this.memberOf?.forEach(element => {memberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.onPremisesLastSyncDateTime){
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        }
        if(this.onPremisesSyncEnabled){
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        }
        if(this.operatingSystem){
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        }
        if(this.operatingSystemVersion){
        writer.writeStringValue("operatingSystemVersion", this.operatingSystemVersion);
        }
        if(this.physicalIds){
        writer.writeCollectionOfPrimitiveValues<string>("physicalIds", this.physicalIds);
        }
        if(this.profileType){
        writer.writeStringValue("profileType", this.profileType);
        }
        if(this.registeredOwners && this.registeredOwners.length != 0){        const registeredOwnersArrValue: DirectoryObjectImpl[] = []; this.registeredOwners?.forEach(element => {registeredOwnersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("registeredOwners", registeredOwnersArrValue);
        }
        if(this.registeredUsers && this.registeredUsers.length != 0){        const registeredUsersArrValue: DirectoryObjectImpl[] = []; this.registeredUsers?.forEach(element => {registeredUsersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("registeredUsers", registeredUsersArrValue);
        }
        if(this.systemLabels){
        writer.writeCollectionOfPrimitiveValues<string>("systemLabels", this.systemLabels);
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = []; this.transitiveMemberOf?.forEach(element => {transitiveMemberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
        if(this.trustType){
        writer.writeStringValue("trustType", this.trustType);
        }
    };
}
