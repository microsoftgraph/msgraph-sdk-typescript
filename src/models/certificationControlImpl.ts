import {CertificationControl} from './certificationControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificationControlImpl implements CertificationControl {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Certification control name */
    private _name?: string | undefined;
    /** URL for the Microsoft Service Trust Portal */
    private _url?: string | undefined;
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
     * Instantiates a new certificationControl and sets the default values.
     * @param certificationControlParameterValue 
     */
    public constructor(certificationControlParameterValue?: CertificationControl | undefined) {
        this._additionalData = certificationControlParameterValue?.additionalData ? certificationControlParameterValue?.additionalData! : {};
        this._name = certificationControlParameterValue?.name;
        this._url = certificationControlParameterValue?.url;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Certification control name
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Certification control name
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.url){
            writer.writeStringValue("url", this.url);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the url property value. URL for the Microsoft Service Trust Portal
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. URL for the Microsoft Service Trust Portal
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        if(value) {
            this._url = value;
        }
    };
}
