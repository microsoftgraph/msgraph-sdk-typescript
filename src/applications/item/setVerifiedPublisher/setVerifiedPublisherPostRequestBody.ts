import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setVerifiedPublisher method. */
export class SetVerifiedPublisherPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The verifiedPublisherId property */
    private _verifiedPublisherId?: string | undefined;
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
     * Instantiates a new setVerifiedPublisherPostRequestBody and sets the default values.
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
            "verifiedPublisherId": n => { this.verifiedPublisherId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("verifiedPublisherId", this.verifiedPublisherId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the verifiedPublisherId property value. The verifiedPublisherId property
     * @returns a string
     */
    public get verifiedPublisherId() {
        return this._verifiedPublisherId;
    };
    /**
     * Sets the verifiedPublisherId property value. The verifiedPublisherId property
     * @param value Value to set for the verifiedPublisherId property.
     */
    public set verifiedPublisherId(value: string | undefined) {
        this._verifiedPublisherId = value;
    };
}
