import {createUserAgentFromDiscriminatorValue} from './createUserAgentFromDiscriminatorValue';
import {UserAgent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Endpoint implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** User-agent reported by this endpoint. */
    private _userAgent?: UserAgent | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new endpoint and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "userAgent": n => { this.userAgent = n.getObjectValue<UserAgent>(createUserAgentFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<UserAgent>("userAgent", this.userAgent);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userAgent property value. User-agent reported by this endpoint.
     * @returns a userAgent
     */
    public get userAgent() {
        return this._userAgent;
    };
    /**
     * Sets the userAgent property value. User-agent reported by this endpoint.
     * @param value Value to set for the userAgent property.
     */
    public set userAgent(value: UserAgent | undefined) {
        this._userAgent = value;
    };
}
