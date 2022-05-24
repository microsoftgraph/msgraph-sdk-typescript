import {StopHoldMusicPostRequestBody} from './stopHoldMusicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the stopHoldMusic method. */
export class StopHoldMusicPostRequestBodyImpl implements AdditionalDataHolder, Parsable, StopHoldMusicPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The clientContext property */
    public clientContext?: string | undefined;
    /**
     * Instantiates a new stopHoldMusicPostRequestBody and sets the default values.
     * @param stopHoldMusicPostRequestBodyParameterValue 
     */
    public constructor(stopHoldMusicPostRequestBodyParameterValue?: StopHoldMusicPostRequestBody | undefined) {
        this.additionalData = stopHoldMusicPostRequestBodyParameterValue?.additionalData ? stopHoldMusicPostRequestBodyParameterValue?.additionalData! : {}
        this.clientContext = stopHoldMusicPostRequestBodyParameterValue?.clientContext ;
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
        writer.writeStringValue("clientContext", this.clientContext);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
