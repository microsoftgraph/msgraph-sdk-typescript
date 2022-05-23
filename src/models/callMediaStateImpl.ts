import {CallMediaState} from './callMediaState';
import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallMediaStateImpl implements AdditionalDataHolder, CallMediaState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The audio media state. Possible values are: active, inactive, unknownFutureValue. */
    public audio?: MediaState | undefined;
    /**
     * Instantiates a new callMediaState and sets the default values.
     * @param callMediaStateParameterValue 
     */
    public constructor(callMediaStateParameterValue?: CallMediaState | undefined) {
        this.additionalData = callMediaStateParameterValue?.additionalData ? callMediaStateParameterValue?.additionalData! : {}
        this.audio = callMediaStateParameterValue?.audio ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "audio": n => { this.audio = n.getEnumValue<MediaState>(MediaState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.audio){
        writer.writeEnumValue<MediaState>("audio", this.audio);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
