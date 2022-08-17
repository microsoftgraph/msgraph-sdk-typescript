import {createApprovalStageFromDiscriminatorValue} from './createApprovalStageFromDiscriminatorValue';
import {ApprovalStage, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Approval extends Entity implements Parsable {
    /** A collection of stages in the approval decision. */
    private _stages?: ApprovalStage[] | undefined;
    /**
     * Instantiates a new approval and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.approval";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "stages": n => { this.stages = n.getCollectionOfObjectValues<ApprovalStage>(createApprovalStageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ApprovalStage>("stages", this.stages);
    };
    /**
     * Gets the stages property value. A collection of stages in the approval decision.
     * @returns a approvalStage
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. A collection of stages in the approval decision.
     * @param value Value to set for the stages property.
     */
    public set stages(value: ApprovalStage[] | undefined) {
        this._stages = value;
    };
}
