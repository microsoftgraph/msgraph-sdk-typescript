import {createTimeOffRequestFromDiscriminatorValue} from './createTimeOffRequestFromDiscriminatorValue';
import {TimeOffRequestImpl} from './index';
import {TimeOffRequest} from './timeOffRequest';
import {TimeOffRequestCollectionResponse} from './timeOffRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffRequestCollectionResponseImpl implements TimeOffRequestCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: TimeOffRequest[] | undefined;
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
     * Instantiates a new TimeOffRequestCollectionResponse and sets the default values.
     * @param timeOffRequestCollectionResponseParameterValue 
     */
    public constructor(timeOffRequestCollectionResponseParameterValue?: TimeOffRequestCollectionResponse | undefined) {
        this._additionalData = timeOffRequestCollectionResponseParameterValue?.additionalData ? timeOffRequestCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = timeOffRequestCollectionResponseParameterValue?.nextLink;
        this._value = timeOffRequestCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TimeOffRequestImpl>(createTimeOffRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TimeOffRequestImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof TimeOffRequestImpl? element as TimeOffRequestImpl:new TimeOffRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TimeOffRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a TimeOffRequestInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: TimeOffRequest[] | undefined) {
        if(value) {
            const valueArrValue: TimeOffRequestImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof TimeOffRequestImpl? element as TimeOffRequestImpl:new TimeOffRequestImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
