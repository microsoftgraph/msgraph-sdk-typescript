import {SelfSignedCertificatePostRequestBody} from './selfSignedCertificatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addTokenSigningCertificate method. */
export class SelfSignedCertificatePostRequestBodyImpl implements SelfSignedCertificatePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The endDateTime property */
    private _endDateTime?: Date | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new SelfSignedCertificatePostRequestBody and sets the default values.
     * @param selfSignedCertificatePostRequestBodyParameterValue 
     */
    public constructor(selfSignedCertificatePostRequestBodyParameterValue?: SelfSignedCertificatePostRequestBody | undefined) {
        this._additionalData = selfSignedCertificatePostRequestBodyParameterValue?.additionalData ? selfSignedCertificatePostRequestBodyParameterValue?.additionalData! : {};
        this._displayName = selfSignedCertificatePostRequestBodyParameterValue?.displayName;
        this._endDateTime = selfSignedCertificatePostRequestBodyParameterValue?.endDateTime;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
