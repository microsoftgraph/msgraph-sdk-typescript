import {EntityImpl} from './index';
import {SoftwareUpdateStatusSummary} from './softwareUpdateStatusSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagement singleton. */
export class SoftwareUpdateStatusSummaryImpl extends EntityImpl implements SoftwareUpdateStatusSummary {
    /** Number of compliant devices. */
    private _compliantDeviceCount?: number | undefined;
    /** Number of compliant users. */
    private _compliantUserCount?: number | undefined;
    /** Number of conflict devices. */
    private _conflictDeviceCount?: number | undefined;
    /** Number of conflict users. */
    private _conflictUserCount?: number | undefined;
    /** The name of the policy. */
    private _displayName?: string | undefined;
    /** Number of devices had error. */
    private _errorDeviceCount?: number | undefined;
    /** Number of users had error. */
    private _errorUserCount?: number | undefined;
    /** Number of non compliant devices. */
    private _nonCompliantDeviceCount?: number | undefined;
    /** Number of non compliant users. */
    private _nonCompliantUserCount?: number | undefined;
    /** Number of not applicable devices. */
    private _notApplicableDeviceCount?: number | undefined;
    /** Number of not applicable users. */
    private _notApplicableUserCount?: number | undefined;
    /** Number of remediated devices. */
    private _remediatedDeviceCount?: number | undefined;
    /** Number of remediated users. */
    private _remediatedUserCount?: number | undefined;
    /** Number of unknown devices. */
    private _unknownDeviceCount?: number | undefined;
    /** Number of unknown users. */
    private _unknownUserCount?: number | undefined;
    /**
     * Gets the compliantDeviceCount property value. Number of compliant devices.
     * @returns a integer
     */
    public get compliantDeviceCount() {
        return this._compliantDeviceCount;
    };
    /**
     * Sets the compliantDeviceCount property value. Number of compliant devices.
     * @param value Value to set for the compliantDeviceCount property.
     */
    public set compliantDeviceCount(value: number | undefined) {
        if(value) {
            this._compliantDeviceCount = value;
        }
    };
    /**
     * Gets the compliantUserCount property value. Number of compliant users.
     * @returns a integer
     */
    public get compliantUserCount() {
        return this._compliantUserCount;
    };
    /**
     * Sets the compliantUserCount property value. Number of compliant users.
     * @param value Value to set for the compliantUserCount property.
     */
    public set compliantUserCount(value: number | undefined) {
        if(value) {
            this._compliantUserCount = value;
        }
    };
    /**
     * Gets the conflictDeviceCount property value. Number of conflict devices.
     * @returns a integer
     */
    public get conflictDeviceCount() {
        return this._conflictDeviceCount;
    };
    /**
     * Sets the conflictDeviceCount property value. Number of conflict devices.
     * @param value Value to set for the conflictDeviceCount property.
     */
    public set conflictDeviceCount(value: number | undefined) {
        if(value) {
            this._conflictDeviceCount = value;
        }
    };
    /**
     * Gets the conflictUserCount property value. Number of conflict users.
     * @returns a integer
     */
    public get conflictUserCount() {
        return this._conflictUserCount;
    };
    /**
     * Sets the conflictUserCount property value. Number of conflict users.
     * @param value Value to set for the conflictUserCount property.
     */
    public set conflictUserCount(value: number | undefined) {
        if(value) {
            this._conflictUserCount = value;
        }
    };
    /**
     * Instantiates a new softwareUpdateStatusSummary and sets the default values.
     * @param softwareUpdateStatusSummaryParameterValue 
     */
    public constructor(softwareUpdateStatusSummaryParameterValue?: SoftwareUpdateStatusSummary | undefined) {
        super(softwareUpdateStatusSummaryParameterValue);
        this._compliantDeviceCount = softwareUpdateStatusSummaryParameterValue?.compliantDeviceCount;
        this._compliantUserCount = softwareUpdateStatusSummaryParameterValue?.compliantUserCount;
        this._conflictDeviceCount = softwareUpdateStatusSummaryParameterValue?.conflictDeviceCount;
        this._conflictUserCount = softwareUpdateStatusSummaryParameterValue?.conflictUserCount;
        this._displayName = softwareUpdateStatusSummaryParameterValue?.displayName;
        this._errorDeviceCount = softwareUpdateStatusSummaryParameterValue?.errorDeviceCount;
        this._errorUserCount = softwareUpdateStatusSummaryParameterValue?.errorUserCount;
        this._nonCompliantDeviceCount = softwareUpdateStatusSummaryParameterValue?.nonCompliantDeviceCount;
        this._nonCompliantUserCount = softwareUpdateStatusSummaryParameterValue?.nonCompliantUserCount;
        this._notApplicableDeviceCount = softwareUpdateStatusSummaryParameterValue?.notApplicableDeviceCount;
        this._notApplicableUserCount = softwareUpdateStatusSummaryParameterValue?.notApplicableUserCount;
        this._remediatedDeviceCount = softwareUpdateStatusSummaryParameterValue?.remediatedDeviceCount;
        this._remediatedUserCount = softwareUpdateStatusSummaryParameterValue?.remediatedUserCount;
        this._unknownDeviceCount = softwareUpdateStatusSummaryParameterValue?.unknownDeviceCount;
        this._unknownUserCount = softwareUpdateStatusSummaryParameterValue?.unknownUserCount;
    };
    /**
     * Gets the displayName property value. The name of the policy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the policy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the errorDeviceCount property value. Number of devices had error.
     * @returns a integer
     */
    public get errorDeviceCount() {
        return this._errorDeviceCount;
    };
    /**
     * Sets the errorDeviceCount property value. Number of devices had error.
     * @param value Value to set for the errorDeviceCount property.
     */
    public set errorDeviceCount(value: number | undefined) {
        if(value) {
            this._errorDeviceCount = value;
        }
    };
    /**
     * Gets the errorUserCount property value. Number of users had error.
     * @returns a integer
     */
    public get errorUserCount() {
        return this._errorUserCount;
    };
    /**
     * Sets the errorUserCount property value. Number of users had error.
     * @param value Value to set for the errorUserCount property.
     */
    public set errorUserCount(value: number | undefined) {
        if(value) {
            this._errorUserCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantDeviceCount": n => { this.compliantDeviceCount = n.getNumberValue(); },
            "compliantUserCount": n => { this.compliantUserCount = n.getNumberValue(); },
            "conflictDeviceCount": n => { this.conflictDeviceCount = n.getNumberValue(); },
            "conflictUserCount": n => { this.conflictUserCount = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "errorDeviceCount": n => { this.errorDeviceCount = n.getNumberValue(); },
            "errorUserCount": n => { this.errorUserCount = n.getNumberValue(); },
            "nonCompliantDeviceCount": n => { this.nonCompliantDeviceCount = n.getNumberValue(); },
            "nonCompliantUserCount": n => { this.nonCompliantUserCount = n.getNumberValue(); },
            "notApplicableDeviceCount": n => { this.notApplicableDeviceCount = n.getNumberValue(); },
            "notApplicableUserCount": n => { this.notApplicableUserCount = n.getNumberValue(); },
            "remediatedDeviceCount": n => { this.remediatedDeviceCount = n.getNumberValue(); },
            "remediatedUserCount": n => { this.remediatedUserCount = n.getNumberValue(); },
            "unknownDeviceCount": n => { this.unknownDeviceCount = n.getNumberValue(); },
            "unknownUserCount": n => { this.unknownUserCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the nonCompliantDeviceCount property value. Number of non compliant devices.
     * @returns a integer
     */
    public get nonCompliantDeviceCount() {
        return this._nonCompliantDeviceCount;
    };
    /**
     * Sets the nonCompliantDeviceCount property value. Number of non compliant devices.
     * @param value Value to set for the nonCompliantDeviceCount property.
     */
    public set nonCompliantDeviceCount(value: number | undefined) {
        if(value) {
            this._nonCompliantDeviceCount = value;
        }
    };
    /**
     * Gets the nonCompliantUserCount property value. Number of non compliant users.
     * @returns a integer
     */
    public get nonCompliantUserCount() {
        return this._nonCompliantUserCount;
    };
    /**
     * Sets the nonCompliantUserCount property value. Number of non compliant users.
     * @param value Value to set for the nonCompliantUserCount property.
     */
    public set nonCompliantUserCount(value: number | undefined) {
        if(value) {
            this._nonCompliantUserCount = value;
        }
    };
    /**
     * Gets the notApplicableDeviceCount property value. Number of not applicable devices.
     * @returns a integer
     */
    public get notApplicableDeviceCount() {
        return this._notApplicableDeviceCount;
    };
    /**
     * Sets the notApplicableDeviceCount property value. Number of not applicable devices.
     * @param value Value to set for the notApplicableDeviceCount property.
     */
    public set notApplicableDeviceCount(value: number | undefined) {
        if(value) {
            this._notApplicableDeviceCount = value;
        }
    };
    /**
     * Gets the notApplicableUserCount property value. Number of not applicable users.
     * @returns a integer
     */
    public get notApplicableUserCount() {
        return this._notApplicableUserCount;
    };
    /**
     * Sets the notApplicableUserCount property value. Number of not applicable users.
     * @param value Value to set for the notApplicableUserCount property.
     */
    public set notApplicableUserCount(value: number | undefined) {
        if(value) {
            this._notApplicableUserCount = value;
        }
    };
    /**
     * Gets the remediatedDeviceCount property value. Number of remediated devices.
     * @returns a integer
     */
    public get remediatedDeviceCount() {
        return this._remediatedDeviceCount;
    };
    /**
     * Sets the remediatedDeviceCount property value. Number of remediated devices.
     * @param value Value to set for the remediatedDeviceCount property.
     */
    public set remediatedDeviceCount(value: number | undefined) {
        if(value) {
            this._remediatedDeviceCount = value;
        }
    };
    /**
     * Gets the remediatedUserCount property value. Number of remediated users.
     * @returns a integer
     */
    public get remediatedUserCount() {
        return this._remediatedUserCount;
    };
    /**
     * Sets the remediatedUserCount property value. Number of remediated users.
     * @param value Value to set for the remediatedUserCount property.
     */
    public set remediatedUserCount(value: number | undefined) {
        if(value) {
            this._remediatedUserCount = value;
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
        if(this.compliantUserCount){
            writer.writeNumberValue("compliantUserCount", this.compliantUserCount);
        }
        if(this.conflictDeviceCount){
            writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        }
        if(this.conflictUserCount){
            writer.writeNumberValue("conflictUserCount", this.conflictUserCount);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.errorDeviceCount){
            writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        }
        if(this.errorUserCount){
            writer.writeNumberValue("errorUserCount", this.errorUserCount);
        }
        if(this.nonCompliantDeviceCount){
            writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        }
        if(this.nonCompliantUserCount){
            writer.writeNumberValue("nonCompliantUserCount", this.nonCompliantUserCount);
        }
        if(this.notApplicableDeviceCount){
            writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        }
        if(this.notApplicableUserCount){
            writer.writeNumberValue("notApplicableUserCount", this.notApplicableUserCount);
        }
        if(this.remediatedDeviceCount){
            writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        }
        if(this.remediatedUserCount){
            writer.writeNumberValue("remediatedUserCount", this.remediatedUserCount);
        }
        if(this.unknownDeviceCount){
            writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
        if(this.unknownUserCount){
            writer.writeNumberValue("unknownUserCount", this.unknownUserCount);
        }
    };
    /**
     * Gets the unknownDeviceCount property value. Number of unknown devices.
     * @returns a integer
     */
    public get unknownDeviceCount() {
        return this._unknownDeviceCount;
    };
    /**
     * Sets the unknownDeviceCount property value. Number of unknown devices.
     * @param value Value to set for the unknownDeviceCount property.
     */
    public set unknownDeviceCount(value: number | undefined) {
        if(value) {
            this._unknownDeviceCount = value;
        }
    };
    /**
     * Gets the unknownUserCount property value. Number of unknown users.
     * @returns a integer
     */
    public get unknownUserCount() {
        return this._unknownUserCount;
    };
    /**
     * Sets the unknownUserCount property value. Number of unknown users.
     * @param value Value to set for the unknownUserCount property.
     */
    public set unknownUserCount(value: number | undefined) {
        if(value) {
            this._unknownUserCount = value;
        }
    };
}
