import {createPlannerOrderHintsByAssigneeFromDiscriminatorValue} from './createPlannerOrderHintsByAssigneeFromDiscriminatorValue';
import {EntityImpl, PlannerOrderHintsByAssigneeImpl} from './index';
import {PlannerAssignedToTaskBoardTaskFormat} from './plannerAssignedToTaskBoardTaskFormat';
import {PlannerOrderHintsByAssignee} from './plannerOrderHintsByAssignee';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class PlannerAssignedToTaskBoardTaskFormatImpl extends EntityImpl implements Parsable, PlannerAssignedToTaskBoardTaskFormat {
    /** Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here. */
    public orderHintsByAssignee?: PlannerOrderHintsByAssignee | undefined;
    /** Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here. */
    public unassignedOrderHint?: string | undefined;
    /**
     * Instantiates a new plannerAssignedToTaskBoardTaskFormat and sets the default values.
     * @param plannerAssignedToTaskBoardTaskFormatParameterValue 
     */
    public constructor(plannerAssignedToTaskBoardTaskFormatParameterValue?: PlannerAssignedToTaskBoardTaskFormat | undefined) {
        super();
        this.orderHintsByAssignee = plannerAssignedToTaskBoardTaskFormatParameterValue?.orderHintsByAssignee ;
        this.unassignedOrderHint = plannerAssignedToTaskBoardTaskFormatParameterValue?.unassignedOrderHint ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "orderHintsByAssignee": n => { this.orderHintsByAssignee = n.getObjectValue<PlannerOrderHintsByAssigneeImpl>(createPlannerOrderHintsByAssigneeFromDiscriminatorValue); },
            "unassignedOrderHint": n => { this.unassignedOrderHint = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.orderHintsByAssignee){
        writer.writeObjectValue<PlannerOrderHintsByAssigneeImpl>("orderHintsByAssignee", new PlannerOrderHintsByAssigneeImpl(this.orderHintsByAssignee));
        }
        if(this.unassignedOrderHint){
        writer.writeStringValue("unassignedOrderHint", this.unassignedOrderHint);
        }
    };
}
