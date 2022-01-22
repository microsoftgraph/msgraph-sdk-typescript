import {Entity} from './entity';
import {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import {PlannerUserIds} from './plannerUserIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanDetails extends Entity implements Parsable {
    /** An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan  */
    private _categoryDescriptions?: PlannerCategoryDescriptions | undefined;
    /** The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required in order for them to access the plan owned by the group.  */
    private _sharedWith?: PlannerUserIds | undefined;
    /**
     * Instantiates a new plannerPlanDetails and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the categoryDescriptions property value. An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan
     * @returns a plannerCategoryDescriptions
     */
    public get categoryDescriptions() {
        return this._categoryDescriptions;
    };
    /**
     * Gets the sharedWith property value. The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required in order for them to access the plan owned by the group.
     * @returns a plannerUserIds
     */
    public get sharedWith() {
        return this._sharedWith;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["categoryDescriptions", (o, n) => { (o as unknown as PlannerPlanDetails).categoryDescriptions = n.getObjectValue<PlannerCategoryDescriptions>(PlannerCategoryDescriptions); }],
            ["sharedWith", (o, n) => { (o as unknown as PlannerPlanDetails).sharedWith = n.getObjectValue<PlannerUserIds>(PlannerUserIds); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PlannerCategoryDescriptions>("categoryDescriptions", this.categoryDescriptions);
        writer.writeObjectValue<PlannerUserIds>("sharedWith", this.sharedWith);
    };
    /**
     * Sets the categoryDescriptions property value. An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan
     * @param value Value to set for the categoryDescriptions property.
     */
    public set categoryDescriptions(value: PlannerCategoryDescriptions | undefined) {
        this._categoryDescriptions = value;
    };
    /**
     * Sets the sharedWith property value. The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required in order for them to access the plan owned by the group.
     * @param value Value to set for the sharedWith property.
     */
    public set sharedWith(value: PlannerUserIds | undefined) {
        this._sharedWith = value;
    };
}
