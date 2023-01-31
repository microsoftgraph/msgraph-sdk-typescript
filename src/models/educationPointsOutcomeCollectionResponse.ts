import {createEducationPointsOutcomeFromDiscriminatorValue} from './createEducationPointsOutcomeFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, EducationPointsOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationPointsOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: EducationPointsOutcome[] | undefined;
    /**
     * Instantiates a new EducationPointsOutcomeCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationPointsOutcome>(createEducationPointsOutcomeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EducationPointsOutcome>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a educationPointsOutcome
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: EducationPointsOutcome[] | undefined) {
        this._value = value;
    };
}
