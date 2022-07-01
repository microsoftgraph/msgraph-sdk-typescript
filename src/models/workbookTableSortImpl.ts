import {createWorkbookSortFieldFromDiscriminatorValue} from './createWorkbookSortFieldFromDiscriminatorValue';
import {EntityImpl, WorkbookSortFieldImpl} from './index';
import {WorkbookSortField} from './workbookSortField';
import {WorkbookTableSort} from './workbookTableSort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookTableSortImpl extends EntityImpl implements WorkbookTableSort {
    /** Represents the current conditions used to last sort the table. Read-only. */
    private _fields?: WorkbookSortField[] | undefined;
    /** Represents whether the casing impacted the last sort of the table. Read-only. */
    private _matchCase?: boolean | undefined;
    /** Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount. Read-only. */
    private _method?: string | undefined;
    /**
     * Instantiates a new workbookTableSort and sets the default values.
     * @param workbookTableSortParameterValue 
     */
    public constructor(workbookTableSortParameterValue?: WorkbookTableSort | undefined) {
        super(workbookTableSortParameterValue);
        this._fields = workbookTableSortParameterValue?.fields;
        this._matchCase = workbookTableSortParameterValue?.matchCase;
        this._method = workbookTableSortParameterValue?.method;
    };
    /**
     * Gets the fields property value. Represents the current conditions used to last sort the table. Read-only.
     * @returns a WorkbookSortFieldInterface
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. Represents the current conditions used to last sort the table. Read-only.
     * @param value Value to set for the fields property.
     */
    public set fields(value: WorkbookSortField[] | undefined) {
        if(value) {
            const fieldsArrValue: WorkbookSortFieldImpl[] = [];
            this.fields?.forEach(element => {
                fieldsArrValue.push((element instanceof WorkbookSortFieldImpl? element as WorkbookSortFieldImpl:new WorkbookSortFieldImpl(element)));
            });
            this._fields = fieldsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fields": n => { this.fields = n.getCollectionOfObjectValues<WorkbookSortFieldImpl>(createWorkbookSortFieldFromDiscriminatorValue); },
            "matchCase": n => { this.matchCase = n.getBooleanValue(); },
            "method": n => { this.method = n.getStringValue(); },
        };
    };
    /**
     * Gets the matchCase property value. Represents whether the casing impacted the last sort of the table. Read-only.
     * @returns a boolean
     */
    public get matchCase() {
        return this._matchCase;
    };
    /**
     * Sets the matchCase property value. Represents whether the casing impacted the last sort of the table. Read-only.
     * @param value Value to set for the matchCase property.
     */
    public set matchCase(value: boolean | undefined) {
        if(value) {
            this._matchCase = value;
        }
    };
    /**
     * Gets the method property value. Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount. Read-only.
     * @returns a string
     */
    public get method() {
        return this._method;
    };
    /**
     * Sets the method property value. Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount. Read-only.
     * @param value Value to set for the method property.
     */
    public set method(value: string | undefined) {
        if(value) {
            this._method = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fields && this.fields.length != 0){        const fieldsArrValue: WorkbookSortFieldImpl[] = [];
        this.fields?.forEach(element => {
            fieldsArrValue.push((element instanceof WorkbookSortFieldImpl? element as WorkbookSortFieldImpl:new WorkbookSortFieldImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookSortFieldImpl>("fields", fieldsArrValue);
        }
        if(this.matchCase){
            writer.writeBooleanValue("matchCase", this.matchCase);
        }
        if(this.method){
            writer.writeStringValue("method", this.method);
        }
    };
}
