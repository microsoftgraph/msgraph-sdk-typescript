import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagement singleton. */
export class SoftwareUpdateStatusSummary extends Entity implements Parsable {
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
        this._compliantDeviceCount = value;
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
        this._compliantUserCount = value;
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
        this._conflictDeviceCount = value;
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
        this._conflictUserCount = value;
    };
    /**
     * Instantiates a new softwareUpdateStatusSummary and sets the default values.
     */
    public constructor() {
        super();
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
        this._displayName = value;
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
        this._errorDeviceCount = value;
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
        this._errorUserCount = value;
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
        this._nonCompliantDeviceCount = value;
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
        this._nonCompliantUserCount = value;
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
        this._notApplicableDeviceCount = value;
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
        this._notApplicableUserCount = value;
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
        this._remediatedDeviceCount = value;
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
        this._remediatedUserCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        writer.writeNumberValue("compliantUserCount", this.compliantUserCount);
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        writer.writeNumberValue("conflictUserCount", this.conflictUserCount);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        writer.writeNumberValue("errorUserCount", this.errorUserCount);
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        writer.writeNumberValue("nonCompliantUserCount", this.nonCompliantUserCount);
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        writer.writeNumberValue("notApplicableUserCount", this.notApplicableUserCount);
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        writer.writeNumberValue("remediatedUserCount", this.remediatedUserCount);
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        writer.writeNumberValue("unknownUserCount", this.unknownUserCount);
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
        this._unknownDeviceCount = value;
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
        this._unknownUserCount = value;
    };
}
