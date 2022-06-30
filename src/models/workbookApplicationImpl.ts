import {EntityImpl} from './index';
import {WorkbookApplication} from './workbookApplication';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookApplicationImpl extends EntityImpl implements WorkbookApplication {
    /** Returns the calculation mode used in the workbook. Possible values are: Automatic, AutomaticExceptTables, Manual. */
    private _calculationMode?: string | undefined;
    /**
     * Gets the calculationMode property value. Returns the calculation mode used in the workbook. Possible values are: Automatic, AutomaticExceptTables, Manual.
     * @returns a string
     */
    public get calculationMode() {
        return this._calculationMode;
    };
    /**
     * Sets the calculationMode property value. Returns the calculation mode used in the workbook. Possible values are: Automatic, AutomaticExceptTables, Manual.
     * @param value Value to set for the calculationMode property.
     */
    public set calculationMode(value: string | undefined) {
        if(value) {
            this._calculationMode = value;
        }
    };
    /**
     * Instantiates a new workbookApplication and sets the default values.
     * @param workbookApplicationParameterValue 
     */
    public constructor(workbookApplicationParameterValue?: WorkbookApplication | undefined) {
        super(workbookApplicationParameterValue);
        this._calculationMode = workbookApplicationParameterValue?.calculationMode;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "calculationMode": n => { this.calculationMode = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.calculationMode){
            writer.writeStringValue("calculationMode", this.calculationMode);
        }
    };
}
