import {ActivityHistoryItem} from './activityHistoryItem';
import {ActivityHistoryItemCollectionResponse} from './activityHistoryItemCollectionResponse';
import {createActivityHistoryItemFromDiscriminatorValue} from './createActivityHistoryItemFromDiscriminatorValue';
import {ActivityHistoryItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ActivityHistoryItemCollectionResponseImpl implements ActivityHistoryItemCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: ActivityHistoryItem[] | undefined;
    /**
     * Instantiates a new ActivityHistoryItemCollectionResponse and sets the default values.
     * @param activityHistoryItemCollectionResponseParameterValue 
     */
    public constructor(activityHistoryItemCollectionResponseParameterValue?: ActivityHistoryItemCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = activityHistoryItemCollectionResponseParameterValue?.additionalData ? {} : activityHistoryItemCollectionResponseParameterValue?.additionalData!
        this.nextLink = activityHistoryItemCollectionResponseParameterValue?.nextLink ;
        this.value = activityHistoryItemCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ActivityHistoryItemImpl>(createActivityHistoryItemFromDiscriminatorValue); },
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
        const valueArrValue: ActivityHistoryItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ActivityHistoryItemImpl(element));});
        writer.writeCollectionOfObjectValues<ActivityHistoryItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
