import {CalendarPermission} from './calendarPermission';
import {CalendarPermissionCollectionResponse} from './calendarPermissionCollectionResponse';
import {createCalendarPermissionFromDiscriminatorValue} from './createCalendarPermissionFromDiscriminatorValue';
import {CalendarPermissionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarPermissionCollectionResponseImpl implements AdditionalDataHolder, CalendarPermissionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: CalendarPermission[] | undefined;
    /**
     * Instantiates a new CalendarPermissionCollectionResponse and sets the default values.
     * @param calendarPermissionCollectionResponseParameterValue 
     */
    public constructor(calendarPermissionCollectionResponseParameterValue?: CalendarPermissionCollectionResponse | undefined) {
        this.additionalData = calendarPermissionCollectionResponseParameterValue?.additionalData ? calendarPermissionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = calendarPermissionCollectionResponseParameterValue?.nextLink ;
        this.value = calendarPermissionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<CalendarPermissionImpl>(createCalendarPermissionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: CalendarPermissionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new CalendarPermissionImpl(element));});
        writer.writeCollectionOfObjectValues<CalendarPermissionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
