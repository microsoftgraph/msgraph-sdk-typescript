import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartPointFormatImpl extends EntityImpl implements WorkbookChartPointFormat {
    /** Represents the fill format of a chart, which includes background formating information. Read-only. */
    private _fill?: WorkbookChartFill | undefined;
    /**
     * Instantiates a new workbookChartPointFormat and sets the default values.
     * @param workbookChartPointFormatParameterValue 
     */
    public constructor(workbookChartPointFormatParameterValue?: WorkbookChartPointFormat | undefined) {
        super(workbookChartPointFormatParameterValue);
        this._fill = workbookChartPointFormatParameterValue?.fill;
    };
    /**
     * Gets the fill property value. Represents the fill format of a chart, which includes background formating information. Read-only.
     * @returns a WorkbookChartFillInterface
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Sets the fill property value. Represents the fill format of a chart, which includes background formating information. Read-only.
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookChartFill | undefined) {
        if(value) {
            this._fill = value instanceof WorkbookChartFillImpl? value : new WorkbookChartFillImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fill": n => { this.fill = n.getObjectValue<WorkbookChartFillImpl>(createWorkbookChartFillFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fill){
            writer.writeObjectValue<WorkbookChartFillImpl>("fill", (!this.fill || this.fill instanceof WorkbookChartFillImpl? this.fill : new WorkbookChartFillImpl(this.fill)));
        }
    };
}
