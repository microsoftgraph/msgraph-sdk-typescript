import {UriClickSecurityState} from './uriClickSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UriClickSecurityStateImpl implements AdditionalDataHolder, Parsable, UriClickSecurityState {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The clickAction property  */
    clickAction?: string | undefined;
    /** The clickDateTime property  */
    clickDateTime?: Date | undefined;
    /** The id property  */
    id?: string | undefined;
    /** The sourceId property  */
    sourceId?: string | undefined;
    /** The uriDomain property  */
    uriDomain?: string | undefined;
    /** The verdict property  */
    verdict?: string | undefined;
    /**
     * Instantiates a new uriClickSecurityState and sets the default values.
     * @param uriClickSecurityStateParameterValue 
     */
    public constructor(uriClickSecurityStateParameterValue?: UriClickSecurityState | undefined) {
        this.additionalData = {};
        this.additionalData = uriClickSecurityStateParameterValue?.additionalData ? {} : uriClickSecurityStateParameterValue?.additionalData!
        this.clickAction = uriClickSecurityStateParameterValue?.clickAction ;
        this.clickDateTime = uriClickSecurityStateParameterValue?.clickDateTime ;
        this.id = uriClickSecurityStateParameterValue?.id ;
        this.sourceId = uriClickSecurityStateParameterValue?.sourceId ;
        this.uriDomain = uriClickSecurityStateParameterValue?.uriDomain ;
        this.verdict = uriClickSecurityStateParameterValue?.verdict ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clickAction": n => { this.clickAction = n.getStringValue(); },
            "clickDateTime": n => { this.clickDateTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
            "uriDomain": n => { this.uriDomain = n.getStringValue(); },
            "verdict": n => { this.verdict = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clickAction){
        if(this.clickAction)
        writer.writeStringValue("clickAction", this.clickAction);
        }
        if(this.clickDateTime){
        if(this.clickDateTime)
        writer.writeDateValue("clickDateTime", this.clickDateTime);
        }
        if(this.id){
        if(this.id)
        writer.writeStringValue("id", this.id);
        }
        if(this.sourceId){
        if(this.sourceId)
        writer.writeStringValue("sourceId", this.sourceId);
        }
        if(this.uriDomain){
        if(this.uriDomain)
        writer.writeStringValue("uriDomain", this.uriDomain);
        }
        if(this.verdict){
        if(this.verdict)
        writer.writeStringValue("verdict", this.verdict);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
