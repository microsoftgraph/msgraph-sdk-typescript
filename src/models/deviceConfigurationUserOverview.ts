import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceConfigurationUserOverview extends Entity implements Parsable {
    /** Version of the policy for that overview */
    private _configurationVersion?: number | undefined;
    /** Number of error Users */
    private _errorCount?: number | undefined;
    /** Number of failed Users */
    private _failedCount?: number | undefined;
    /** Last update time */
    private _lastUpdateDateTime?: Date | undefined;
    /** Number of not applicable users */
    private _notApplicableCount?: number | undefined;
    /** Number of pending Users */
    private _pendingCount?: number | undefined;
    /** Number of succeeded Users */
    private _successCount?: number | undefined;
    /**
     * Gets the configurationVersion property value. Version of the policy for that overview
     * @returns a integer
     */
    public get configurationVersion() {
        return this._configurationVersion;
    };
    /**
     * Sets the configurationVersion property value. Version of the policy for that overview
     * @param value Value to set for the configurationVersion property.
     */
    public set configurationVersion(value: number | undefined) {
        this._configurationVersion = value;
    };
    /**
     * Instantiates a new deviceConfigurationUserOverview and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.deviceConfigurationUserOverview";
    };
    /**
     * Gets the errorCount property value. Number of error Users
     * @returns a integer
     */
    public get errorCount() {
        return this._errorCount;
    };
    /**
     * Sets the errorCount property value. Number of error Users
     * @param value Value to set for the errorCount property.
     */
    public set errorCount(value: number | undefined) {
        this._errorCount = value;
    };
    /**
     * Gets the failedCount property value. Number of failed Users
     * @returns a integer
     */
    public get failedCount() {
        return this._failedCount;
    };
    /**
     * Sets the failedCount property value. Number of failed Users
     * @param value Value to set for the failedCount property.
     */
    public set failedCount(value: number | undefined) {
        this._failedCount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "configurationVersion": n => { this.configurationVersion = n.getNumberValue(); },
            "errorCount": n => { this.errorCount = n.getNumberValue(); },
            "failedCount": n => { this.failedCount = n.getNumberValue(); },
            "lastUpdateDateTime": n => { this.lastUpdateDateTime = n.getDateValue(); },
            "notApplicableCount": n => { this.notApplicableCount = n.getNumberValue(); },
            "pendingCount": n => { this.pendingCount = n.getNumberValue(); },
            "successCount": n => { this.successCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lastUpdateDateTime property value. Last update time
     * @returns a Date
     */
    public get lastUpdateDateTime() {
        return this._lastUpdateDateTime;
    };
    /**
     * Sets the lastUpdateDateTime property value. Last update time
     * @param value Value to set for the lastUpdateDateTime property.
     */
    public set lastUpdateDateTime(value: Date | undefined) {
        this._lastUpdateDateTime = value;
    };
    /**
     * Gets the notApplicableCount property value. Number of not applicable users
     * @returns a integer
     */
    public get notApplicableCount() {
        return this._notApplicableCount;
    };
    /**
     * Sets the notApplicableCount property value. Number of not applicable users
     * @param value Value to set for the notApplicableCount property.
     */
    public set notApplicableCount(value: number | undefined) {
        this._notApplicableCount = value;
    };
    /**
     * Gets the pendingCount property value. Number of pending Users
     * @returns a integer
     */
    public get pendingCount() {
        return this._pendingCount;
    };
    /**
     * Sets the pendingCount property value. Number of pending Users
     * @param value Value to set for the pendingCount property.
     */
    public set pendingCount(value: number | undefined) {
        this._pendingCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("configurationVersion", this.configurationVersion);
        writer.writeNumberValue("errorCount", this.errorCount);
        writer.writeNumberValue("failedCount", this.failedCount);
        writer.writeDateValue("lastUpdateDateTime", this.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", this.notApplicableCount);
        writer.writeNumberValue("pendingCount", this.pendingCount);
        writer.writeNumberValue("successCount", this.successCount);
    };
    /**
     * Gets the successCount property value. Number of succeeded Users
     * @returns a integer
     */
    public get successCount() {
        return this._successCount;
    };
    /**
     * Sets the successCount property value. Number of succeeded Users
     * @param value Value to set for the successCount property.
     */
    public set successCount(value: number | undefined) {
        this._successCount = value;
    };
}
