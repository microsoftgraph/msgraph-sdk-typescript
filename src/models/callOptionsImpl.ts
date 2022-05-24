import {CallOptions} from './callOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallOptionsImpl implements AdditionalDataHolder, CallOptions, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The hideBotAfterEscalation property */
    public hideBotAfterEscalation?: boolean | undefined;
    /**
     * Instantiates a new callOptions and sets the default values.
     * @param callOptionsParameterValue 
     */
    public constructor(callOptionsParameterValue?: CallOptions | undefined) {
        this.additionalData = callOptionsParameterValue?.additionalData ? callOptionsParameterValue?.additionalData! : {}
        this.hideBotAfterEscalation = callOptionsParameterValue?.hideBotAfterEscalation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hideBotAfterEscalation": n => { this.hideBotAfterEscalation = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hideBotAfterEscalation){
        writer.writeBooleanValue("hideBotAfterEscalation", this.hideBotAfterEscalation);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
