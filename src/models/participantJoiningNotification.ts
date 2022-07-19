import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {Call, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantJoiningNotification extends Entity implements Parsable {
    /** The call property */
    private _call?: Call | undefined;
    /**
     * Gets the call property value. The call property
     * @returns a call
     */
    public get call() {
        return this._call;
    };
    /**
     * Sets the call property value. The call property
     * @param value Value to set for the call property.
     */
    public set call(value: Call | undefined) {
        this._call = value;
    };
    /**
     * Instantiates a new ParticipantJoiningNotification and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.participantJoiningNotification";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "call": n => { this.call = n.getObjectValue<Call>(createCallFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Call>("call", this.call);
    };
}
