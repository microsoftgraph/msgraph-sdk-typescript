import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningStatusErrorCategory} from './provisioningStatusErrorCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningErrorInfoImpl implements AdditionalDataHolder, Parsable, ProvisioningErrorInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** Additional details in case of error.  */
    additionalDetails?: string | undefined;
    /** Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue  */
    errorCategory?: ProvisioningStatusErrorCategory | undefined;
    /** Unique error code if any occurred. Learn more  */
    errorCode?: string | undefined;
    /** Summarizes the status and describes why the status happened.  */
    reason?: string | undefined;
    /** Provides the resolution for the corresponding error.  */
    recommendedAction?: string | undefined;
    /**
     * Instantiates a new provisioningErrorInfo and sets the default values.
     * @param provisioningErrorInfoParameterValue 
     */
    public constructor(provisioningErrorInfoParameterValue?: ProvisioningErrorInfo | undefined) {
        this.additionalData = {};
        this.additionalData = provisioningErrorInfoParameterValue?.additionalData ? {} : provisioningErrorInfoParameterValue?.additionalData!
        this.additionalDetails = provisioningErrorInfoParameterValue?.additionalDetails ;
        this.errorCategory = provisioningErrorInfoParameterValue?.errorCategory ;
        this.errorCode = provisioningErrorInfoParameterValue?.errorCode ;
        this.reason = provisioningErrorInfoParameterValue?.reason ;
        this.recommendedAction = provisioningErrorInfoParameterValue?.recommendedAction ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additionalDetails": n => { this.additionalDetails = n.getStringValue(); },
            "errorCategory": n => { this.errorCategory = n.getEnumValue<ProvisioningStatusErrorCategory>(ProvisioningStatusErrorCategory); },
            "errorCode": n => { this.errorCode = n.getStringValue(); },
            "reason": n => { this.reason = n.getStringValue(); },
            "recommendedAction": n => { this.recommendedAction = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.additionalDetails){
        if(this.additionalDetails)
        writer.writeStringValue("additionalDetails", this.additionalDetails);
        }
        if(this.errorCategory){
        if(this.errorCategory)
        writer.writeEnumValue<ProvisioningStatusErrorCategory>("errorCategory", this.errorCategory);
        }
        if(this.errorCode){
        if(this.errorCode)
        writer.writeStringValue("errorCode", this.errorCode);
        }
        if(this.reason){
        if(this.reason)
        writer.writeStringValue("reason", this.reason);
        }
        if(this.recommendedAction){
        if(this.recommendedAction)
        writer.writeStringValue("recommendedAction", this.recommendedAction);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
