import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of groupLifecyclePolicy entities. */
export class GroupLifecyclePolicyImpl extends EntityImpl implements GroupLifecyclePolicy, Parsable {
    /** List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon. */
    public alternateNotificationEmails?: string | undefined;
    /** Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined. */
    public groupLifetimeInDays?: number | undefined;
    /** The group type for which the expiration policy applies. Possible values are All, Selected or None. */
    public managedGroupTypes?: string | undefined;
    /**
     * Instantiates a new groupLifecyclePolicy and sets the default values.
     * @param groupLifecyclePolicyParameterValue 
     */
    public constructor(groupLifecyclePolicyParameterValue?: GroupLifecyclePolicy | undefined) {
        super();
        this.alternateNotificationEmails = groupLifecyclePolicyParameterValue?.alternateNotificationEmails ;
        this.groupLifetimeInDays = groupLifecyclePolicyParameterValue?.groupLifetimeInDays ;
        this.managedGroupTypes = groupLifecyclePolicyParameterValue?.managedGroupTypes ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "alternateNotificationEmails": n => { this.alternateNotificationEmails = n.getStringValue(); },
            "groupLifetimeInDays": n => { this.groupLifetimeInDays = n.getNumberValue(); },
            "managedGroupTypes": n => { this.managedGroupTypes = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.alternateNotificationEmails){
        writer.writeStringValue("alternateNotificationEmails", this.alternateNotificationEmails);
        }
        if(this.groupLifetimeInDays){
        writer.writeNumberValue("groupLifetimeInDays", this.groupLifetimeInDays);
        }
        if(this.managedGroupTypes){
        writer.writeStringValue("managedGroupTypes", this.managedGroupTypes);
        }
    };
}
