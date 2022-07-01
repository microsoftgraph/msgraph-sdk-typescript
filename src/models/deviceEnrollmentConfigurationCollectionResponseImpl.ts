import {createDeviceEnrollmentConfigurationFromDiscriminatorValue} from './createDeviceEnrollmentConfigurationFromDiscriminatorValue';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceEnrollmentConfigurationCollectionResponse} from './deviceEnrollmentConfigurationCollectionResponse';
import {DeviceEnrollmentConfigurationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentConfigurationCollectionResponseImpl implements DeviceEnrollmentConfigurationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: DeviceEnrollmentConfiguration[] | undefined;
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
     * Instantiates a new DeviceEnrollmentConfigurationCollectionResponse and sets the default values.
     * @param deviceEnrollmentConfigurationCollectionResponseParameterValue 
     */
    public constructor(deviceEnrollmentConfigurationCollectionResponseParameterValue?: DeviceEnrollmentConfigurationCollectionResponse | undefined) {
        this._additionalData = deviceEnrollmentConfigurationCollectionResponseParameterValue?.additionalData ? deviceEnrollmentConfigurationCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = deviceEnrollmentConfigurationCollectionResponseParameterValue?.nextLink;
        this._value = deviceEnrollmentConfigurationCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceEnrollmentConfigurationImpl>(createDeviceEnrollmentConfigurationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceEnrollmentConfigurationImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DeviceEnrollmentConfigurationImpl? element:new DeviceEnrollmentConfigurationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceEnrollmentConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DeviceEnrollmentConfigurationInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DeviceEnrollmentConfiguration[] | undefined) {
        if(value) {
            const valueArrValue: DeviceEnrollmentConfigurationImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DeviceEnrollmentConfigurationImpl? element:new DeviceEnrollmentConfigurationImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
