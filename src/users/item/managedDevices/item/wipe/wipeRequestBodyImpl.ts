import {WipeRequestBody} from './wipeRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the wipe method.  */
export class WipeRequestBodyImpl implements AdditionalDataHolder, Parsable, WipeRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The keepEnrollmentData property  */
    keepEnrollmentData?: boolean | undefined;
    /** The keepUserData property  */
    keepUserData?: boolean | undefined;
    /** The macOsUnlockCode property  */
    macOsUnlockCode?: string | undefined;
    /** The persistEsimDataPlan property  */
    persistEsimDataPlan?: boolean | undefined;
    /**
     * Instantiates a new wipeRequestBody and sets the default values.
     * @param wipeRequestBodyParameterValue 
     */
    public constructor(wipeRequestBodyParameterValue?: WipeRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = wipeRequestBodyParameterValue?.additionalData ? {} : wipeRequestBodyParameterValue?.additionalData!
        this.keepEnrollmentData = wipeRequestBodyParameterValue?.keepEnrollmentData ;
        this.keepUserData = wipeRequestBodyParameterValue?.keepUserData ;
        this.macOsUnlockCode = wipeRequestBodyParameterValue?.macOsUnlockCode ;
        this.persistEsimDataPlan = wipeRequestBodyParameterValue?.persistEsimDataPlan ;
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
        if(this.keepEnrollmentData)
        writer.writeBooleanValue("keepEnrollmentData", this.keepEnrollmentData);
        }
        if(this.keepUserData){
        if(this.keepUserData)
        writer.writeBooleanValue("keepUserData", this.keepUserData);
        }
        if(this.macOsUnlockCode){
        if(this.macOsUnlockCode)
        writer.writeStringValue("macOsUnlockCode", this.macOsUnlockCode);
        }
        if(this.persistEsimDataPlan){
        if(this.persistEsimDataPlan)
        writer.writeBooleanValue("persistEsimDataPlan", this.persistEsimDataPlan);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
