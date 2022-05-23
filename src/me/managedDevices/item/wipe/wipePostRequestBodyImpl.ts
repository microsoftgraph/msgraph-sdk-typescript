import {WipePostRequestBody} from './wipePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the wipe method. */
export class WipePostRequestBodyImpl implements AdditionalDataHolder, Parsable, WipePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The keepEnrollmentData property */
    public keepEnrollmentData?: boolean | undefined;
    /** The keepUserData property */
    public keepUserData?: boolean | undefined;
    /** The macOsUnlockCode property */
    public macOsUnlockCode?: string | undefined;
    /** The persistEsimDataPlan property */
    public persistEsimDataPlan?: boolean | undefined;
    /**
     * Instantiates a new wipePostRequestBody and sets the default values.
     * @param wipePostRequestBodyParameterValue 
     */
    public constructor(wipePostRequestBodyParameterValue?: WipePostRequestBody | undefined) {
        this.additionalData = wipePostRequestBodyParameterValue?.additionalData ? wipePostRequestBodyParameterValue?.additionalData! : {}
        this.keepEnrollmentData = wipePostRequestBodyParameterValue?.keepEnrollmentData ;
        this.keepUserData = wipePostRequestBodyParameterValue?.keepUserData ;
        this.macOsUnlockCode = wipePostRequestBodyParameterValue?.macOsUnlockCode ;
        this.persistEsimDataPlan = wipePostRequestBodyParameterValue?.persistEsimDataPlan ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "keepEnrollmentData": n => { this.keepEnrollmentData = n.getBooleanValue(); },
            "keepUserData": n => { this.keepUserData = n.getBooleanValue(); },
            "macOsUnlockCode": n => { this.macOsUnlockCode = n.getStringValue(); },
            "persistEsimDataPlan": n => { this.persistEsimDataPlan = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.keepEnrollmentData){
        writer.writeBooleanValue("keepEnrollmentData", this.keepEnrollmentData);
        }
        if(this.keepUserData){
        writer.writeBooleanValue("keepUserData", this.keepUserData);
        }
        if(this.macOsUnlockCode){
        writer.writeStringValue("macOsUnlockCode", this.macOsUnlockCode);
        }
        if(this.persistEsimDataPlan){
        writer.writeBooleanValue("persistEsimDataPlan", this.persistEsimDataPlan);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
