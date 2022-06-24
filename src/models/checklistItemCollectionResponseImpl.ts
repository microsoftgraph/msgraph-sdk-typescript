import {ChecklistItem} from './checklistItem';
import {ChecklistItemCollectionResponse} from './checklistItemCollectionResponse';
import {createChecklistItemFromDiscriminatorValue} from './createChecklistItemFromDiscriminatorValue';
import {ChecklistItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChecklistItemCollectionResponseImpl implements ChecklistItemCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ChecklistItem[] | undefined;
    /**
     * Instantiates a new ChecklistItemCollectionResponse and sets the default values.
     * @param checklistItemCollectionResponseParameterValue 
     */
    public constructor(checklistItemCollectionResponseParameterValue?: ChecklistItemCollectionResponse | undefined) {
        this.additionalData = checklistItemCollectionResponseParameterValue?.additionalData ? checklistItemCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = checklistItemCollectionResponseParameterValue?.nextLink;
        const valueArrValue: ChecklistItemImpl[] = []; checklistItemCollectionResponseParameterValue.value?.forEach(element => {valueArrValue.push(element instanceof ChecklistItemImpl? element : new ChecklistItemImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ChecklistItemImpl>(createChecklistItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ChecklistItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof ChecklistItemImpl? element : new ChecklistItemImpl(element));});
            writer.writeCollectionOfObjectValues<ChecklistItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
