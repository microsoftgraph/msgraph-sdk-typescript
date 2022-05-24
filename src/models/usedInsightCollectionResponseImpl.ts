import {createUsedInsightFromDiscriminatorValue} from './createUsedInsightFromDiscriminatorValue';
import {UsedInsightImpl} from './index';
import {UsedInsight} from './usedInsight';
import {UsedInsightCollectionResponse} from './usedInsightCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UsedInsightCollectionResponseImpl implements AdditionalDataHolder, Parsable, UsedInsightCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UsedInsight[] | undefined;
    /**
     * Instantiates a new UsedInsightCollectionResponse and sets the default values.
     * @param usedInsightCollectionResponseParameterValue 
     */
    public constructor(usedInsightCollectionResponseParameterValue?: UsedInsightCollectionResponse | undefined) {
        this.additionalData = usedInsightCollectionResponseParameterValue?.additionalData ? usedInsightCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = usedInsightCollectionResponseParameterValue?.nextLink ;
        this.value = usedInsightCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UsedInsightImpl>(createUsedInsightFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: UsedInsightImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UsedInsightImpl(element));});
        writer.writeCollectionOfObjectValues<UsedInsightImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
