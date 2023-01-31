import {createDelegatedAdminAccessContainerFromDiscriminatorValue} from './createDelegatedAdminAccessContainerFromDiscriminatorValue';
import {createDelegatedAdminAccessDetailsFromDiscriminatorValue} from './createDelegatedAdminAccessDetailsFromDiscriminatorValue';
import {DelegatedAdminAccessAssignmentStatus} from './delegatedAdminAccessAssignmentStatus';
import {DelegatedAdminAccessContainer, DelegatedAdminAccessDetails, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminAccessAssignment extends Entity implements Parsable {
    private _accessContainer?: DelegatedAdminAccessContainer | undefined;
    private _accessDetails?: DelegatedAdminAccessDetails | undefined;
    private _createdDateTime?: Date | undefined;
    private _lastModifiedDateTime?: Date | undefined;
    private _status?: DelegatedAdminAccessAssignmentStatus | undefined;
    /**
     * Gets the accessContainer property value. 
     * @returns a delegatedAdminAccessContainer
     */
    public get accessContainer() {
        return this._accessContainer;
    };
    /**
     * Sets the accessContainer property value. 
     * @param value Value to set for the accessContainer property.
     */
    public set accessContainer(value: DelegatedAdminAccessContainer | undefined) {
        this._accessContainer = value;
    };
    /**
     * Gets the accessDetails property value. 
     * @returns a delegatedAdminAccessDetails
     */
    public get accessDetails() {
        return this._accessDetails;
    };
    /**
     * Sets the accessDetails property value. 
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
     * Gets the createdDateTime property value. 
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. 
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
     * Gets the lastModifiedDateTime property value. 
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. 
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
     * Gets the status property value. 
     * @returns a delegatedAdminAccessAssignmentStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: DelegatedAdminAccessAssignmentStatus | undefined) {
        this._status = value;
    };
}
