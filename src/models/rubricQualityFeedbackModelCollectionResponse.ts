import {createRubricQualityFeedbackModelFromDiscriminatorValue} from './createRubricQualityFeedbackModelFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, RubricQualityFeedbackModel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualityFeedbackModelCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: RubricQualityFeedbackModel[] | undefined;
    /**
     * Instantiates a new RubricQualityFeedbackModelCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<RubricQualityFeedbackModel>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<RubricQualityFeedbackModel>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a rubricQualityFeedbackModel
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: RubricQualityFeedbackModel[] | undefined) {
        this._value = value;
    };
}
