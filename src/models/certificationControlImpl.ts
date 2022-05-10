import {CertificationControl} from './certificationControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificationControlImpl implements AdditionalDataHolder, CertificationControl, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** Certification control name  */
    name?: string | undefined;
    /** URL for the Microsoft Service Trust Portal  */
    url?: string | undefined;
    /**
     * Instantiates a new certificationControl and sets the default values.
     * @param certificationControlParameterValue 
     */
    public constructor(certificationControlParameterValue?: CertificationControl | undefined) {
        this.additionalData = {};
        this.additionalData = certificationControlParameterValue?.additionalData ? {} : certificationControlParameterValue?.additionalData!
        this.name = certificationControlParameterValue?.name ;
        this.url = certificationControlParameterValue?.url ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.url){
        if(this.url)
        writer.writeStringValue("url", this.url);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
