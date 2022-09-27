import {EducationAssignmentGradeType} from './index';
import {ReferenceNumeric} from './referenceNumeric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentPointsGradeType extends EducationAssignmentGradeType implements Parsable {
    /** Max points possible for this assignment. */
    private _maxPoints?: number | string | ReferenceNumeric | undefined;
    /**
     * Instantiates a new EducationAssignmentPointsGradeType and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.educationAssignmentPointsGradeType";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "maxPoints": n => { this.maxPoints = n.getNumberValue(); },
        };
    };
    /**
     * Gets the maxPoints property value. Max points possible for this assignment.
     * @returns a agreements
     */
    public get maxPoints() {
        return this._maxPoints;
    };
    /**
     * Sets the maxPoints property value. Max points possible for this assignment.
     * @param value Value to set for the maxPoints property.
     */
    public set maxPoints(value: number | string | ReferenceNumeric | undefined) {
        this._maxPoints = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("maxPoints", this.maxPoints);
    };
}
