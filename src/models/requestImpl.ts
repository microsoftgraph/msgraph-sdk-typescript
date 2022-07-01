import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl} from './index';
import {Request} from './request';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class RequestImpl extends EntityImpl implements Request {
    /** The identifier of the approval of the request. */
    private _approvalId?: string | undefined;
    /** The request completion date time. */
    private _completedDateTime?: Date | undefined;
    /** The principal that created the request. */
    private _createdBy?: IdentitySet | undefined;
    /** The request creation date time. */
    private _createdDateTime?: Date | undefined;
    /** Free text field to define any custom data for the request. Not used. */
    private _customData?: string | undefined;
    /** The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable. */
    private _status?: string | undefined;
    /**
     * Gets the approvalId property value. The identifier of the approval of the request.
     * @returns a string
     */
    public get approvalId() {
        return this._approvalId;
    };
    /**
     * Sets the approvalId property value. The identifier of the approval of the request.
     * @param value Value to set for the approvalId property.
     */
    public set approvalId(value: string | undefined) {
        if(value) {
            this._approvalId = value;
        }
    };
    /**
     * Gets the completedDateTime property value. The request completion date time.
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. The request completion date time.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        if(value) {
            this._completedDateTime = value;
        }
    };
    /**
     * Instantiates a new request and sets the default values.
     * @param requestParameterValue 
     */
    public constructor(requestParameterValue?: Request | undefined) {
        super(requestParameterValue);
        this._approvalId = requestParameterValue?.approvalId;
        this._completedDateTime = requestParameterValue?.completedDateTime;
        this._createdBy = requestParameterValue?.createdBy;
        this._createdDateTime = requestParameterValue?.createdDateTime;
        this._customData = requestParameterValue?.customData;
        this._status = requestParameterValue?.status;
    };
    /**
     * Gets the createdBy property value. The principal that created the request.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The principal that created the request.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. The request creation date time.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The request creation date time.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the customData property value. Free text field to define any custom data for the request. Not used.
     * @returns a string
     */
    public get customData() {
        return this._customData;
    };
    /**
     * Sets the customData property value. Free text field to define any custom data for the request. Not used.
     * @param value Value to set for the customData property.
     */
    public set customData(value: string | undefined) {
        if(value) {
            this._customData = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "approvalId": n => { this.approvalId = n.getStringValue(); },
            "completedDateTime": n => { this.completedDateTime = n.getDateValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "customData": n => { this.customData = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.approvalId){
            writer.writeStringValue("approvalId", this.approvalId);
        }
        if(this.completedDateTime){
            writer.writeDateValue("completedDateTime", this.completedDateTime);
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (this.createdBy instanceof IdentitySetImpl? this.createdBy as IdentitySetImpl: new IdentitySetImpl(this.createdBy)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.customData){
            writer.writeStringValue("customData", this.customData);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
    };
    /**
     * Gets the status property value. The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
