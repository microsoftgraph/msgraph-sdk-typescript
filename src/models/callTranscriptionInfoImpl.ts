import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {CallTranscriptionState} from './callTranscriptionState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallTranscriptionInfoImpl implements AdditionalDataHolder, CallTranscriptionInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The state modified time in UTC. */
    public lastModifiedDateTime?: Date | undefined;
    /** Possible values are: notStarted, active, inactive. */
    public state?: CallTranscriptionState | undefined;
    /**
     * Instantiates a new callTranscriptionInfo and sets the default values.
     * @param callTranscriptionInfoParameterValue 
     */
    public constructor(callTranscriptionInfoParameterValue?: CallTranscriptionInfo | undefined) {
        this.additionalData = callTranscriptionInfoParameterValue?.additionalData ? callTranscriptionInfoParameterValue?.additionalData! : {}
        this.lastModifiedDateTime = callTranscriptionInfoParameterValue?.lastModifiedDateTime ;
        this.state = callTranscriptionInfoParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<CallTranscriptionState>(CallTranscriptionState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.state){
        writer.writeEnumValue<CallTranscriptionState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
