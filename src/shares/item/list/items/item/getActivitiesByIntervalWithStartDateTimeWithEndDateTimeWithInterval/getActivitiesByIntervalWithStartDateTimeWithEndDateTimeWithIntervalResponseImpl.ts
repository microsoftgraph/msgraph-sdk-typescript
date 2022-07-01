import {ItemActivityStatImpl} from '../../../../../../models/';
import {createItemActivityStatFromDiscriminatorValue} from '../../../../../../models/createItemActivityStatFromDiscriminatorValue';
import {ItemActivityStat} from '../../../../../../models/itemActivityStat';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getActivitiesByInterval method. */
export class GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseImpl implements GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: ItemActivityStat[] | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse and sets the default values.
     * @param getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue 
     */
    public constructor(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined) {
        this._additionalData = getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?.additionalData ? getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?.additionalData! : {};
        this._value = getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ItemActivityStatImpl>(createItemActivityStatFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ItemActivityStatImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ItemActivityStatImpl? element:new ItemActivityStatImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ItemActivityStatImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ItemActivityStatInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ItemActivityStat[] | undefined) {
        if(value) {
            const valueArrValue: ItemActivityStatImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ItemActivityStatImpl? element:new ItemActivityStatImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
