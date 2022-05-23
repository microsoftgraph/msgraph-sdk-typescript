import {ChecklistItem} from './checklistItem';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ChecklistItemImpl extends EntityImpl implements ChecklistItem, Parsable {
    /** The date and time when the checklistItem was finished. */
    public checkedDateTime?: Date | undefined;
    /** The date and time when the checklistItem was created. */
    public createdDateTime?: Date | undefined;
    /** Field indicating the title of checklistItem. */
    public displayName?: string | undefined;
    /** State indicating whether the item is checked off or not. */
    public isChecked?: boolean | undefined;
    /**
     * Instantiates a new checklistItem and sets the default values.
     * @param checklistItemParameterValue 
     */
    public constructor(checklistItemParameterValue?: ChecklistItem | undefined) {
        super();
        this.checkedDateTime = checklistItemParameterValue?.checkedDateTime ;
        this.createdDateTime = checklistItemParameterValue?.createdDateTime ;
        this.displayName = checklistItemParameterValue?.displayName ;
        this.isChecked = checklistItemParameterValue?.isChecked ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "checkedDateTime": n => { this.checkedDateTime = n.getDateValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isChecked": n => { this.isChecked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.checkedDateTime){
        writer.writeDateValue("checkedDateTime", this.checkedDateTime);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isChecked){
        writer.writeBooleanValue("isChecked", this.isChecked);
        }
    };
}
