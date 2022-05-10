import {StopHoldMusicRequestBody} from './stopHoldMusicRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the stopHoldMusic method.  */
export class StopHoldMusicRequestBodyImpl implements AdditionalDataHolder, Parsable, StopHoldMusicRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The clientContext property  */
    clientContext?: string | undefined;
    /**
     * Instantiates a new stopHoldMusicRequestBody and sets the default values.
     * @param stopHoldMusicRequestBodyParameterValue 
     */
    public constructor(stopHoldMusicRequestBodyParameterValue?: StopHoldMusicRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = stopHoldMusicRequestBodyParameterValue?.additionalData ? {} : stopHoldMusicRequestBodyParameterValue?.additionalData!
        this.clientContext = stopHoldMusicRequestBodyParameterValue?.clientContext ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
        if(this.clientContext)
        writer.writeStringValue("clientContext", this.clientContext);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
