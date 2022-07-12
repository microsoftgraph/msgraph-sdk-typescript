import {EducationAssignmentGrade} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentPointsGrade extends EducationAssignmentGrade implements Parsable {
    /** Number of points a teacher is giving this submission object. */
    private _points?: number | undefined;
    /**
     * Instantiates a new EducationAssignmentPointsGrade and sets the default values.
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
            "points": n => { this.points = n.getNumberValue(); },
        };
    };
    /**
     * Gets the points property value. Number of points a teacher is giving this submission object.
     * @returns a float
     */
    public get points() {
        return this._points;
    };
    /**
     * Sets the points property value. Number of points a teacher is giving this submission object.
     * @param value Value to set for the points property.
     */
    public set points(value: number | undefined) {
        this._points = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("points", this.points);
    };
}
