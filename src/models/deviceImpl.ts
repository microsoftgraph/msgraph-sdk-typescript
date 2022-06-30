import {AlternativeSecurityId} from './alternativeSecurityId';
import {createAlternativeSecurityIdFromDiscriminatorValue} from './createAlternativeSecurityIdFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {Device} from './device';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {AlternativeSecurityIdImpl, DirectoryObjectImpl, ExtensionImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to device. */
export class DeviceImpl extends DirectoryObjectImpl implements Device {
    /** true if the account is enabled; otherwise, false. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property. */
    private _accountEnabled?: boolean | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le). */
    private _alternativeSecurityIds?: AlternativeSecurityId[] | undefined;
    /** The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy. */
    private _approximateLastSignInDateTime?: Date | undefined;
    /** The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _complianceExpirationDateTime?: Date | undefined;
    /** Identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith). */
    private _deviceId?: string | undefined;
    /** For internal use only. Set to null. */
    private _deviceMetadata?: string | undefined;
    /** For internal use only. */
    private _deviceVersion?: number | undefined;
    /** The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** The collection of open extensions defined for the device. Read-only. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    private _isCompliant?: boolean | undefined;
    /** true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not). */
    private _isManaged?: boolean | undefined;
    /** Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith). */
    private _mdmAppId?: string | undefined;
    /** Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    private _operatingSystem?: string | undefined;
    /** Operating system version of the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values). */
    private _operatingSystemVersion?: string | undefined;
    /** For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections). */
    private _physicalIds?: string[] | undefined;
    /** The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT. */
    private _profileType?: string | undefined;
    /** The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand. */
    private _registeredOwners?: DirectoryObject[] | undefined;
    /** Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand. */
    private _registeredUsers?: DirectoryObject[] | undefined;
    /** List of labels applied to the device by the system. Supports $filter (eq when counting empty collections). */
    private _systemLabels?: string[] | undefined;
    /** Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand. */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory */
    private _trustType?: string | undefined;
    /**
     * Gets the accountEnabled property value. true if the account is enabled; otherwise, false. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property.
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. true if the account is enabled; otherwise, false. Default is true.  Supports $filter (eq, ne, not, in). Only callers in Global Administrator and Cloud Device Administrator roles can set this property.
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        if(value) {
            this._accountEnabled = value;
        }
    };
    /**
     * Gets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le).
     * @returns a AlternativeSecurityIdInterface
     */
    public get alternativeSecurityIds() {
        return this._alternativeSecurityIds;
    };
    /**
     * Sets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le).
     * @param value Value to set for the alternativeSecurityIds property.
     */
    public set alternativeSecurityIds(value: AlternativeSecurityId[] | undefined) {
        if(value) {
            const alternativeSecurityIdsArrValue: AlternativeSecurityIdImpl[] = [];
            this.alternativeSecurityIds?.forEach(element => {
                alternativeSecurityIdsArrValue.push((element instanceof AlternativeSecurityIdImpl? element:new AlternativeSecurityIdImpl(element)));
            });
            this._alternativeSecurityIds = alternativeSecurityIdsArrValue;
        }
    };
    /**
     * Gets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy.
     * @returns a Date
     */
    public get approximateLastSignInDateTime() {
        return this._approximateLastSignInDateTime;
    };
    /**
     * Sets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, not, ge, le, and eq on null values) and $orderBy.
     * @param value Value to set for the approximateLastSignInDateTime property.
     */
    public set approximateLastSignInDateTime(value: Date | undefined) {
        if(value) {
            this._approximateLastSignInDateTime = value;
        }
    };
    /**
     * Gets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get complianceExpirationDateTime() {
        return this._complianceExpirationDateTime;
    };
    /**
     * Sets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the complianceExpirationDateTime property.
     */
    public set complianceExpirationDateTime(value: Date | undefined) {
        if(value) {
            this._complianceExpirationDateTime = value;
        }
    };
    /**
     * Instantiates a new device and sets the default values.
     * @param deviceParameterValue 
     */
    public constructor(deviceParameterValue?: Device | undefined) {
        super(deviceParameterValue);
        this._accountEnabled = deviceParameterValue?.accountEnabled;
        this._alternativeSecurityIds = deviceParameterValue?.alternativeSecurityIds;
        this._approximateLastSignInDateTime = deviceParameterValue?.approximateLastSignInDateTime;
        this._complianceExpirationDateTime = deviceParameterValue?.complianceExpirationDateTime;
        this._deviceId = deviceParameterValue?.deviceId;
        this._deviceMetadata = deviceParameterValue?.deviceMetadata;
        this._deviceVersion = deviceParameterValue?.deviceVersion;
        this._displayName = deviceParameterValue?.displayName;
        this._extensions = deviceParameterValue?.extensions;
        this._isCompliant = deviceParameterValue?.isCompliant;
        this._isManaged = deviceParameterValue?.isManaged;
        this._mdmAppId = deviceParameterValue?.mdmAppId;
        this._memberOf = deviceParameterValue?.memberOf;
        this._onPremisesLastSyncDateTime = deviceParameterValue?.onPremisesLastSyncDateTime;
        this._onPremisesSyncEnabled = deviceParameterValue?.onPremisesSyncEnabled;
        this._operatingSystem = deviceParameterValue?.operatingSystem;
        this._operatingSystemVersion = deviceParameterValue?.operatingSystemVersion;
        this._physicalIds = deviceParameterValue?.physicalIds;
        this._profileType = deviceParameterValue?.profileType;
        this._registeredOwners = deviceParameterValue?.registeredOwners;
        this._registeredUsers = deviceParameterValue?.registeredUsers;
        this._systemLabels = deviceParameterValue?.systemLabels;
        this._transitiveMemberOf = deviceParameterValue?.transitiveMemberOf;
        this._trustType = deviceParameterValue?.trustType;
    };
    /**
     * Gets the deviceId property value. Identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith).
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, not, startsWith).
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        if(value) {
            this._deviceId = value;
        }
    };
    /**
     * Gets the deviceMetadata property value. For internal use only. Set to null.
     * @returns a string
     */
    public get deviceMetadata() {
        return this._deviceMetadata;
    };
    /**
     * Sets the deviceMetadata property value. For internal use only. Set to null.
     * @param value Value to set for the deviceMetadata property.
     */
    public set deviceMetadata(value: string | undefined) {
        if(value) {
            this._deviceMetadata = value;
        }
    };
    /**
     * Gets the deviceVersion property value. For internal use only.
     * @returns a integer
     */
    public get deviceVersion() {
        return this._deviceVersion;
    };
    /**
     * Sets the deviceVersion property value. For internal use only.
     * @param value Value to set for the deviceVersion property.
     */
    public set deviceVersion(value: number | undefined) {
        if(value) {
            this._deviceVersion = value;
        }
    };
    /**
     * Gets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
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
     * Gets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isCompliant() {
        return this._isCompliant;
    };
    /**
     * Sets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @param value Value to set for the isCompliant property.
     */
    public set isCompliant(value: boolean | undefined) {
        if(value) {
            this._isCompliant = value;
        }
    };
    /**
     * Gets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isManaged() {
        return this._isManaged;
    };
    /**
     * Sets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, not).
     * @param value Value to set for the isManaged property.
     */
    public set isManaged(value: boolean | undefined) {
        if(value) {
            this._isManaged = value;
        }
    };
    /**
     * Gets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith).
     * @returns a string
     */
    public get mdmAppId() {
        return this._mdmAppId;
    };
    /**
     * Sets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, not, startsWith).
     * @param value Value to set for the mdmAppId property.
     */
    public set mdmAppId(value: string | undefined) {
        if(value) {
            this._mdmAppId = value;
        }
    };
    /**
     * Gets the memberOf property value. Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const memberOfArrValue: DirectoryObjectImpl[] = [];
            this.memberOf?.forEach(element => {
                memberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._memberOf = memberOfArrValue;
        }
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        if(value) {
            this._onPremisesLastSyncDateTime = value;
        }
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        if(value) {
            this._onPremisesSyncEnabled = value;
        }
    };
    /**
     * Gets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        if(value) {
            this._operatingSystem = value;
        }
    };
    /**
     * Gets the operatingSystemVersion property value. Operating system version of the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @returns a string
     */
    public get operatingSystemVersion() {
        return this._operatingSystemVersion;
    };
    /**
     * Sets the operatingSystemVersion property value. Operating system version of the device. Required. Supports $filter (eq, ne, not, ge, le, startsWith, and eq on null values).
     * @param value Value to set for the operatingSystemVersion property.
     */
    public set operatingSystemVersion(value: string | undefined) {
        if(value) {
            this._operatingSystemVersion = value;
        }
    };
    /**
     * Gets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections).
     * @returns a string
     */
    public get physicalIds() {
        return this._physicalIds;
    };
    /**
     * Sets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections).
     * @param value Value to set for the physicalIds property.
     */
    public set physicalIds(value: string[] | undefined) {
        if(value) {
            this._physicalIds = value;
        }
    };
    /**
     * Gets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
     * @returns a string
     */
    public get profileType() {
        return this._profileType;
    };
    /**
     * Sets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
     * @param value Value to set for the profileType property.
     */
    public set profileType(value: string | undefined) {
        if(value) {
            this._profileType = value;
        }
    };
    /**
     * Gets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get registeredOwners() {
        return this._registeredOwners;
    };
    /**
     * Sets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredOwners property.
     */
    public set registeredOwners(value: DirectoryObject[] | undefined) {
        if(value) {
            const registeredOwnersArrValue: DirectoryObjectImpl[] = [];
            this.registeredOwners?.forEach(element => {
                registeredOwnersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._registeredOwners = registeredOwnersArrValue;
        }
    };
    /**
     * Gets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get registeredUsers() {
        return this._registeredUsers;
    };
    /**
     * Sets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the registeredUsers property.
     */
    public set registeredUsers(value: DirectoryObject[] | undefined) {
        if(value) {
            const registeredUsersArrValue: DirectoryObjectImpl[] = [];
            this.registeredUsers?.forEach(element => {
                registeredUsersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._registeredUsers = registeredUsersArrValue;
        }
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
        if(this.alternativeSecurityIds && this.alternativeSecurityIds.length != 0){        const alternativeSecurityIdsArrValue: AlternativeSecurityIdImpl[] = [];
        this.alternativeSecurityIds?.forEach(element => {
            alternativeSecurityIdsArrValue.push((element instanceof AlternativeSecurityIdImpl? element:new AlternativeSecurityIdImpl(element)));
        });
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
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
        });
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
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = [];
        this.memberOf?.forEach(element => {
            memberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
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
        if(this.registeredOwners && this.registeredOwners.length != 0){        const registeredOwnersArrValue: DirectoryObjectImpl[] = [];
        this.registeredOwners?.forEach(element => {
            registeredOwnersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("registeredOwners", registeredOwnersArrValue);
        }
        if(this.registeredUsers && this.registeredUsers.length != 0){        const registeredUsersArrValue: DirectoryObjectImpl[] = [];
        this.registeredUsers?.forEach(element => {
            registeredUsersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("registeredUsers", registeredUsersArrValue);
        }
        if(this.systemLabels){
            writer.writeCollectionOfPrimitiveValues<string>("systemLabels", this.systemLabels);
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
        this.transitiveMemberOf?.forEach(element => {
            transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
        if(this.trustType){
            writer.writeStringValue("trustType", this.trustType);
        }
    };
    /**
     * Gets the systemLabels property value. List of labels applied to the device by the system. Supports $filter (eq when counting empty collections).
     * @returns a string
     */
    public get systemLabels() {
        return this._systemLabels;
    };
    /**
     * Sets the systemLabels property value. List of labels applied to the device by the system. Supports $filter (eq when counting empty collections).
     * @param value Value to set for the systemLabels property.
     */
    public set systemLabels(value: string[] | undefined) {
        if(value) {
            this._systemLabels = value;
        }
    };
    /**
     * Gets the transitiveMemberOf property value. Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
            this.transitiveMemberOf?.forEach(element => {
                transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._transitiveMemberOf = transitiveMemberOfArrValue;
        }
    };
    /**
     * Gets the trustType property value. Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
     * @returns a string
     */
    public get trustType() {
        return this._trustType;
    };
    /**
     * Sets the trustType property value. Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
     * @param value Value to set for the trustType property.
     */
    public set trustType(value: string | undefined) {
        if(value) {
            this._trustType = value;
        }
    };
}
