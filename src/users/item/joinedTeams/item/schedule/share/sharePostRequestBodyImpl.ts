import {SharePostRequestBody} from './sharePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the share method. */
export class SharePostRequestBodyImpl implements AdditionalDataHolder, Parsable, SharePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The endDateTime property */
    public endDateTime?: Date | undefined;
    /** The notifyTeam property */
    public notifyTeam?: boolean | undefined;
    /** The startDateTime property */
    public startDateTime?: Date | undefined;
    /**
     * Instantiates a new sharePostRequestBody and sets the default values.
     * @param sharePostRequestBodyParameterValue 
     */
    public constructor(sharePostRequestBodyParameterValue?: SharePostRequestBody | undefined) {
        this.additionalData = sharePostRequestBodyParameterValue?.additionalData ? sharePostRequestBodyParameterValue?.additionalData! : {}
        this.endDateTime = sharePostRequestBodyParameterValue?.endDateTime ;
        this.notifyTeam = sharePostRequestBodyParameterValue?.notifyTeam ;
        this.startDateTime = sharePostRequestBodyParameterValue?.startDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "notifyTeam": n => { this.notifyTeam = n.getBooleanValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.notifyTeam){
        writer.writeBooleanValue("notifyTeam", this.notifyTeam);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
