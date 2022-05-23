import {LocationImpl} from './index';
import {LocationConstraintItem} from './locationConstraintItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the findMeetingTimes method. */
export class LocationConstraintItemImpl extends LocationImpl implements LocationConstraintItem, Parsable {
    /** If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without checking if it's free. Default is true. */
    public resolveAvailability?: boolean | undefined;
    /**
     * Instantiates a new locationConstraintItem and sets the default values.
     * @param locationConstraintItemParameterValue 
     */
    public constructor(locationConstraintItemParameterValue?: LocationConstraintItem | undefined) {
        super();
        this.resolveAvailability = locationConstraintItemParameterValue?.resolveAvailability ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.resolveAvailability){
        writer.writeBooleanValue("resolveAvailability", this.resolveAvailability);
        }
    };
}
