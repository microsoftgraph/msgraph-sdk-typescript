import {GetCompliancePolicyNonComplianceSummaryReportResponse} from './getCompliancePolicyNonComplianceSummaryReportResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getCompliancePolicyNonComplianceSummaryReport method. */
export class GetCompliancePolicyNonComplianceSummaryReportResponseImpl implements AdditionalDataHolder, GetCompliancePolicyNonComplianceSummaryReportResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The value property */
    value?: string | undefined;
    /**
     * Instantiates a new getCompliancePolicyNonComplianceSummaryReportResponse and sets the default values.
     * @param getCompliancePolicyNonComplianceSummaryReportResponseParameterValue 
     */
    public constructor(getCompliancePolicyNonComplianceSummaryReportResponseParameterValue?: GetCompliancePolicyNonComplianceSummaryReportResponse | undefined) {
        this.additionalData = {};
        this.additionalData = getCompliancePolicyNonComplianceSummaryReportResponseParameterValue?.additionalData ? {} : getCompliancePolicyNonComplianceSummaryReportResponseParameterValue?.additionalData!
        this.value = getCompliancePolicyNonComplianceSummaryReportResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        if(this.value)
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
