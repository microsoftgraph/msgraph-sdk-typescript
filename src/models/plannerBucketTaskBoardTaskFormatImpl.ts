import {EntityImpl} from './index';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class PlannerBucketTaskBoardTaskFormatImpl extends EntityImpl implements Parsable, PlannerBucketTaskBoardTaskFormat {
    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here. */
    public orderHint?: string | undefined;
    /**
     * Instantiates a new plannerBucketTaskBoardTaskFormat and sets the default values.
     * @param plannerBucketTaskBoardTaskFormatParameterValue 
     */
    public constructor(plannerBucketTaskBoardTaskFormatParameterValue?: PlannerBucketTaskBoardTaskFormat | undefined) {
        super();
        this.orderHint = plannerBucketTaskBoardTaskFormatParameterValue?.orderHint ;
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
