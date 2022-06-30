import {CalendarPermission} from './calendarPermission';
import {CalendarPermissionCollectionResponse} from './calendarPermissionCollectionResponse';
import {createCalendarPermissionFromDiscriminatorValue} from './createCalendarPermissionFromDiscriminatorValue';
import {CalendarPermissionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarPermissionCollectionResponseImpl implements CalendarPermissionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: CalendarPermission[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new CalendarPermissionCollectionResponse and sets the default values.
     * @param calendarPermissionCollectionResponseParameterValue 
     */
    public constructor(calendarPermissionCollectionResponseParameterValue?: CalendarPermissionCollectionResponse | undefined) {
        this._additionalData = calendarPermissionCollectionResponseParameterValue?.additionalData ? calendarPermissionCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = calendarPermissionCollectionResponseParameterValue?.nextLink;
        this._value = calendarPermissionCollectionResponseParameterValue?.value;
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
     * Gets the @odata.nextLink property value. The nextLink property
     * @returns a string
     */
    public get nextLink() {
        return this._nextLink;
    };
    /**
     * Sets the @odata.nextLink property value. The nextLink property
     * @param value Value to set for the nextLink property.
     */
    public set nextLink(value: string | undefined) {
        if(value) {
            this._nextLink = value;
        }
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
        if(this.value && this.value.length != 0){        const valueArrValue: CalendarPermissionImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof CalendarPermissionImpl? element:new CalendarPermissionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CalendarPermissionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a CalendarPermissionInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: CalendarPermission[] | undefined) {
        if(value) {
            const valueArrValue: CalendarPermissionImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof CalendarPermissionImpl? element:new CalendarPermissionImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
