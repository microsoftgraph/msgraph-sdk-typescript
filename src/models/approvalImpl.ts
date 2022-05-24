import {Approval} from './approval';
import {ApprovalStage} from './approvalStage';
import {createApprovalStageFromDiscriminatorValue} from './createApprovalStageFromDiscriminatorValue';
import {ApprovalStageImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class ApprovalImpl extends EntityImpl implements Approval, Parsable {
    /** Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage. */
    public stages?: ApprovalStage[] | undefined;
    /**
     * Instantiates a new approval and sets the default values.
     * @param approvalParameterValue 
     */
    public constructor(approvalParameterValue?: Approval | undefined) {
        super();
        this.stages = approvalParameterValue?.stages ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "stages": n => { this.stages = n.getCollectionOfObjectValues<ApprovalStageImpl>(createApprovalStageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.stages && this.stages.length != 0){        const stagesArrValue: ApprovalStageImpl[] = []; this.stages?.forEach(element => {stagesArrValue.push(new ApprovalStageImpl(element));});
        writer.writeCollectionOfObjectValues<ApprovalStageImpl>("stages", stagesArrValue);
        }
    };
}
