import {EntityImpl} from './index';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class PlannerBucketTaskBoardTaskFormatImpl extends EntityImpl implements PlannerBucketTaskBoardTaskFormat {
    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here. */
    private _orderHint?: string | undefined;
    /**
     * Instantiates a new plannerBucketTaskBoardTaskFormat and sets the default values.
     * @param plannerBucketTaskBoardTaskFormatParameterValue 
     */
    public constructor(plannerBucketTaskBoardTaskFormatParameterValue?: PlannerBucketTaskBoardTaskFormat | undefined) {
        super(plannerBucketTaskBoardTaskFormatParameterValue);
        this._orderHint = plannerBucketTaskBoardTaskFormatParameterValue?.orderHint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "orderHint": n => { this.orderHint = n.getStringValue(); },
        };
    };
    /**
     * Gets the orderHint property value. Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here.
     * @returns a string
     */
    public get orderHint() {
        return this._orderHint;
    };
    /**
     * Sets the orderHint property value. Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here.
     * @param value Value to set for the orderHint property.
     */
    public set orderHint(value: string | undefined) {
        if(value) {
            this._orderHint = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.orderHint){
            writer.writeStringValue("orderHint", this.orderHint);
        }
    };
}
