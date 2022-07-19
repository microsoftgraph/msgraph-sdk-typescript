import {MeetingInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenMeetingInfo extends MeetingInfo implements Parsable {
    /** The token used to join the call. */
    private _token?: string | undefined;
    /**
     * Instantiates a new TokenMeetingInfo and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.tokenMeetingInfo";
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
        writer.writeStringValue("token", this.token);
    };
    /**
     * Gets the token property value. The token used to join the call.
     * @returns a string
     */
    public get token() {
        return this._token;
    };
    /**
     * Sets the token property value. The token used to join the call.
     * @param value Value to set for the token property.
     */
    public set token(value: string | undefined) {
        this._token = value;
    };
}
