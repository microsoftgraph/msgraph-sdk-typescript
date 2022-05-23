import {SearchBucket} from './searchBucket';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchBucketImpl implements AdditionalDataHolder, Parsable, SearchBucket {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A token containing the encoded filter to aggregate search matches by the specific key value. To use the filter, pass the token as part of the aggregationFilter property in a searchRequest object, in the format '{field}:/'{aggregationFilterToken}/''. See an example. */
    public aggregationFilterToken?: string | undefined;
    /** The approximate number of search matches that share the same value specified in the key property. Note that this number is not the exact number of matches. */
    public count?: number | undefined;
    /** The discrete value of the field that an aggregation was computed on. */
    public key?: string | undefined;
    /**
     * Instantiates a new searchBucket and sets the default values.
     * @param searchBucketParameterValue 
     */
    public constructor(searchBucketParameterValue?: SearchBucket | undefined) {
        this.additionalData = searchBucketParameterValue?.additionalData ? searchBucketParameterValue?.additionalData! : {}
        this.aggregationFilterToken = searchBucketParameterValue?.aggregationFilterToken ;
        this.count = searchBucketParameterValue?.count ;
        this.key = searchBucketParameterValue?.key ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aggregationFilterToken": n => { this.aggregationFilterToken = n.getStringValue(); },
            "count": n => { this.count = n.getNumberValue(); },
            "key": n => { this.key = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.aggregationFilterToken){
        writer.writeStringValue("aggregationFilterToken", this.aggregationFilterToken);
        }
        if(this.count){
        writer.writeNumberValue("count", this.count);
        }
        if(this.key){
        writer.writeStringValue("key", this.key);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
