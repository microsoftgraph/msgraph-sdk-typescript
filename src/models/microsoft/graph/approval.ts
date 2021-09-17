import {ApprovalStage} from './approvalStage';
import {Entity} from './entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Approval extends Entity implements Parsable {
    /** Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage.  */
    private _stages?: ApprovalStage[] | undefined;
    /**
     * Instantiates a new approval and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the stages property value. Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage.
     * @returns a approvalStage
     */
    public get stages() {
        return this._stages;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["stages", (o, n) => { (o as unknown as Approval).stages = n.getCollectionOfObjectValues<ApprovalStage>(ApprovalStage); }],
        ]);
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
     * Sets the stages property value. Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage.
     * @param value Value to set for the stages property.
     */
    public set stages(value: ApprovalStage[] | undefined) {
        this._stages = value;
    };
}
