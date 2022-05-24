import {ChangeTrackedEntityImpl} from './index';
import {SchedulingGroup} from './schedulingGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class SchedulingGroupImpl extends ChangeTrackedEntityImpl implements Parsable, SchedulingGroup {
    /** The display name for the schedulingGroup. Required. */
    public displayName?: string | undefined;
    /** Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required. */
    public isActive?: boolean | undefined;
    /** The list of user IDs that are a member of the schedulingGroup. Required. */
    public userIds?: string[] | undefined;
    /**
     * Instantiates a new schedulingGroup and sets the default values.
     * @param schedulingGroupParameterValue 
     */
    public constructor(schedulingGroupParameterValue?: SchedulingGroup | undefined) {
        super();
        this.displayName = schedulingGroupParameterValue?.displayName ;
        this.isActive = schedulingGroupParameterValue?.isActive ;
        this.userIds = schedulingGroupParameterValue?.userIds ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isActive": n => { this.isActive = n.getBooleanValue(); },
            "userIds": n => { this.userIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isActive){
        writer.writeBooleanValue("isActive", this.isActive);
        }
        if(this.userIds){
        writer.writeCollectionOfPrimitiveValues<string>("userIds", this.userIds);
        }
    };
}
