import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAgentImpl implements UserAgent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Identifies the version of application software used by this endpoint. */
    private _applicationVersion?: string | undefined;
    /** User-agent header value reported by this endpoint. */
    private _headerValue?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the applicationVersion property value. Identifies the version of application software used by this endpoint.
     * @returns a string
     */
    public get applicationVersion() {
        return this._applicationVersion;
    };
    /**
     * Sets the applicationVersion property value. Identifies the version of application software used by this endpoint.
     * @param value Value to set for the applicationVersion property.
     */
    public set applicationVersion(value: string | undefined) {
        if(value) {
            this._applicationVersion = value;
        }
    };
    /**
     * Instantiates a new userAgent and sets the default values.
     * @param userAgentParameterValue 
     */
    public constructor(userAgentParameterValue?: UserAgent | undefined) {
        this._additionalData = userAgentParameterValue?.additionalData ? userAgentParameterValue?.additionalData! : {};
        this._applicationVersion = userAgentParameterValue?.applicationVersion;
        this._headerValue = userAgentParameterValue?.headerValue;
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
     * Gets the headerValue property value. User-agent header value reported by this endpoint.
     * @returns a string
     */
    public get headerValue() {
        return this._headerValue;
    };
    /**
     * Sets the headerValue property value. User-agent header value reported by this endpoint.
     * @param value Value to set for the headerValue property.
     */
    public set headerValue(value: string | undefined) {
        if(value) {
            this._headerValue = value;
        }
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
