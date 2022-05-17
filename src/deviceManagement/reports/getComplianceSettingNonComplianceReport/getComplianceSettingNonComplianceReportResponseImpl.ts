import {GetComplianceSettingNonComplianceReportResponse} from './getComplianceSettingNonComplianceReportResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getComplianceSettingNonComplianceReport method. */
export class GetComplianceSettingNonComplianceReportResponseImpl implements AdditionalDataHolder, GetComplianceSettingNonComplianceReportResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The value property */
    value?: string | undefined;
    /**
     * Instantiates a new getComplianceSettingNonComplianceReportResponse and sets the default values.
     * @param getComplianceSettingNonComplianceReportResponseParameterValue 
     */
    public constructor(getComplianceSettingNonComplianceReportResponseParameterValue?: GetComplianceSettingNonComplianceReportResponse | undefined) {
        this.additionalData = {};
        this.additionalData = getComplianceSettingNonComplianceReportResponseParameterValue?.additionalData ? {} : getComplianceSettingNonComplianceReportResponseParameterValue?.additionalData!
        this.value = getComplianceSettingNonComplianceReportResponseParameterValue?.value ;
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
