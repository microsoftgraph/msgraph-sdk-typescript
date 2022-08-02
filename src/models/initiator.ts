import {Identity} from './index';
import {InitiatorType} from './initiatorType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Initiator extends Identity implements Parsable {
    /** Type of initiator. Possible values are: user, application, system, unknownFutureValue. */
    private _initiatorType?: InitiatorType | undefined;
    /**
     * Instantiates a new Initiator and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.initiator";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiatorType": n => { this.initiatorType = n.getEnumValue<InitiatorType>(InitiatorType); },
        };
    };
    /**
     * Gets the initiatorType property value. Type of initiator. Possible values are: user, application, system, unknownFutureValue.
     * @returns a initiatorType
     */
    public get initiatorType() {
        return this._initiatorType;
    };
    /**
     * Sets the initiatorType property value. Type of initiator. Possible values are: user, application, system, unknownFutureValue.
     * @param value Value to set for the initiatorType property.
     */
    public set initiatorType(value: InitiatorType | undefined) {
        this._initiatorType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<InitiatorType>("initiatorType", this.initiatorType);
    };
}
