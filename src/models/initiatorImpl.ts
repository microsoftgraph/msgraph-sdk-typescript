import {IdentityImpl} from './index';
import {Initiator} from './initiator';
import {InitiatorType} from './initiatorType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class InitiatorImpl extends IdentityImpl implements Initiator, Parsable {
    /** Type of initiator. Possible values are: user, application, system, unknownFutureValue. */
    public initiatorType?: InitiatorType | undefined;
    /**
     * Instantiates a new initiator and sets the default values.
     * @param initiatorParameterValue 
     */
    public constructor(initiatorParameterValue?: Initiator | undefined) {
        super();
        this.initiatorType = initiatorParameterValue?.initiatorType ;
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
    };
}
