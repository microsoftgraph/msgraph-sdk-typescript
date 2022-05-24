import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {Event} from './event';
import {EventCollectionResponse} from './eventCollectionResponse';
import {EventImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventCollectionResponseImpl implements AdditionalDataHolder, EventCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Event[] | undefined;
    /**
     * Instantiates a new EventCollectionResponse and sets the default values.
     * @param eventCollectionResponseParameterValue 
     */
    public constructor(eventCollectionResponseParameterValue?: EventCollectionResponse | undefined) {
        this.additionalData = eventCollectionResponseParameterValue?.additionalData ? eventCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = eventCollectionResponseParameterValue?.nextLink ;
        this.value = eventCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EventImpl>(createEventFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EventImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EventImpl(element));});
        writer.writeCollectionOfObjectValues<EventImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
