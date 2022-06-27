import {IncomingCallOptions} from './incomingCallOptions';
import {CallOptionsImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncomingCallOptionsImpl extends CallOptionsImpl implements IncomingCallOptions {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new IncomingCallOptions and sets the default values.
     * @param incomingCallOptionsParameterValue 
     */
    public constructor(incomingCallOptionsParameterValue?: IncomingCallOptions | undefined) {
        super(incomingCallOptionsParameterValue);
        this.additionalData = incomingCallOptionsParameterValue?.additionalData ? incomingCallOptionsParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
