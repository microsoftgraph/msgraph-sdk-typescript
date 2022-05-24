import {ApprovalStage} from './approvalStage';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {EntityImpl, IdentityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class ApprovalStageImpl extends EntityImpl implements ApprovalStage, Parsable {
    /** Indicates whether the stage is assigned to the calling user to review. Read-only. */
    public assignedToMe?: boolean | undefined;
    /** The label provided by the policy creator to identify an approval stage. Read-only. */
    public displayName?: string | undefined;
    /** The justification associated with the approval stage decision. */
    public justification?: string | undefined;
    /** The identifier of the reviewer. Read-only. */
    public reviewedBy?: Identity | undefined;
    /** The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public reviewedDateTime?: Date | undefined;
    /** The result of this approval record. Possible values include: NotReviewed, Approved, Denied. */
    public reviewResult?: string | undefined;
    /** The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only. */
    public status?: string | undefined;
    /**
     * Instantiates a new approvalStage and sets the default values.
     * @param approvalStageParameterValue 
     */
    public constructor(approvalStageParameterValue?: ApprovalStage | undefined) {
        super();
        this.assignedToMe = approvalStageParameterValue?.assignedToMe ;
        this.displayName = approvalStageParameterValue?.displayName ;
        this.justification = approvalStageParameterValue?.justification ;
        this.reviewedBy = approvalStageParameterValue?.reviewedBy ;
        this.reviewedDateTime = approvalStageParameterValue?.reviewedDateTime ;
        this.reviewResult = approvalStageParameterValue?.reviewResult ;
        this.status = approvalStageParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedToMe": n => { this.assignedToMe = n.getBooleanValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "reviewedBy": n => { this.reviewedBy = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "reviewedDateTime": n => { this.reviewedDateTime = n.getDateValue(); },
            "reviewResult": n => { this.reviewResult = n.getStringValue(); },
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
        if(this.assignedToMe){
        writer.writeBooleanValue("assignedToMe", this.assignedToMe);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.justification){
        writer.writeStringValue("justification", this.justification);
        }
        if(this.reviewedBy){
        writer.writeObjectValue<IdentityImpl>("reviewedBy", new IdentityImpl(this.reviewedBy));
        }
        if(this.reviewedDateTime){
        writer.writeDateValue("reviewedDateTime", this.reviewedDateTime);
        }
        if(this.reviewResult){
        writer.writeStringValue("reviewResult", this.reviewResult);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
    };
}
