import {Entity} from '../';
import {DataSourceContainerStatus} from './dataSourceContainerStatus';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appCatalogs singleton.
 */
export class DataSourceContainer extends Entity implements Parsable {
    /** Created date and time of the dataSourceContainer entity. */
    private _createdDateTime?: Date | undefined;
    /** Display name of the dataSourceContainer entity. */
    private _displayName?: string | undefined;
    /** The hold status of the dataSourceContainer. The possible values are: notApplied, applied, applying, removing, partial */
    private _holdStatus?: DataSourceHoldStatus | undefined;
    /** Last modified date and time of the dataSourceContainer. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Date and time that the dataSourceContainer was released from the case. */
    private _releasedDateTime?: Date | undefined;
    /** Latest status of the dataSourceContainer. Possible values are: Active, Released. */
    private _status?: DataSourceContainerStatus | undefined;
    /**
     * Instantiates a new dataSourceContainer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Created date and time of the dataSourceContainer entity.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Created date and time of the dataSourceContainer entity.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the displayName property value. Display name of the dataSourceContainer entity.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the dataSourceContainer entity.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "holdStatus": n => { this.holdStatus = n.getEnumValue<DataSourceHoldStatus>(DataSourceHoldStatus); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "releasedDateTime": n => { this.releasedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<DataSourceContainerStatus>(DataSourceContainerStatus); },
        };
    };
    /**
     * Gets the holdStatus property value. The hold status of the dataSourceContainer. The possible values are: notApplied, applied, applying, removing, partial
     * @returns a dataSourceHoldStatus
     */
    public get holdStatus() {
        return this._holdStatus;
    };
    /**
     * Sets the holdStatus property value. The hold status of the dataSourceContainer. The possible values are: notApplied, applied, applying, removing, partial
     * @param value Value to set for the holdStatus property.
     */
    public set holdStatus(value: DataSourceHoldStatus | undefined) {
        this._holdStatus = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Last modified date and time of the dataSourceContainer.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Last modified date and time of the dataSourceContainer.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the releasedDateTime property value. Date and time that the dataSourceContainer was released from the case.
     * @returns a Date
     */
    public get releasedDateTime() {
        return this._releasedDateTime;
    };
    /**
     * Sets the releasedDateTime property value. Date and time that the dataSourceContainer was released from the case.
     * @param value Value to set for the releasedDateTime property.
     */
    public set releasedDateTime(value: Date | undefined) {
        this._releasedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<DataSourceHoldStatus>("holdStatus", this.holdStatus);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("releasedDateTime", this.releasedDateTime);
        writer.writeEnumValue<DataSourceContainerStatus>("status", this.status);
    };
    /**
     * Gets the status property value. Latest status of the dataSourceContainer. Possible values are: Active, Released.
     * @returns a dataSourceContainerStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Latest status of the dataSourceContainer. Possible values are: Active, Released.
     * @param value Value to set for the status property.
     */
    public set status(value: DataSourceContainerStatus | undefined) {
        this._status = value;
    };
}
