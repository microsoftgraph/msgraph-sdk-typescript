import {MeetingInfoImpl} from './index';
import {TokenMeetingInfo} from './tokenMeetingInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenMeetingInfoImpl extends MeetingInfoImpl implements TokenMeetingInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The token used to join the call. */
    public token?: string | undefined;
    /**
     * Instantiates a new TokenMeetingInfo and sets the default values.
     * @param tokenMeetingInfoParameterValue 
     */
    public constructor(tokenMeetingInfoParameterValue?: TokenMeetingInfo | undefined) {
        super(tokenMeetingInfoParameterValue);
        this.additionalData = tokenMeetingInfoParameterValue?.additionalData ? tokenMeetingInfoParameterValue?.additionalData! : {};
        this.token = tokenMeetingInfoParameterValue?.token;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "token": n => { this.token = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.token){
            writer.writeStringValue("token", this.token);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
