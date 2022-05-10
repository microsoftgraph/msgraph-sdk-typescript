import {GetCachedReportRequestBody} from './getCachedReportRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getCachedReport method.  */
export class GetCachedReportRequestBodyImpl implements AdditionalDataHolder, GetCachedReportRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The groupBy property  */
    groupBy?: string[] | undefined;
    /** The id property  */
    id?: string | undefined;
    /** The orderBy property  */
    orderBy?: string[] | undefined;
    /** The search property  */
    search?: string | undefined;
    /** The select property  */
    select?: string[] | undefined;
    /** The skip property  */
    skip?: number | undefined;
    /** The top property  */
    top?: number | undefined;
    /**
     * Instantiates a new getCachedReportRequestBody and sets the default values.
     * @param getCachedReportRequestBodyParameterValue 
     */
    public constructor(getCachedReportRequestBodyParameterValue?: GetCachedReportRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getCachedReportRequestBodyParameterValue?.additionalData ? {} : getCachedReportRequestBodyParameterValue?.additionalData!
        this.groupBy = getCachedReportRequestBodyParameterValue?.groupBy ;
        this.id = getCachedReportRequestBodyParameterValue?.id ;
        this.orderBy = getCachedReportRequestBodyParameterValue?.orderBy ;
        this.search = getCachedReportRequestBodyParameterValue?.search ;
        this.select = getCachedReportRequestBodyParameterValue?.select ;
        this.skip = getCachedReportRequestBodyParameterValue?.skip ;
        this.top = getCachedReportRequestBodyParameterValue?.top ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupBy": n => { this.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
            "id": n => { this.id = n.getStringValue(); },
            "orderBy": n => { this.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
            "search": n => { this.search = n.getStringValue(); },
            "select": n => { this.select = n.getCollectionOfPrimitiveValues<string>(); },
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
        if(this.groupBy){
        if(this.groupBy)
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        }
        if(this.id){
        if(this.id)
        writer.writeStringValue("id", this.id);
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
