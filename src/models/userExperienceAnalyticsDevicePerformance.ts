import {DiskType} from './diskType';
import {Entity} from './index';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserExperienceAnalyticsDevicePerformance extends Entity implements Parsable {
    /** Average (mean) number of Blue Screens per device in the last 30 days. Valid values 0 to 9999999 */
    private _averageBlueScreens?: number | undefined;
    /** Average (mean) number of Restarts per device in the last 30 days. Valid values 0 to 9999999 */
    private _averageRestarts?: number | undefined;
    /** Number of Blue Screens in the last 30 days. Valid values 0 to 9999999 */
    private _blueScreenCount?: number | undefined;
    /** The user experience analytics device boot score. */
    private _bootScore?: number | undefined;
    /** The user experience analytics device core boot time in milliseconds. */
    private _coreBootTimeInMs?: number | undefined;
    /** The user experience analytics device core login time in milliseconds. */
    private _coreLoginTimeInMs?: number | undefined;
    /** User experience analytics summarized device count. */
    private _deviceCount?: number | undefined;
    /** The user experience analytics device name. */
    private _deviceName?: string | undefined;
    private _diskType?: DiskType | undefined;
    /** The user experience analytics device group policy boot time in milliseconds. */
    private _groupPolicyBootTimeInMs?: number | undefined;
    /** The user experience analytics device group policy login time in milliseconds. */
    private _groupPolicyLoginTimeInMs?: number | undefined;
    private _healthStatus?: UserExperienceAnalyticsHealthState | undefined;
    /** The user experience analytics device login score. */
    private _loginScore?: number | undefined;
    /** The user experience analytics device manufacturer. */
    private _manufacturer?: string | undefined;
    /** The user experience analytics device model. */
    private _model?: string | undefined;
    /** The user experience analytics model level startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308 */
    private _modelStartupPerformanceScore?: number | undefined;
    /** The user experience analytics device Operating System version. */
    private _operatingSystemVersion?: string | undefined;
    /** The user experience analytics responsive desktop time in milliseconds. */
    private _responsiveDesktopTimeInMs?: number | undefined;
    /** Number of Restarts in the last 30 days. Valid values 0 to 9999999 */
    private _restartCount?: number | undefined;
    /** The user experience analytics device startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308 */
    private _startupPerformanceScore?: number | undefined;
    /**
     * Gets the averageBlueScreens property value. Average (mean) number of Blue Screens per device in the last 30 days. Valid values 0 to 9999999
     * @returns a double
     */
    public get averageBlueScreens() {
        return this._averageBlueScreens;
    };
    /**
     * Sets the averageBlueScreens property value. Average (mean) number of Blue Screens per device in the last 30 days. Valid values 0 to 9999999
     * @param value Value to set for the averageBlueScreens property.
     */
    public set averageBlueScreens(value: number | undefined) {
        this._averageBlueScreens = value;
    };
    /**
     * Gets the averageRestarts property value. Average (mean) number of Restarts per device in the last 30 days. Valid values 0 to 9999999
     * @returns a double
     */
    public get averageRestarts() {
        return this._averageRestarts;
    };
    /**
     * Sets the averageRestarts property value. Average (mean) number of Restarts per device in the last 30 days. Valid values 0 to 9999999
     * @param value Value to set for the averageRestarts property.
     */
    public set averageRestarts(value: number | undefined) {
        this._averageRestarts = value;
    };
    /**
     * Gets the blueScreenCount property value. Number of Blue Screens in the last 30 days. Valid values 0 to 9999999
     * @returns a integer
     */
    public get blueScreenCount() {
        return this._blueScreenCount;
    };
    /**
     * Sets the blueScreenCount property value. Number of Blue Screens in the last 30 days. Valid values 0 to 9999999
     * @param value Value to set for the blueScreenCount property.
     */
    public set blueScreenCount(value: number | undefined) {
        this._blueScreenCount = value;
    };
    /**
     * Gets the bootScore property value. The user experience analytics device boot score.
     * @returns a integer
     */
    public get bootScore() {
        return this._bootScore;
    };
    /**
     * Sets the bootScore property value. The user experience analytics device boot score.
     * @param value Value to set for the bootScore property.
     */
    public set bootScore(value: number | undefined) {
        this._bootScore = value;
    };
    /**
     * Instantiates a new UserExperienceAnalyticsDevicePerformance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the coreBootTimeInMs property value. The user experience analytics device core boot time in milliseconds.
     * @returns a integer
     */
    public get coreBootTimeInMs() {
        return this._coreBootTimeInMs;
    };
    /**
     * Sets the coreBootTimeInMs property value. The user experience analytics device core boot time in milliseconds.
     * @param value Value to set for the coreBootTimeInMs property.
     */
    public set coreBootTimeInMs(value: number | undefined) {
        this._coreBootTimeInMs = value;
    };
    /**
     * Gets the coreLoginTimeInMs property value. The user experience analytics device core login time in milliseconds.
     * @returns a integer
     */
    public get coreLoginTimeInMs() {
        return this._coreLoginTimeInMs;
    };
    /**
     * Sets the coreLoginTimeInMs property value. The user experience analytics device core login time in milliseconds.
     * @param value Value to set for the coreLoginTimeInMs property.
     */
    public set coreLoginTimeInMs(value: number | undefined) {
        this._coreLoginTimeInMs = value;
    };
    /**
     * Gets the deviceCount property value. User experience analytics summarized device count.
     * @returns a int64
     */
    public get deviceCount() {
        return this._deviceCount;
    };
    /**
     * Sets the deviceCount property value. User experience analytics summarized device count.
     * @param value Value to set for the deviceCount property.
     */
    public set deviceCount(value: number | undefined) {
        this._deviceCount = value;
    };
    /**
     * Gets the deviceName property value. The user experience analytics device name.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. The user experience analytics device name.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Gets the diskType property value. 
     * @returns a diskType
     */
    public get diskType() {
        return this._diskType;
    };
    /**
     * Sets the diskType property value. 
     * @param value Value to set for the diskType property.
     */
    public set diskType(value: DiskType | undefined) {
        this._diskType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "averageBlueScreens": n => { this.averageBlueScreens = n.getNumberValue(); },
            "averageRestarts": n => { this.averageRestarts = n.getNumberValue(); },
            "blueScreenCount": n => { this.blueScreenCount = n.getNumberValue(); },
            "bootScore": n => { this.bootScore = n.getNumberValue(); },
            "coreBootTimeInMs": n => { this.coreBootTimeInMs = n.getNumberValue(); },
            "coreLoginTimeInMs": n => { this.coreLoginTimeInMs = n.getNumberValue(); },
            "deviceCount": n => { this.deviceCount = n.getNumberValue(); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "diskType": n => { this.diskType = n.getEnumValue<DiskType>(DiskType); },
            "groupPolicyBootTimeInMs": n => { this.groupPolicyBootTimeInMs = n.getNumberValue(); },
            "groupPolicyLoginTimeInMs": n => { this.groupPolicyLoginTimeInMs = n.getNumberValue(); },
            "healthStatus": n => { this.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
            "loginScore": n => { this.loginScore = n.getNumberValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "modelStartupPerformanceScore": n => { this.modelStartupPerformanceScore = n.getNumberValue(); },
            "operatingSystemVersion": n => { this.operatingSystemVersion = n.getStringValue(); },
            "responsiveDesktopTimeInMs": n => { this.responsiveDesktopTimeInMs = n.getNumberValue(); },
            "restartCount": n => { this.restartCount = n.getNumberValue(); },
            "startupPerformanceScore": n => { this.startupPerformanceScore = n.getNumberValue(); },
        };
    };
    /**
     * Gets the groupPolicyBootTimeInMs property value. The user experience analytics device group policy boot time in milliseconds.
     * @returns a integer
     */
    public get groupPolicyBootTimeInMs() {
        return this._groupPolicyBootTimeInMs;
    };
    /**
     * Sets the groupPolicyBootTimeInMs property value. The user experience analytics device group policy boot time in milliseconds.
     * @param value Value to set for the groupPolicyBootTimeInMs property.
     */
    public set groupPolicyBootTimeInMs(value: number | undefined) {
        this._groupPolicyBootTimeInMs = value;
    };
    /**
     * Gets the groupPolicyLoginTimeInMs property value. The user experience analytics device group policy login time in milliseconds.
     * @returns a integer
     */
    public get groupPolicyLoginTimeInMs() {
        return this._groupPolicyLoginTimeInMs;
    };
    /**
     * Sets the groupPolicyLoginTimeInMs property value. The user experience analytics device group policy login time in milliseconds.
     * @param value Value to set for the groupPolicyLoginTimeInMs property.
     */
    public set groupPolicyLoginTimeInMs(value: number | undefined) {
        this._groupPolicyLoginTimeInMs = value;
    };
    /**
     * Gets the healthStatus property value. 
     * @returns a userExperienceAnalyticsHealthState
     */
    public get healthStatus() {
        return this._healthStatus;
    };
    /**
     * Sets the healthStatus property value. 
     * @param value Value to set for the healthStatus property.
     */
    public set healthStatus(value: UserExperienceAnalyticsHealthState | undefined) {
        this._healthStatus = value;
    };
    /**
     * Gets the loginScore property value. The user experience analytics device login score.
     * @returns a integer
     */
    public get loginScore() {
        return this._loginScore;
    };
    /**
     * Sets the loginScore property value. The user experience analytics device login score.
     * @param value Value to set for the loginScore property.
     */
    public set loginScore(value: number | undefined) {
        this._loginScore = value;
    };
    /**
     * Gets the manufacturer property value. The user experience analytics device manufacturer.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. The user experience analytics device manufacturer.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the model property value. The user experience analytics device model.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. The user experience analytics device model.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the modelStartupPerformanceScore property value. The user experience analytics model level startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     * @returns a double
     */
    public get modelStartupPerformanceScore() {
        return this._modelStartupPerformanceScore;
    };
    /**
     * Sets the modelStartupPerformanceScore property value. The user experience analytics model level startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     * @param value Value to set for the modelStartupPerformanceScore property.
     */
    public set modelStartupPerformanceScore(value: number | undefined) {
        this._modelStartupPerformanceScore = value;
    };
    /**
     * Gets the operatingSystemVersion property value. The user experience analytics device Operating System version.
     * @returns a string
     */
    public get operatingSystemVersion() {
        return this._operatingSystemVersion;
    };
    /**
     * Sets the operatingSystemVersion property value. The user experience analytics device Operating System version.
     * @param value Value to set for the operatingSystemVersion property.
     */
    public set operatingSystemVersion(value: string | undefined) {
        this._operatingSystemVersion = value;
    };
    /**
     * Gets the responsiveDesktopTimeInMs property value. The user experience analytics responsive desktop time in milliseconds.
     * @returns a integer
     */
    public get responsiveDesktopTimeInMs() {
        return this._responsiveDesktopTimeInMs;
    };
    /**
     * Sets the responsiveDesktopTimeInMs property value. The user experience analytics responsive desktop time in milliseconds.
     * @param value Value to set for the responsiveDesktopTimeInMs property.
     */
    public set responsiveDesktopTimeInMs(value: number | undefined) {
        this._responsiveDesktopTimeInMs = value;
    };
    /**
     * Gets the restartCount property value. Number of Restarts in the last 30 days. Valid values 0 to 9999999
     * @returns a integer
     */
    public get restartCount() {
        return this._restartCount;
    };
    /**
     * Sets the restartCount property value. Number of Restarts in the last 30 days. Valid values 0 to 9999999
     * @param value Value to set for the restartCount property.
     */
    public set restartCount(value: number | undefined) {
        this._restartCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("averageBlueScreens", this.averageBlueScreens);
        writer.writeNumberValue("averageRestarts", this.averageRestarts);
        writer.writeNumberValue("blueScreenCount", this.blueScreenCount);
        writer.writeNumberValue("bootScore", this.bootScore);
        writer.writeNumberValue("coreBootTimeInMs", this.coreBootTimeInMs);
        writer.writeNumberValue("coreLoginTimeInMs", this.coreLoginTimeInMs);
        writer.writeNumberValue("deviceCount", this.deviceCount);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeEnumValue<DiskType>("diskType", this.diskType);
        writer.writeNumberValue("groupPolicyBootTimeInMs", this.groupPolicyBootTimeInMs);
        writer.writeNumberValue("groupPolicyLoginTimeInMs", this.groupPolicyLoginTimeInMs);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", this.healthStatus);
        writer.writeNumberValue("loginScore", this.loginScore);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeNumberValue("modelStartupPerformanceScore", this.modelStartupPerformanceScore);
        writer.writeStringValue("operatingSystemVersion", this.operatingSystemVersion);
        writer.writeNumberValue("responsiveDesktopTimeInMs", this.responsiveDesktopTimeInMs);
        writer.writeNumberValue("restartCount", this.restartCount);
        writer.writeNumberValue("startupPerformanceScore", this.startupPerformanceScore);
    };
    /**
     * Gets the startupPerformanceScore property value. The user experience analytics device startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     * @returns a double
     */
    public get startupPerformanceScore() {
        return this._startupPerformanceScore;
    };
    /**
     * Sets the startupPerformanceScore property value. The user experience analytics device startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     * @param value Value to set for the startupPerformanceScore property.
     */
    public set startupPerformanceScore(value: number | undefined) {
        this._startupPerformanceScore = value;
    };
}
