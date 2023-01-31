import {createWorkbookRangeViewFromDiscriminatorValue} from './createWorkbookRangeViewFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, WorkbookRangeView} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRangeViewCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: WorkbookRangeView[] | undefined;
    /**
     * Instantiates a new WorkbookRangeViewCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<WorkbookRangeView>(createWorkbookRangeViewFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WorkbookRangeView>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a workbookRangeView
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: WorkbookRangeView[] | undefined) {
        this._value = value;
    };
}
