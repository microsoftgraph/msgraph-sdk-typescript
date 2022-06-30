import {ChecklistItem} from './checklistItem';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ChecklistItemImpl extends EntityImpl implements ChecklistItem {
    /** The date and time when the checklistItem was finished. */
    private _checkedDateTime?: Date | undefined;
    /** The date and time when the checklistItem was created. */
    private _createdDateTime?: Date | undefined;
    /** Field indicating the title of checklistItem. */
    private _displayName?: string | undefined;
    /** State indicating whether the item is checked off or not. */
    private _isChecked?: boolean | undefined;
    /**
     * Gets the checkedDateTime property value. The date and time when the checklistItem was finished.
     * @returns a Date
     */
    public get checkedDateTime() {
        return this._checkedDateTime;
    };
    /**
     * Sets the checkedDateTime property value. The date and time when the checklistItem was finished.
     * @param value Value to set for the checkedDateTime property.
     */
    public set checkedDateTime(value: Date | undefined) {
        if(value) {
            this._checkedDateTime = value;
        }
    };
    /**
     * Instantiates a new checklistItem and sets the default values.
     * @param checklistItemParameterValue 
     */
    public constructor(checklistItemParameterValue?: ChecklistItem | undefined) {
        super(checklistItemParameterValue);
        this._checkedDateTime = checklistItemParameterValue?.checkedDateTime;
        this._createdDateTime = checklistItemParameterValue?.createdDateTime;
        this._displayName = checklistItemParameterValue?.displayName;
        this._isChecked = checklistItemParameterValue?.isChecked;
    };
    /**
     * Gets the createdDateTime property value. The date and time when the checklistItem was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the checklistItem was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the displayName property value. Field indicating the title of checklistItem.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Field indicating the title of checklistItem.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the isChecked property value. State indicating whether the item is checked off or not.
     * @returns a boolean
     */
    public get isChecked() {
        return this._isChecked;
    };
    /**
     * Sets the isChecked property value. State indicating whether the item is checked off or not.
     * @param value Value to set for the isChecked property.
     */
    public set isChecked(value: boolean | undefined) {
        if(value) {
            this._isChecked = value;
        }
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
