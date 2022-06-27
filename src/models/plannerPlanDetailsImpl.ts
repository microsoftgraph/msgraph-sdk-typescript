import {createPlannerCategoryDescriptionsFromDiscriminatorValue} from './createPlannerCategoryDescriptionsFromDiscriminatorValue';
import {createPlannerUserIdsFromDiscriminatorValue} from './createPlannerUserIdsFromDiscriminatorValue';
import {EntityImpl, PlannerCategoryDescriptionsImpl, PlannerUserIdsImpl} from './index';
import {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import {PlannerPlanDetails} from './plannerPlanDetails';
import {PlannerUserIds} from './plannerUserIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class PlannerPlanDetailsImpl extends EntityImpl implements PlannerPlanDetails {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan */
    public categoryDescriptions?: PlannerCategoryDescriptions | undefined;
    /** The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required in order for them to access the plan owned by the group. */
    public sharedWith?: PlannerUserIds | undefined;
    /**
     * Instantiates a new plannerPlanDetails and sets the default values.
     * @param plannerPlanDetailsParameterValue 
     */
    public constructor(plannerPlanDetailsParameterValue?: PlannerPlanDetails | undefined) {
        super(plannerPlanDetailsParameterValue);
        this.additionalData = plannerPlanDetailsParameterValue?.additionalData ? plannerPlanDetailsParameterValue?.additionalData! : {};
        this.categoryDescriptions = plannerPlanDetailsParameterValue?.categoryDescriptions instanceof PlannerCategoryDescriptionsImpl? plannerPlanDetailsParameterValue?.categoryDescriptions:new PlannerCategoryDescriptionsImpl(plannerPlanDetailsParameterValue?.categoryDescriptions);
        this.sharedWith = plannerPlanDetailsParameterValue?.sharedWith instanceof PlannerUserIdsImpl? plannerPlanDetailsParameterValue?.sharedWith:new PlannerUserIdsImpl(plannerPlanDetailsParameterValue?.sharedWith);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "categoryDescriptions": n => { this.categoryDescriptions = n.getObjectValue<PlannerCategoryDescriptionsImpl>(createPlannerCategoryDescriptionsFromDiscriminatorValue); },
            "sharedWith": n => { this.sharedWith = n.getObjectValue<PlannerUserIdsImpl>(createPlannerUserIdsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.categoryDescriptions){
            writer.writeObjectValue<PlannerCategoryDescriptionsImpl>("categoryDescriptions", new PlannerCategoryDescriptionsImpl(this.categoryDescriptions));
        }
        if(this.sharedWith){
            writer.writeObjectValue<PlannerUserIdsImpl>("sharedWith", new PlannerUserIdsImpl(this.sharedWith));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
