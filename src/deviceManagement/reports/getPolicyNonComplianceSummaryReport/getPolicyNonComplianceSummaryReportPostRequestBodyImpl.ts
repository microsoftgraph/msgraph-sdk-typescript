import {GetPolicyNonComplianceSummaryReportPostRequestBody} from './getPolicyNonComplianceSummaryReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPolicyNonComplianceSummaryReport method. */
export class GetPolicyNonComplianceSummaryReportPostRequestBodyImpl implements AdditionalDataHolder, GetPolicyNonComplianceSummaryReportPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The filter property */
    public filter?: string | undefined;
    /** The groupBy property */
    public groupBy?: string[] | undefined;
    /** The name property */
    public name?: string | undefined;
    /** The orderBy property */
    public orderBy?: string[] | undefined;
    /** The search property */
    public search?: string | undefined;
    /** The select property */
    public select?: string[] | undefined;
    /** The sessionId property */
    public sessionId?: string | undefined;
    /** The skip property */
    public skip?: number | undefined;
    /** The top property */
    public top?: number | undefined;
    /**
     * Instantiates a new getPolicyNonComplianceSummaryReportPostRequestBody and sets the default values.
     * @param getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue 
     */
    public constructor(getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?: GetPolicyNonComplianceSummaryReportPostRequestBody | undefined) {
        this.additionalData = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.additionalData ? getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.additionalData! : {}
        this.filter = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.filter ;
        this.groupBy = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.groupBy ;
        this.name = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.name ;
        this.orderBy = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.orderBy ;
        this.search = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.search ;
        this.select = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.select ;
        this.sessionId = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.sessionId ;
        this.skip = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.skip ;
        this.top = getPolicyNonComplianceSummaryReportPostRequestBodyParameterValue?.top ;
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
        writer.writeStringValue("filter", this.filter);
        }
        if(this.groupBy){
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.orderBy){
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", this.orderBy);
        }
        if(this.search){
        writer.writeStringValue("search", this.search);
        }
        if(this.select){
        writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        }
        if(this.sessionId){
        writer.writeStringValue("sessionId", this.sessionId);
        }
        if(this.skip){
        writer.writeNumberValue("skip", this.skip);
        }
        if(this.top){
        writer.writeNumberValue("top", this.top);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
