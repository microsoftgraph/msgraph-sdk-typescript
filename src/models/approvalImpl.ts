import {Approval} from './approval';
import {ApprovalStage} from './approvalStage';
import {createApprovalStageFromDiscriminatorValue} from './createApprovalStageFromDiscriminatorValue';
import {ApprovalStageImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class ApprovalImpl extends EntityImpl implements Approval {
    /** Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage. */
    private _stages?: ApprovalStage[] | undefined;
    /**
     * Instantiates a new approval and sets the default values.
     * @param approvalParameterValue 
     */
    public constructor(approvalParameterValue?: Approval | undefined) {
        super(approvalParameterValue);
        this._stages = approvalParameterValue?.stages;
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
        if(this.stages && this.stages.length != 0){        const stagesArrValue: ApprovalStageImpl[] = [];
        this.stages?.forEach(element => {
            stagesArrValue.push((element instanceof ApprovalStageImpl? element:new ApprovalStageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ApprovalStageImpl>("stages", stagesArrValue);
        }
    };
    /**
     * Gets the stages property value. Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage.
     * @returns a ApprovalStageInterface
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage.
     * @param value Value to set for the stages property.
     */
    public set stages(value: ApprovalStage[] | undefined) {
        if(value) {
            const stagesArrValue: ApprovalStageImpl[] = [];
            this.stages?.forEach(element => {
                stagesArrValue.push((element instanceof ApprovalStageImpl? element:new ApprovalStageImpl(element)));
            });
            this._stages = stagesArrValue;
        }
    };
}
