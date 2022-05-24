import {createRiskyUserHistoryItemFromDiscriminatorValue} from './createRiskyUserHistoryItemFromDiscriminatorValue';
import {RiskyUserHistoryItemImpl} from './index';
import {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {RiskyUserHistoryItemCollectionResponse} from './riskyUserHistoryItemCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskyUserHistoryItemCollectionResponseImpl implements AdditionalDataHolder, Parsable, RiskyUserHistoryItemCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: RiskyUserHistoryItem[] | undefined;
    /**
     * Instantiates a new RiskyUserHistoryItemCollectionResponse and sets the default values.
     * @param riskyUserHistoryItemCollectionResponseParameterValue 
     */
    public constructor(riskyUserHistoryItemCollectionResponseParameterValue?: RiskyUserHistoryItemCollectionResponse | undefined) {
        this.additionalData = riskyUserHistoryItemCollectionResponseParameterValue?.additionalData ? riskyUserHistoryItemCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = riskyUserHistoryItemCollectionResponseParameterValue?.nextLink ;
        this.value = riskyUserHistoryItemCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RiskyUserHistoryItemImpl>(createRiskyUserHistoryItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: RiskyUserHistoryItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RiskyUserHistoryItemImpl(element));});
        writer.writeCollectionOfObjectValues<RiskyUserHistoryItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
