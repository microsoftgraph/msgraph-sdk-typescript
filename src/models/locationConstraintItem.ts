import {Location} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocationConstraintItem extends Location implements Parsable {
    /** If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without checking if it's free. Default is true. */
    private _resolveAvailability?: boolean | undefined;
    /**
     * Instantiates a new LocationConstraintItem and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.locationConstraintItem";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "resolveAvailability": n => { this.resolveAvailability = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the resolveAvailability property value. If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without checking if it's free. Default is true.
     * @returns a boolean
     */
    public get resolveAvailability() {
        return this._resolveAvailability;
    };
    /**
     * Sets the resolveAvailability property value. If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without checking if it's free. Default is true.
     * @param value Value to set for the resolveAvailability property.
     */
    public set resolveAvailability(value: boolean | undefined) {
        this._resolveAvailability = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("resolveAvailability", this.resolveAvailability);
    };
}
