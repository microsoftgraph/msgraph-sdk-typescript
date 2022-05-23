import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {EntityImpl, JsonImpl, WorkbookWorksheetImpl} from './index';
import {Json} from './json';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookNamedItemImpl extends EntityImpl implements Parsable, WorkbookNamedItem {
    /** Represents the comment associated with this name. */
    public comment?: string | undefined;
    /** The name of the object. Read-only. */
    public name?: string | undefined;
    /** Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only. */
    public scope?: string | undefined;
    /** Indicates what type of reference is associated with the name. Possible values are: String, Integer, Double, Boolean, Range. Read-only. */
    public type?: string | undefined;
    /** Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only. */
    public value?: Json | undefined;
    /** Specifies whether the object is visible or not. */
    public visible?: boolean | undefined;
    /** Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only. */
    public worksheet?: WorkbookWorksheet | undefined;
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
        writer.writeStringValue("comment", this.comment);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.scope){
        writer.writeStringValue("scope", this.scope);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        if(this.value){
        writer.writeObjectValue<JsonImpl>("value", new JsonImpl(this.value));
        }
        if(this.visible){
        writer.writeBooleanValue("visible", this.visible);
        }
        if(this.worksheet){
        writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", new WorkbookWorksheetImpl(this.worksheet));
        }
    };
}
