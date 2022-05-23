import {AudioConferencing} from './audioConferencing';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AudioConferencingImpl implements AdditionalDataHolder, AudioConferencing, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The conference id of the online meeting. */
    public conferenceId?: string | undefined;
    /** A URL to the externally-accessible web page that contains dial-in information. */
    public dialinUrl?: string | undefined;
    /** The tollFreeNumber property */
    public tollFreeNumber?: string | undefined;
    /** List of toll-free numbers that are displayed in the meeting invite. */
    public tollFreeNumbers?: string[] | undefined;
    /** The tollNumber property */
    public tollNumber?: string | undefined;
    /** List of toll numbers that are displayed in the meeting invite. */
    public tollNumbers?: string[] | undefined;
    /**
     * Instantiates a new audioConferencing and sets the default values.
     * @param audioConferencingParameterValue 
     */
    public constructor(audioConferencingParameterValue?: AudioConferencing | undefined) {
        this.additionalData = audioConferencingParameterValue?.additionalData ? audioConferencingParameterValue?.additionalData! : {}
        this.conferenceId = audioConferencingParameterValue?.conferenceId ;
        this.dialinUrl = audioConferencingParameterValue?.dialinUrl ;
        this.tollFreeNumber = audioConferencingParameterValue?.tollFreeNumber ;
        this.tollFreeNumbers = audioConferencingParameterValue?.tollFreeNumbers ;
        this.tollNumber = audioConferencingParameterValue?.tollNumber ;
        this.tollNumbers = audioConferencingParameterValue?.tollNumbers ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "conferenceId": n => { this.conferenceId = n.getStringValue(); },
            "dialinUrl": n => { this.dialinUrl = n.getStringValue(); },
            "tollFreeNumber": n => { this.tollFreeNumber = n.getStringValue(); },
            "tollFreeNumbers": n => { this.tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>(); },
            "tollNumber": n => { this.tollNumber = n.getStringValue(); },
            "tollNumbers": n => { this.tollNumbers = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.conferenceId){
        writer.writeStringValue("conferenceId", this.conferenceId);
        }
        if(this.dialinUrl){
        writer.writeStringValue("dialinUrl", this.dialinUrl);
        }
        if(this.tollFreeNumber){
        writer.writeStringValue("tollFreeNumber", this.tollFreeNumber);
        }
        if(this.tollFreeNumbers){
        writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", this.tollFreeNumbers);
        }
        if(this.tollNumber){
        writer.writeStringValue("tollNumber", this.tollNumber);
        }
        if(this.tollNumbers){
        writer.writeCollectionOfPrimitiveValues<string>("tollNumbers", this.tollNumbers);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
