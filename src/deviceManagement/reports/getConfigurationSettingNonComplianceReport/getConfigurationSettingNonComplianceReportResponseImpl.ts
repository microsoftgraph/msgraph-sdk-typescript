import {GetConfigurationSettingNonComplianceReportResponse} from './getConfigurationSettingNonComplianceReportResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getConfigurationSettingNonComplianceReport method. */
export class GetConfigurationSettingNonComplianceReportResponseImpl implements AdditionalDataHolder, GetConfigurationSettingNonComplianceReportResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The value property */
    value?: string | undefined;
    /**
     * Instantiates a new getConfigurationSettingNonComplianceReportResponse and sets the default values.
     * @param getConfigurationSettingNonComplianceReportResponseParameterValue 
     */
    public constructor(getConfigurationSettingNonComplianceReportResponseParameterValue?: GetConfigurationSettingNonComplianceReportResponse | undefined) {
        this.additionalData = {};
        this.additionalData = getConfigurationSettingNonComplianceReportResponseParameterValue?.additionalData ? {} : getConfigurationSettingNonComplianceReportResponseParameterValue?.additionalData!
        this.value = getConfigurationSettingNonComplianceReportResponseParameterValue?.value ;
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
