import {DelegatedAdminRelationshipRequestAction} from './delegatedAdminRelationshipRequestAction';
import {DelegatedAdminRelationshipRequestStatus} from './delegatedAdminRelationshipRequestStatus';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminRelationshipRequest extends Entity implements Parsable {
    /** The action property */
    private _action?: DelegatedAdminRelationshipRequestAction | undefined;
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** The status property */
    private _status?: DelegatedAdminRelationshipRequestStatus | undefined;
    /**
     * Gets the action property value. The action property
     * @returns a delegatedAdminRelationshipRequestAction
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The action property
     * @param value Value to set for the action property.
     */
    public set action(value: DelegatedAdminRelationshipRequestAction | undefined) {
        this._action = value;
    };
    /**
     * Instantiates a new delegatedAdminRelationshipRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
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
            "action": n => { this.action = n.getEnumValue<DelegatedAdminRelationshipRequestAction>(DelegatedAdminRelationshipRequestAction); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<DelegatedAdminRelationshipRequestStatus>(DelegatedAdminRelationshipRequestStatus); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The lastModifiedDateTime property
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
        writer.writeEnumValue<DelegatedAdminRelationshipRequestAction>("action", this.action);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeEnumValue<DelegatedAdminRelationshipRequestStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a delegatedAdminRelationshipRequestStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: DelegatedAdminRelationshipRequestStatus | undefined) {
        this._status = value;
    };
}
