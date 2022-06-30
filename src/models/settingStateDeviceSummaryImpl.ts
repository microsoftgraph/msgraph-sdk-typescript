import {EntityImpl} from './index';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Compilance Policy and Configuration for a Setting State summary */
export class SettingStateDeviceSummaryImpl extends EntityImpl implements SettingStateDeviceSummary {
    /** Device Compliant count for the setting */
    private _compliantDeviceCount?: number | undefined;
    /** Device conflict error count for the setting */
    private _conflictDeviceCount?: number | undefined;
    /** Device error count for the setting */
    private _errorDeviceCount?: number | undefined;
    /** Name of the InstancePath for the setting */
    private _instancePath?: string | undefined;
    /** Device NonCompliant count for the setting */
    private _nonCompliantDeviceCount?: number | undefined;
    /** Device Not Applicable count for the setting */
    private _notApplicableDeviceCount?: number | undefined;
    /** Device Compliant count for the setting */
    private _remediatedDeviceCount?: number | undefined;
    /** Name of the setting */
    private _settingName?: string | undefined;
    /** Device Unkown count for the setting */
    private _unknownDeviceCount?: number | undefined;
    /**
     * Gets the compliantDeviceCount property value. Device Compliant count for the setting
     * @returns a integer
     */
    public get compliantDeviceCount() {
        return this._compliantDeviceCount;
    };
    /**
     * Sets the compliantDeviceCount property value. Device Compliant count for the setting
     * @param value Value to set for the compliantDeviceCount property.
     */
    public set compliantDeviceCount(value: number | undefined) {
        if(value) {
            this._compliantDeviceCount = value;
        }
    };
    /**
     * Gets the conflictDeviceCount property value. Device conflict error count for the setting
     * @returns a integer
     */
    public get conflictDeviceCount() {
        return this._conflictDeviceCount;
    };
    /**
     * Sets the conflictDeviceCount property value. Device conflict error count for the setting
     * @param value Value to set for the conflictDeviceCount property.
     */
    public set conflictDeviceCount(value: number | undefined) {
        if(value) {
            this._conflictDeviceCount = value;
        }
    };
    /**
     * Instantiates a new settingStateDeviceSummary and sets the default values.
     * @param settingStateDeviceSummaryParameterValue 
     */
    public constructor(settingStateDeviceSummaryParameterValue?: SettingStateDeviceSummary | undefined) {
        super(settingStateDeviceSummaryParameterValue);
        this._compliantDeviceCount = settingStateDeviceSummaryParameterValue?.compliantDeviceCount;
        this._conflictDeviceCount = settingStateDeviceSummaryParameterValue?.conflictDeviceCount;
        this._errorDeviceCount = settingStateDeviceSummaryParameterValue?.errorDeviceCount;
        this._instancePath = settingStateDeviceSummaryParameterValue?.instancePath;
        this._nonCompliantDeviceCount = settingStateDeviceSummaryParameterValue?.nonCompliantDeviceCount;
        this._notApplicableDeviceCount = settingStateDeviceSummaryParameterValue?.notApplicableDeviceCount;
        this._remediatedDeviceCount = settingStateDeviceSummaryParameterValue?.remediatedDeviceCount;
        this._settingName = settingStateDeviceSummaryParameterValue?.settingName;
        this._unknownDeviceCount = settingStateDeviceSummaryParameterValue?.unknownDeviceCount;
    };
    /**
     * Gets the errorDeviceCount property value. Device error count for the setting
     * @returns a integer
     */
    public get errorDeviceCount() {
        return this._errorDeviceCount;
    };
    /**
     * Sets the errorDeviceCount property value. Device error count for the setting
     * @param value Value to set for the errorDeviceCount property.
     */
    public set errorDeviceCount(value: number | undefined) {
        if(value) {
            this._errorDeviceCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantDeviceCount": n => { this.compliantDeviceCount = n.getNumberValue(); },
            "conflictDeviceCount": n => { this.conflictDeviceCount = n.getNumberValue(); },
            "errorDeviceCount": n => { this.errorDeviceCount = n.getNumberValue(); },
            "instancePath": n => { this.instancePath = n.getStringValue(); },
            "nonCompliantDeviceCount": n => { this.nonCompliantDeviceCount = n.getNumberValue(); },
            "notApplicableDeviceCount": n => { this.notApplicableDeviceCount = n.getNumberValue(); },
            "remediatedDeviceCount": n => { this.remediatedDeviceCount = n.getNumberValue(); },
            "settingName": n => { this.settingName = n.getStringValue(); },
            "unknownDeviceCount": n => { this.unknownDeviceCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the instancePath property value. Name of the InstancePath for the setting
     * @returns a string
     */
    public get instancePath() {
        return this._instancePath;
    };
    /**
     * Sets the instancePath property value. Name of the InstancePath for the setting
     * @param value Value to set for the instancePath property.
     */
    public set instancePath(value: string | undefined) {
        if(value) {
            this._instancePath = value;
        }
    };
    /**
     * Gets the nonCompliantDeviceCount property value. Device NonCompliant count for the setting
     * @returns a integer
     */
    public get nonCompliantDeviceCount() {
        return this._nonCompliantDeviceCount;
    };
    /**
     * Sets the nonCompliantDeviceCount property value. Device NonCompliant count for the setting
     * @param value Value to set for the nonCompliantDeviceCount property.
     */
    public set nonCompliantDeviceCount(value: number | undefined) {
        if(value) {
            this._nonCompliantDeviceCount = value;
        }
    };
    /**
     * Gets the notApplicableDeviceCount property value. Device Not Applicable count for the setting
     * @returns a integer
     */
    public get notApplicableDeviceCount() {
        return this._notApplicableDeviceCount;
    };
    /**
     * Sets the notApplicableDeviceCount property value. Device Not Applicable count for the setting
     * @param value Value to set for the notApplicableDeviceCount property.
     */
    public set notApplicableDeviceCount(value: number | undefined) {
        if(value) {
            this._notApplicableDeviceCount = value;
        }
    };
    /**
     * Gets the remediatedDeviceCount property value. Device Compliant count for the setting
     * @returns a integer
     */
    public get remediatedDeviceCount() {
        return this._remediatedDeviceCount;
    };
    /**
     * Sets the remediatedDeviceCount property value. Device Compliant count for the setting
     * @param value Value to set for the remediatedDeviceCount property.
     */
    public set remediatedDeviceCount(value: number | undefined) {
        if(value) {
            this._remediatedDeviceCount = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.compliantDeviceCount){
            writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        }
        if(this.conflictDeviceCount){
            writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        }
        if(this.errorDeviceCount){
            writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        }
        if(this.instancePath){
            writer.writeStringValue("instancePath", this.instancePath);
        }
        if(this.nonCompliantDeviceCount){
            writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        }
        if(this.notApplicableDeviceCount){
            writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        }
        if(this.remediatedDeviceCount){
            writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        }
        if(this.settingName){
            writer.writeStringValue("settingName", this.settingName);
        }
        if(this.unknownDeviceCount){
            writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
    };
    /**
     * Gets the settingName property value. Name of the setting
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Sets the settingName property value. Name of the setting
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        if(value) {
            this._settingName = value;
        }
    };
    /**
     * Gets the unknownDeviceCount property value. Device Unkown count for the setting
     * @returns a integer
     */
    public get unknownDeviceCount() {
        return this._unknownDeviceCount;
    };
    /**
     * Sets the unknownDeviceCount property value. Device Unkown count for the setting
     * @param value Value to set for the unknownDeviceCount property.
     */
    public set unknownDeviceCount(value: number | undefined) {
        if(value) {
            this._unknownDeviceCount = value;
        }
    };
}
