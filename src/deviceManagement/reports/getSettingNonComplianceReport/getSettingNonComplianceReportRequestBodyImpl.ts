import {GetSettingNonComplianceReportRequestBody} from './getSettingNonComplianceReportRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getSettingNonComplianceReport method.  */
export class GetSettingNonComplianceReportRequestBodyImpl implements AdditionalDataHolder, GetSettingNonComplianceReportRequestBody, Parsable {
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
     * Instantiates a new getSettingNonComplianceReportRequestBody and sets the default values.
     * @param getSettingNonComplianceReportRequestBodyParameterValue 
     */
    public constructor(getSettingNonComplianceReportRequestBodyParameterValue?: GetSettingNonComplianceReportRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getSettingNonComplianceReportRequestBodyParameterValue?.additionalData ? {} : getSettingNonComplianceReportRequestBodyParameterValue?.additionalData!
        this.filter = getSettingNonComplianceReportRequestBodyParameterValue?.filter ;
        this.groupBy = getSettingNonComplianceReportRequestBodyParameterValue?.groupBy ;
        this.name = getSettingNonComplianceReportRequestBodyParameterValue?.name ;
        this.orderBy = getSettingNonComplianceReportRequestBodyParameterValue?.orderBy ;
        this.search = getSettingNonComplianceReportRequestBodyParameterValue?.search ;
        this.select = getSettingNonComplianceReportRequestBodyParameterValue?.select ;
        this.sessionId = getSettingNonComplianceReportRequestBodyParameterValue?.sessionId ;
        this.skip = getSettingNonComplianceReportRequestBodyParameterValue?.skip ;
        this.top = getSettingNonComplianceReportRequestBodyParameterValue?.top ;
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
