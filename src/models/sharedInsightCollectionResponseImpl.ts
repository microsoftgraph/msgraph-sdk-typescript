import {createSharedInsightFromDiscriminatorValue} from './createSharedInsightFromDiscriminatorValue';
import {SharedInsightImpl} from './index';
import {SharedInsight} from './sharedInsight';
import {SharedInsightCollectionResponse} from './sharedInsightCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedInsightCollectionResponseImpl implements AdditionalDataHolder, Parsable, SharedInsightCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: SharedInsight[] | undefined;
    /**
     * Instantiates a new SharedInsightCollectionResponse and sets the default values.
     * @param sharedInsightCollectionResponseParameterValue 
     */
    public constructor(sharedInsightCollectionResponseParameterValue?: SharedInsightCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = sharedInsightCollectionResponseParameterValue?.additionalData ? {} : sharedInsightCollectionResponseParameterValue?.additionalData!
        this.nextLink = sharedInsightCollectionResponseParameterValue?.nextLink ;
        this.value = sharedInsightCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SharedInsightImpl>(createSharedInsightFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: SharedInsightImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SharedInsightImpl(element));});
        writer.writeCollectionOfObjectValues<SharedInsightImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
