import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAgentImpl implements AdditionalDataHolder, Parsable, UserAgent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identifies the version of application software used by this endpoint. */
    public applicationVersion?: string | undefined;
    /** User-agent header value reported by this endpoint. */
    public headerValue?: string | undefined;
    /**
     * Instantiates a new userAgent and sets the default values.
     * @param userAgentParameterValue 
     */
    public constructor(userAgentParameterValue?: UserAgent | undefined) {
        this.additionalData = userAgentParameterValue?.additionalData ? userAgentParameterValue?.additionalData! : {}
        this.applicationVersion = userAgentParameterValue?.applicationVersion ;
        this.headerValue = userAgentParameterValue?.headerValue ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applicationVersion": n => { this.applicationVersion = n.getStringValue(); },
            "headerValue": n => { this.headerValue = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.applicationVersion){
        writer.writeStringValue("applicationVersion", this.applicationVersion);
        }
        if(this.headerValue){
        writer.writeStringValue("headerValue", this.headerValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
