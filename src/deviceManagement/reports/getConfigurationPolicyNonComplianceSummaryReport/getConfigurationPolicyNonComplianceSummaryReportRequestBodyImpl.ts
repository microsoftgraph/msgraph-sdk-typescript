import {GetConfigurationPolicyNonComplianceSummaryReportRequestBody} from './getConfigurationPolicyNonComplianceSummaryReportRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getConfigurationPolicyNonComplianceSummaryReport method.  */
export class GetConfigurationPolicyNonComplianceSummaryReportRequestBodyImpl implements AdditionalDataHolder, GetConfigurationPolicyNonComplianceSummaryReportRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The filter property  */
    filter?: string | undefined;
    /** The groupBy property  */
    groupBy?: string[] | undefined;
    /** The name property  */
    name?: string | undefined;
    /** The orderBy property  */
    orderBy?: string[] | undefined;
    /** The search property  */
    search?: string | undefined;
    /** The select property  */
    select?: string[] | undefined;
    /** The sessionId property  */
    sessionId?: string | undefined;
    /** The skip property  */
    skip?: number | undefined;
    /** The top property  */
    top?: number | undefined;
    /**
     * Instantiates a new getConfigurationPolicyNonComplianceSummaryReportRequestBody and sets the default values.
     * @param getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue 
     */
    public constructor(getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?: GetConfigurationPolicyNonComplianceSummaryReportRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.additionalData ? {} : getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.additionalData!
        this.filter = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.filter ;
        this.groupBy = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.groupBy ;
        this.name = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.name ;
        this.orderBy = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.orderBy ;
        this.search = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.search ;
        this.select = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.select ;
        this.sessionId = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.sessionId ;
        this.skip = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.skip ;
        this.top = getConfigurationPolicyNonComplianceSummaryReportRequestBodyParameterValue?.top ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "filter": n => { this.filter = n.getStringValue(); },
            "groupBy": n => { this.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
            "name": n => { this.name = n.getStringValue(); },
            "orderBy": n => { this.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
            "search": n => { this.search = n.getStringValue(); },
            "select": n => { this.select = n.getCollectionOfPrimitiveValues<string>(); },
            "sessionId": n => { this.sessionId = n.getStringValue(); },
            "skip": n => { this.skip = n.getNumberValue(); },
            "top": n => { this.top = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.filter){
        if(this.filter)
        writer.writeStringValue("filter", this.filter);
        }
        if(this.groupBy){
        if(this.groupBy)
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        }
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.orderBy){
        if(this.orderBy)
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", this.orderBy);
        }
        if(this.search){
        if(this.search)
        writer.writeStringValue("search", this.search);
        }
        if(this.select){
        if(this.select)
        writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        }
        if(this.sessionId){
        if(this.sessionId)
        writer.writeStringValue("sessionId", this.sessionId);
        }
        if(this.skip){
        if(this.skip)
        writer.writeNumberValue("skip", this.skip);
        }
        if(this.top){
        if(this.top)
        writer.writeNumberValue("top", this.top);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
