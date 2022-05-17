import {ShareRequestBody} from './shareRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the share method. */
export class ShareRequestBodyImpl implements AdditionalDataHolder, Parsable, ShareRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The endDateTime property */
    endDateTime?: Date | undefined;
    /** The notifyTeam property */
    notifyTeam?: boolean | undefined;
    /** The startDateTime property */
    startDateTime?: Date | undefined;
    /**
     * Instantiates a new shareRequestBody and sets the default values.
     * @param shareRequestBodyParameterValue 
     */
    public constructor(shareRequestBodyParameterValue?: ShareRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = shareRequestBodyParameterValue?.additionalData ? {} : shareRequestBodyParameterValue?.additionalData!
        this.endDateTime = shareRequestBodyParameterValue?.endDateTime ;
        this.notifyTeam = shareRequestBodyParameterValue?.notifyTeam ;
        this.startDateTime = shareRequestBodyParameterValue?.startDateTime ;
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
        if(this.endDateTime)
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.notifyTeam){
        if(this.notifyTeam)
        writer.writeBooleanValue("notifyTeam", this.notifyTeam);
        }
        if(this.startDateTime){
        if(this.startDateTime)
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
