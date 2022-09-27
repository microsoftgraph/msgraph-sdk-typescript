import {createEducationFeedbackOutcomeFromDiscriminatorValue} from './createEducationFeedbackOutcomeFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, EducationFeedbackOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedbackOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: EducationFeedbackOutcome[] | undefined;
    /**
     * Instantiates a new EducationFeedbackOutcomeCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationFeedbackOutcome>(createEducationFeedbackOutcomeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EducationFeedbackOutcome>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a educationFeedbackOutcome
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: EducationFeedbackOutcome[] | undefined) {
        this._value = value;
    };
}
