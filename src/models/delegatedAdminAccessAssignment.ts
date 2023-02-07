import {createDelegatedAdminAccessContainerFromDiscriminatorValue} from './createDelegatedAdminAccessContainerFromDiscriminatorValue';
import {createDelegatedAdminAccessDetailsFromDiscriminatorValue} from './createDelegatedAdminAccessDetailsFromDiscriminatorValue';
import {DelegatedAdminAccessAssignmentStatus} from './delegatedAdminAccessAssignmentStatus';
import {DelegatedAdminAccessContainer, DelegatedAdminAccessDetails, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminAccessAssignment extends Entity implements Parsable {
    /** The accessContainer property */
    private _accessContainer?: DelegatedAdminAccessContainer | undefined;
    /** The accessDetails property */
    private _accessDetails?: DelegatedAdminAccessDetails | undefined;
    /** The date and time in ISO 8601 format and in UTC time when the access assignment was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The date and time in ISO 8601 and in UTC time when this access assignment was last modified. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The status of the access assignment. Read-only. The possible values are: pending, active, deleting, deleted, error, unknownFutureValue. */
    private _status?: DelegatedAdminAccessAssignmentStatus | undefined;
    /**
     * Gets the accessContainer property value. The accessContainer property
     * @returns a delegatedAdminAccessContainer
     */
    public get accessContainer() {
        return this._accessContainer;
    };
    /**
     * Sets the accessContainer property value. The accessContainer property
     * @param value Value to set for the accessContainer property.
     */
    public set accessContainer(value: DelegatedAdminAccessContainer | undefined) {
        this._accessContainer = value;
    };
    /**
     * Gets the accessDetails property value. The accessDetails property
     * @returns a delegatedAdminAccessDetails
     */
    public get accessDetails() {
        return this._accessDetails;
    };
    /**
     * Sets the accessDetails property value. The accessDetails property
     * @param value Value to set for the accessDetails property.
     */
    public set accessDetails(value: DelegatedAdminAccessDetails | undefined) {
        this._accessDetails = value;
    };
    /**
     * Instantiates a new DelegatedAdminAccessAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time in ISO 8601 format and in UTC time when the access assignment was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time in ISO 8601 format and in UTC time when the access assignment was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessContainer": n => { this.accessContainer = n.getObjectValue<DelegatedAdminAccessContainer>(createDelegatedAdminAccessContainerFromDiscriminatorValue); },
            "accessDetails": n => { this.accessDetails = n.getObjectValue<DelegatedAdminAccessDetails>(createDelegatedAdminAccessDetailsFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<DelegatedAdminAccessAssignmentStatus>(DelegatedAdminAccessAssignmentStatus); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time in ISO 8601 and in UTC time when this access assignment was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time in ISO 8601 and in UTC time when this access assignment was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DelegatedAdminAccessContainer>("accessContainer", this.accessContainer);
        writer.writeObjectValue<DelegatedAdminAccessDetails>("accessDetails", this.accessDetails);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeEnumValue<DelegatedAdminAccessAssignmentStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status of the access assignment. Read-only. The possible values are: pending, active, deleting, deleted, error, unknownFutureValue.
     * @returns a delegatedAdminAccessAssignmentStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the access assignment. Read-only. The possible values are: pending, active, deleting, deleted, error, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: DelegatedAdminAccessAssignmentStatus | undefined) {
        this._status = value;
    };
}
