import {SearchResult} from './searchResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchResultImpl implements AdditionalDataHolder, Parsable, SearchResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A callback URL that can be used to record telemetry information. The application should issue a GET on this URL if the user interacts with this item to improve the quality of results. */
    public onClickTelemetryUrl?: string | undefined;
    /**
     * Instantiates a new searchResult and sets the default values.
     * @param searchResultParameterValue 
     */
    public constructor(searchResultParameterValue?: SearchResult | undefined) {
        this.additionalData = searchResultParameterValue?.additionalData ? searchResultParameterValue?.additionalData! : {}
        this.onClickTelemetryUrl = searchResultParameterValue?.onClickTelemetryUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "onClickTelemetryUrl": n => { this.onClickTelemetryUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.onClickTelemetryUrl){
        writer.writeStringValue("onClickTelemetryUrl", this.onClickTelemetryUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
