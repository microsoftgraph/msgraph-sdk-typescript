import {AccessAction} from './accessAction';
import {createAccessActionFromDiscriminatorValue} from './createAccessActionFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {AccessActionImpl, DriveItemImpl, EntityImpl, IdentitySetImpl} from './index';
import {ItemActivity} from './itemActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ItemActivityImpl extends EntityImpl implements ItemActivity, Parsable {
    /** An item was accessed. */
    public access?: AccessAction | undefined;
    /** Details about when the activity took place. Read-only. */
    public activityDateTime?: Date | undefined;
    /** Identity of who performed the action. Read-only. */
    public actor?: IdentitySet | undefined;
    /** Exposes the driveItem that was the target of this activity. */
    public driveItem?: DriveItem | undefined;
    /**
     * Instantiates a new itemActivity and sets the default values.
     * @param itemActivityParameterValue 
     */
    public constructor(itemActivityParameterValue?: ItemActivity | undefined) {
        super();
        this.access = itemActivityParameterValue?.access ;
        this.activityDateTime = itemActivityParameterValue?.activityDateTime ;
        this.actor = itemActivityParameterValue?.actor ;
        this.driveItem = itemActivityParameterValue?.driveItem ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "access": n => { this.access = n.getObjectValue<AccessActionImpl>(createAccessActionFromDiscriminatorValue); },
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "actor": n => { this.actor = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "driveItem": n => { this.driveItem = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.access){
        writer.writeObjectValue<AccessActionImpl>("access", new AccessActionImpl(this.access));
        }
        if(this.activityDateTime){
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        }
        if(this.actor){
        writer.writeObjectValue<IdentitySetImpl>("actor", new IdentitySetImpl(this.actor));
        }
        if(this.driveItem){
        writer.writeObjectValue<DriveItemImpl>("driveItem", new DriveItemImpl(this.driveItem));
        }
    };
}
