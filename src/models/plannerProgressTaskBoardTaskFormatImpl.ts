import {EntityImpl} from './index';
import {PlannerProgressTaskBoardTaskFormat} from './plannerProgressTaskBoardTaskFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class PlannerProgressTaskBoardTaskFormatImpl extends EntityImpl implements Parsable, PlannerProgressTaskBoardTaskFormat {
    /** Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here. */
    public orderHint?: string | undefined;
    /**
     * Instantiates a new plannerProgressTaskBoardTaskFormat and sets the default values.
     * @param plannerProgressTaskBoardTaskFormatParameterValue 
     */
    public constructor(plannerProgressTaskBoardTaskFormatParameterValue?: PlannerProgressTaskBoardTaskFormat | undefined) {
        super();
        this.orderHint = plannerProgressTaskBoardTaskFormatParameterValue?.orderHint ;
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
