import {CalendarGroup} from './calendarGroup';
import {CalendarGroupCollectionResponse} from './calendarGroupCollectionResponse';
import {createCalendarGroupFromDiscriminatorValue} from './createCalendarGroupFromDiscriminatorValue';
import {CalendarGroupImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarGroupCollectionResponseImpl implements AdditionalDataHolder, CalendarGroupCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: CalendarGroup[] | undefined;
    /**
     * Instantiates a new CalendarGroupCollectionResponse and sets the default values.
     * @param calendarGroupCollectionResponseParameterValue 
     */
    public constructor(calendarGroupCollectionResponseParameterValue?: CalendarGroupCollectionResponse | undefined) {
        this.additionalData = calendarGroupCollectionResponseParameterValue?.additionalData ? calendarGroupCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = calendarGroupCollectionResponseParameterValue?.nextLink ;
        this.value = calendarGroupCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<CalendarGroupImpl>(createCalendarGroupFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: CalendarGroupImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new CalendarGroupImpl(element));});
        writer.writeCollectionOfObjectValues<CalendarGroupImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
