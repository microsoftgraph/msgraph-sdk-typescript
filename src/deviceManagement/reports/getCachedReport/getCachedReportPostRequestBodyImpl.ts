import {GetCachedReportPostRequestBody} from './getCachedReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getCachedReport method. */
export class GetCachedReportPostRequestBodyImpl implements AdditionalDataHolder, GetCachedReportPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The groupBy property */
    public groupBy?: string[] | undefined;
    /** The id property */
    public id?: string | undefined;
    /** The orderBy property */
    public orderBy?: string[] | undefined;
    /** The search property */
    public search?: string | undefined;
    /** The select property */
    public select?: string[] | undefined;
    /** The skip property */
    public skip?: number | undefined;
    /** The top property */
    public top?: number | undefined;
    /**
     * Instantiates a new getCachedReportPostRequestBody and sets the default values.
     * @param getCachedReportPostRequestBodyParameterValue 
     */
    public constructor(getCachedReportPostRequestBodyParameterValue?: GetCachedReportPostRequestBody | undefined) {
        this.additionalData = getCachedReportPostRequestBodyParameterValue?.additionalData ? getCachedReportPostRequestBodyParameterValue?.additionalData! : {}
        this.groupBy = getCachedReportPostRequestBodyParameterValue?.groupBy ;
        this.id = getCachedReportPostRequestBodyParameterValue?.id ;
        this.orderBy = getCachedReportPostRequestBodyParameterValue?.orderBy ;
        this.search = getCachedReportPostRequestBodyParameterValue?.search ;
        this.select = getCachedReportPostRequestBodyParameterValue?.select ;
        this.skip = getCachedReportPostRequestBodyParameterValue?.skip ;
        this.top = getCachedReportPostRequestBodyParameterValue?.top ;
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
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", this.groupBy);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
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
        if(this.skip){
        writer.writeNumberValue("skip", this.skip);
        }
        if(this.top){
        writer.writeNumberValue("top", this.top);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
