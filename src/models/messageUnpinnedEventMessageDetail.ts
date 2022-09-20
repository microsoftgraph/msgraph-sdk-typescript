import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageUnpinnedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** The eventDateTime property */
    private _eventDateTime?: Date | undefined;
    /** The initiator property */
    private _initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new MessageUnpinnedEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.messageUnpinnedEventMessageDetail";
    };
    /**
     * Gets the eventDateTime property value. The eventDateTime property
     * @returns a Date
     */
    public get eventDateTime() {
        return this._eventDateTime;
    };
    /**
     * Sets the eventDateTime property value. The eventDateTime property
     * @param value Value to set for the eventDateTime property.
     */
    public set eventDateTime(value: Date | undefined) {
        this._eventDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "eventDateTime": n => { this.eventDateTime = n.getDateValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the initiator property value. The initiator property
     * @returns a identitySet
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. The initiator property
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        this._initiator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
    };
}
