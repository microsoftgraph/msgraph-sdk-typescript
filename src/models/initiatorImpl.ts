import {IdentityImpl} from './index';
import {Initiator} from './initiator';
import {InitiatorType} from './initiatorType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InitiatorImpl extends IdentityImpl implements Initiator {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Type of initiator. Possible values are: user, application, system, unknownFutureValue. */
    public initiatorType?: InitiatorType | undefined;
    /**
     * Instantiates a new Initiator and sets the default values.
     * @param initiatorParameterValue 
     */
    public constructor(initiatorParameterValue?: Initiator | undefined) {
        super(initiatorParameterValue);
        this.additionalData = initiatorParameterValue?.additionalData ? initiatorParameterValue?.additionalData! : {};
        this.initiatorType = initiatorParameterValue?.initiatorType;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.initiatorType){
            writer.writeEnumValue<InitiatorType>("initiatorType", this.initiatorType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
