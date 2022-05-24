import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {WorkbookIconImpl} from './index';
import {WorkbookIcon} from './workbookIcon';
import {WorkbookSortField} from './workbookSortField';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookSortFieldImpl implements AdditionalDataHolder, Parsable, WorkbookSortField {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents whether the sorting is done in an ascending fashion. */
    public ascending?: boolean | undefined;
    /** Represents the color that is the target of the condition if the sorting is on font or cell color. */
    public color?: string | undefined;
    /** Represents additional sorting options for this field. Possible values are: Normal, TextAsNumber. */
    public dataOption?: string | undefined;
    /** Represents the icon that is the target of the condition if the sorting is on the cell's icon. */
    public icon?: WorkbookIcon | undefined;
    /** Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row). */
    public key?: number | undefined;
    /** Represents the type of sorting of this condition. Possible values are: Value, CellColor, FontColor, Icon. */
    public sortOn?: string | undefined;
    /**
     * Instantiates a new workbookSortField and sets the default values.
     * @param workbookSortFieldParameterValue 
     */
    public constructor(workbookSortFieldParameterValue?: WorkbookSortField | undefined) {
        this.additionalData = workbookSortFieldParameterValue?.additionalData ? workbookSortFieldParameterValue?.additionalData! : {}
        this.ascending = workbookSortFieldParameterValue?.ascending ;
        this.color = workbookSortFieldParameterValue?.color ;
        this.dataOption = workbookSortFieldParameterValue?.dataOption ;
        this.icon = workbookSortFieldParameterValue?.icon ;
        this.key = workbookSortFieldParameterValue?.key ;
        this.sortOn = workbookSortFieldParameterValue?.sortOn ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ascending": n => { this.ascending = n.getBooleanValue(); },
            "color": n => { this.color = n.getStringValue(); },
            "dataOption": n => { this.dataOption = n.getStringValue(); },
            "icon": n => { this.icon = n.getObjectValue<WorkbookIconImpl>(createWorkbookIconFromDiscriminatorValue); },
            "key": n => { this.key = n.getNumberValue(); },
            "sortOn": n => { this.sortOn = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ascending){
        writer.writeBooleanValue("ascending", this.ascending);
        }
        if(this.color){
        writer.writeStringValue("color", this.color);
        }
        if(this.dataOption){
        writer.writeStringValue("dataOption", this.dataOption);
        }
        if(this.icon){
        writer.writeObjectValue<WorkbookIconImpl>("icon", new WorkbookIconImpl(this.icon));
        }
        if(this.key){
        writer.writeNumberValue("key", this.key);
        }
        if(this.sortOn){
        writer.writeStringValue("sortOn", this.sortOn);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
