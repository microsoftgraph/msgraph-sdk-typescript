import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {EntityImpl, JsonImpl, WorkbookWorksheetImpl} from './index';
import {Json} from './json';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookNamedItemImpl extends EntityImpl implements Parsable, WorkbookNamedItem {
    /** Represents the comment associated with this name.  */
    comment?: string | undefined;
    /** The name of the object. Read-only.  */
    name?: string | undefined;
    /** Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.  */
    scope?: string | undefined;
    /** Indicates what type of reference is associated with the name. Possible values are: String, Integer, Double, Boolean, Range. Read-only.  */
    type?: string | undefined;
    /** Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.  */
    value?: Json | undefined;
    /** Specifies whether the object is visible or not.  */
    visible?: boolean | undefined;
    /** Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.  */
    worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookNamedItem and sets the default values.
     * @param workbookNamedItemParameterValue 
     */
    public constructor(workbookNamedItemParameterValue?: WorkbookNamedItem | undefined) {
        super();
        this.comment = workbookNamedItemParameterValue?.comment ;
        this.name = workbookNamedItemParameterValue?.name ;
        this.scope = workbookNamedItemParameterValue?.scope ;
        this.type = workbookNamedItemParameterValue?.type ;
        this.value = workbookNamedItemParameterValue?.value ;
        this.visible = workbookNamedItemParameterValue?.visible ;
        this.worksheet = workbookNamedItemParameterValue?.worksheet ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "comment": n => { this.comment = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "scope": n => { this.scope = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "value": n => { this.value = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
            "visible": n => { this.visible = n.getBooleanValue(); },
            "worksheet": n => { this.worksheet = n.getObjectValue<WorkbookWorksheetImpl>(createWorkbookWorksheetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.comment){
        if(this.comment)
        writer.writeStringValue("comment", this.comment);
        }
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.scope){
        if(this.scope)
        writer.writeStringValue("scope", this.scope);
        }
        if(this.type){
        if(this.type)
        writer.writeStringValue("type", this.type);
        }
        if(this.value){
        if(this.value)
        writer.writeObjectValue<JsonImpl>("value", new JsonImpl(this.value));
        }
        if(this.visible){
        if(this.visible)
        writer.writeBooleanValue("visible", this.visible);
        }
        if(this.worksheet){
        if(this.worksheet)
        writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", new WorkbookWorksheetImpl(this.worksheet));
        }
    };
}
