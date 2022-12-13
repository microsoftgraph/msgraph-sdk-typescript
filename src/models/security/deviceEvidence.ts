import {createLoggedOnUserFromDiscriminatorValue} from './createLoggedOnUserFromDiscriminatorValue';
import {createVmMetadataFromDiscriminatorValue} from './createVmMetadataFromDiscriminatorValue';
import {DefenderAvStatus} from './defenderAvStatus';
import {DeviceHealthStatus} from './deviceHealthStatus';
import {DeviceRiskScore} from './deviceRiskScore';
import {AlertEvidence, LoggedOnUser, VmMetadata} from './index';
import {OnboardingStatus} from './onboardingStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEvidence extends AlertEvidence implements Parsable {
    /** The azureAdDeviceId property */
    private _azureAdDeviceId?: string | undefined;
    /** The defenderAvStatus property */
    private _defenderAvStatus?: DefenderAvStatus | undefined;
    /** The deviceDnsName property */
    private _deviceDnsName?: string | undefined;
    /** The firstSeenDateTime property */
    private _firstSeenDateTime?: Date | undefined;
    /** The healthStatus property */
    private _healthStatus?: DeviceHealthStatus | undefined;
    /** The loggedOnUsers property */
    private _loggedOnUsers?: LoggedOnUser[] | undefined;
    /** The mdeDeviceId property */
    private _mdeDeviceId?: string | undefined;
    /** The onboardingStatus property */
    private _onboardingStatus?: OnboardingStatus | undefined;
    /** The osBuild property */
    private _osBuild?: number | undefined;
    /** The osPlatform property */
    private _osPlatform?: string | undefined;
    /** The rbacGroupId property */
    private _rbacGroupId?: number | undefined;
    /** The rbacGroupName property */
    private _rbacGroupName?: string | undefined;
    /** The riskScore property */
    private _riskScore?: DeviceRiskScore | undefined;
    /** The version property */
    private _version?: string | undefined;
    /** The vmMetadata property */
    private _vmMetadata?: VmMetadata | undefined;
    /**
     * Gets the azureAdDeviceId property value. The azureAdDeviceId property
     * @returns a string
     */
    public get azureAdDeviceId() {
        return this._azureAdDeviceId;
    };
    /**
     * Sets the azureAdDeviceId property value. The azureAdDeviceId property
     * @param value Value to set for the azureAdDeviceId property.
     */
    public set azureAdDeviceId(value: string | undefined) {
        this._azureAdDeviceId = value;
    };
    /**
     * Instantiates a new DeviceEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defenderAvStatus property value. The defenderAvStatus property
     * @returns a defenderAvStatus
     */
    public get defenderAvStatus() {
        return this._defenderAvStatus;
    };
    /**
     * Sets the defenderAvStatus property value. The defenderAvStatus property
     * @param value Value to set for the defenderAvStatus property.
     */
    public set defenderAvStatus(value: DefenderAvStatus | undefined) {
        this._defenderAvStatus = value;
    };
    /**
     * Gets the deviceDnsName property value. The deviceDnsName property
     * @returns a string
     */
    public get deviceDnsName() {
        return this._deviceDnsName;
    };
    /**
     * Sets the deviceDnsName property value. The deviceDnsName property
     * @param value Value to set for the deviceDnsName property.
     */
    public set deviceDnsName(value: string | undefined) {
        this._deviceDnsName = value;
    };
    /**
     * Gets the firstSeenDateTime property value. The firstSeenDateTime property
     * @returns a Date
     */
    public get firstSeenDateTime() {
        return this._firstSeenDateTime;
    };
    /**
     * Sets the firstSeenDateTime property value. The firstSeenDateTime property
     * @param value Value to set for the firstSeenDateTime property.
     */
    public set firstSeenDateTime(value: Date | undefined) {
        this._firstSeenDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "azureAdDeviceId": n => { this.azureAdDeviceId = n.getStringValue(); },
            "defenderAvStatus": n => { this.defenderAvStatus = n.getEnumValue<DefenderAvStatus>(DefenderAvStatus); },
            "deviceDnsName": n => { this.deviceDnsName = n.getStringValue(); },
            "firstSeenDateTime": n => { this.firstSeenDateTime = n.getDateValue(); },
            "healthStatus": n => { this.healthStatus = n.getEnumValue<DeviceHealthStatus>(DeviceHealthStatus); },
            "loggedOnUsers": n => { this.loggedOnUsers = n.getCollectionOfObjectValues<LoggedOnUser>(createLoggedOnUserFromDiscriminatorValue); },
            "mdeDeviceId": n => { this.mdeDeviceId = n.getStringValue(); },
            "onboardingStatus": n => { this.onboardingStatus = n.getEnumValue<OnboardingStatus>(OnboardingStatus); },
            "osBuild": n => { this.osBuild = n.getNumberValue(); },
            "osPlatform": n => { this.osPlatform = n.getStringValue(); },
            "rbacGroupId": n => { this.rbacGroupId = n.getNumberValue(); },
            "rbacGroupName": n => { this.rbacGroupName = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getEnumValue<DeviceRiskScore>(DeviceRiskScore); },
            "version": n => { this.version = n.getStringValue(); },
            "vmMetadata": n => { this.vmMetadata = n.getObjectValue<VmMetadata>(createVmMetadataFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the healthStatus property value. The healthStatus property
     * @returns a deviceHealthStatus
     */
    public get healthStatus() {
        return this._healthStatus;
    };
    /**
     * Sets the healthStatus property value. The healthStatus property
     * @param value Value to set for the healthStatus property.
     */
    public set healthStatus(value: DeviceHealthStatus | undefined) {
        this._healthStatus = value;
    };
    /**
     * Gets the loggedOnUsers property value. The loggedOnUsers property
     * @returns a loggedOnUser
     */
    public get loggedOnUsers() {
        return this._loggedOnUsers;
    };
    /**
     * Sets the loggedOnUsers property value. The loggedOnUsers property
     * @param value Value to set for the loggedOnUsers property.
     */
    public set loggedOnUsers(value: LoggedOnUser[] | undefined) {
        this._loggedOnUsers = value;
    };
    /**
     * Gets the mdeDeviceId property value. The mdeDeviceId property
     * @returns a string
     */
    public get mdeDeviceId() {
        return this._mdeDeviceId;
    };
    /**
     * Sets the mdeDeviceId property value. The mdeDeviceId property
     * @param value Value to set for the mdeDeviceId property.
     */
    public set mdeDeviceId(value: string | undefined) {
        this._mdeDeviceId = value;
    };
    /**
     * Gets the onboardingStatus property value. The onboardingStatus property
     * @returns a onboardingStatus
     */
    public get onboardingStatus() {
        return this._onboardingStatus;
    };
    /**
     * Sets the onboardingStatus property value. The onboardingStatus property
     * @param value Value to set for the onboardingStatus property.
     */
    public set onboardingStatus(value: OnboardingStatus | undefined) {
        this._onboardingStatus = value;
    };
    /**
     * Gets the osBuild property value. The osBuild property
     * @returns a int64
     */
    public get osBuild() {
        return this._osBuild;
    };
    /**
     * Sets the osBuild property value. The osBuild property
     * @param value Value to set for the osBuild property.
     */
    public set osBuild(value: number | undefined) {
        this._osBuild = value;
    };
    /**
     * Gets the osPlatform property value. The osPlatform property
     * @returns a string
     */
    public get osPlatform() {
        return this._osPlatform;
    };
    /**
     * Sets the osPlatform property value. The osPlatform property
     * @param value Value to set for the osPlatform property.
     */
    public set osPlatform(value: string | undefined) {
        this._osPlatform = value;
    };
    /**
     * Gets the rbacGroupId property value. The rbacGroupId property
     * @returns a integer
     */
    public get rbacGroupId() {
        return this._rbacGroupId;
    };
    /**
     * Sets the rbacGroupId property value. The rbacGroupId property
     * @param value Value to set for the rbacGroupId property.
     */
    public set rbacGroupId(value: number | undefined) {
        this._rbacGroupId = value;
    };
    /**
     * Gets the rbacGroupName property value. The rbacGroupName property
     * @returns a string
     */
    public get rbacGroupName() {
        return this._rbacGroupName;
    };
    /**
     * Sets the rbacGroupName property value. The rbacGroupName property
     * @param value Value to set for the rbacGroupName property.
     */
    public set rbacGroupName(value: string | undefined) {
        this._rbacGroupName = value;
    };
    /**
     * Gets the riskScore property value. The riskScore property
     * @returns a deviceRiskScore
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Sets the riskScore property value. The riskScore property
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: DeviceRiskScore | undefined) {
        this._riskScore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("azureAdDeviceId", this.azureAdDeviceId);
        writer.writeEnumValue<DefenderAvStatus>("defenderAvStatus", this.defenderAvStatus);
        writer.writeStringValue("deviceDnsName", this.deviceDnsName);
        writer.writeDateValue("firstSeenDateTime", this.firstSeenDateTime);
        writer.writeEnumValue<DeviceHealthStatus>("healthStatus", this.healthStatus);
        writer.writeCollectionOfObjectValues<LoggedOnUser>("loggedOnUsers", this.loggedOnUsers);
        writer.writeStringValue("mdeDeviceId", this.mdeDeviceId);
        writer.writeEnumValue<OnboardingStatus>("onboardingStatus", this.onboardingStatus);
        writer.writeNumberValue("osBuild", this.osBuild);
        writer.writeStringValue("osPlatform", this.osPlatform);
        writer.writeNumberValue("rbacGroupId", this.rbacGroupId);
        writer.writeStringValue("rbacGroupName", this.rbacGroupName);
        writer.writeEnumValue<DeviceRiskScore>("riskScore", this.riskScore);
        writer.writeStringValue("version", this.version);
        writer.writeObjectValue<VmMetadata>("vmMetadata", this.vmMetadata);
    };
    /**
     * Gets the version property value. The version property
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version property
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
    /**
     * Gets the vmMetadata property value. The vmMetadata property
     * @returns a vmMetadata
     */
    public get vmMetadata() {
        return this._vmMetadata;
    };
    /**
     * Sets the vmMetadata property value. The vmMetadata property
     * @param value Value to set for the vmMetadata property.
     */
    public set vmMetadata(value: VmMetadata | undefined) {
        this._vmMetadata = value;
    };
}
