import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {Entity, PlannerPlan} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class PlannerGroup extends Entity implements Parsable {
    /** Read-only. Nullable. Returns the plannerPlans owned by the group. */
    private _plans?: PlannerPlan[] | undefined;
    /**
     * Instantiates a new plannerGroup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "plans": n => { this.plans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the plans property value. Read-only. Nullable. Returns the plannerPlans owned by the group.
     * @returns a plannerPlan
     */
    public get plans() {
        return this._plans;
    };
    /**
     * Sets the plans property value. Read-only. Nullable. Returns the plannerPlans owned by the group.
     * @param value Value to set for the plans property.
     */
    public set plans(value: PlannerPlan[] | undefined) {
        this._plans = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", this.plans);
    };
}
