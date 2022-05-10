import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl} from './index';
import {Request} from './request';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequestImpl extends EntityImpl implements Parsable, Request {
    /** The identifier of the approval of the request.  */
    approvalId?: string | undefined;
    /** The request completion date time.  */
    completedDateTime?: Date | undefined;
    /** The user who created this request.  */
    createdBy?: IdentitySet | undefined;
    /** The request creation date time.  */
    createdDateTime?: Date | undefined;
    /** Free text field to define any custom data for the request. Not used.  */
    customData?: string | undefined;
    /** The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable.  */
    status?: string | undefined;
    /**
     * Instantiates a new request and sets the default values.
     * @param requestParameterValue 
     */
    public constructor(requestParameterValue?: Request | undefined) {
        super();
        this.approvalId = requestParameterValue?.approvalId ;
        this.completedDateTime = requestParameterValue?.completedDateTime ;
        this.createdBy = requestParameterValue?.createdBy ;
        this.createdDateTime = requestParameterValue?.createdDateTime ;
        this.customData = requestParameterValue?.customData ;
        this.status = requestParameterValue?.status ;
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
        if(this.approvalId)
        writer.writeStringValue("approvalId", this.approvalId);
        }
        if(this.completedDateTime){
        if(this.completedDateTime)
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        }
        if(this.createdBy){
        if(this.createdBy)
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.customData){
        if(this.customData)
        writer.writeStringValue("customData", this.customData);
        }
        if(this.status){
        if(this.status)
        writer.writeStringValue("status", this.status);
        }
    };
}
