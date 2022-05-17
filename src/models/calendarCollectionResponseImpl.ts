import {Calendar} from './calendar';
import {CalendarCollectionResponse} from './calendarCollectionResponse';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {CalendarImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarCollectionResponseImpl implements AdditionalDataHolder, CalendarCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: Calendar[] | undefined;
    /**
     * Instantiates a new CalendarCollectionResponse and sets the default values.
     * @param calendarCollectionResponseParameterValue 
     */
    public constructor(calendarCollectionResponseParameterValue?: CalendarCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = calendarCollectionResponseParameterValue?.additionalData ? {} : calendarCollectionResponseParameterValue?.additionalData!
        this.nextLink = calendarCollectionResponseParameterValue?.nextLink ;
        this.value = calendarCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<CalendarImpl>(createCalendarFromDiscriminatorValue); },
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
        const valueArrValue: CalendarImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new CalendarImpl(element));});
        writer.writeCollectionOfObjectValues<CalendarImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
