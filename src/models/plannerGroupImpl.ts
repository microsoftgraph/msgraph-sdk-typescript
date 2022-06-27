import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {EntityImpl, PlannerPlanImpl} from './index';
import {PlannerGroup} from './plannerGroup';
import {PlannerPlan} from './plannerPlan';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class PlannerGroupImpl extends EntityImpl implements PlannerGroup {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Read-only. Nullable. Returns the plannerPlans owned by the group. */
    public plans?: PlannerPlan[] | undefined;
    /**
     * Instantiates a new plannerGroup and sets the default values.
     * @param plannerGroupParameterValue 
     */
    public constructor(plannerGroupParameterValue?: PlannerGroup | undefined) {
        super(plannerGroupParameterValue);
        this.additionalData = plannerGroupParameterValue?.additionalData ? plannerGroupParameterValue?.additionalData! : {};
        const plansArrValue: PlannerPlanImpl[] = []; plannerGroupParameterValue.plans?.forEach(element => {plansArrValue.push(element instanceof PlannerPlanImpl? element : new PlannerPlanImpl(element));});
        this.plans = plansArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "plans": n => { this.plans = n.getCollectionOfObjectValues<PlannerPlanImpl>(createPlannerPlanFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.plans && this.plans.length != 0){        const plansArrValue: PlannerPlanImpl[] = []; this.plans?.forEach(element => {plansArrValue.push(element instanceof PlannerPlanImpl? element : new PlannerPlanImpl(element));});
            writer.writeCollectionOfObjectValues<PlannerPlanImpl>("plans", plansArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
