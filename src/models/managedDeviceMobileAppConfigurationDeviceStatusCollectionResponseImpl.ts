import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {ManagedDeviceMobileAppConfigurationDeviceStatusImpl} from './index';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse} from './managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseImpl implements ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
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
     * Instantiates a new ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse and sets the default values.
     * @param managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?: ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined) {
        this._additionalData = managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.additionalData ? managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.nextLink;
        this._value = managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatusImpl>(createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedDeviceMobileAppConfigurationDeviceStatusImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationDeviceStatusImpl? element as ManagedDeviceMobileAppConfigurationDeviceStatusImpl:new ManagedDeviceMobileAppConfigurationDeviceStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ManagedDeviceMobileAppConfigurationDeviceStatusInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined) {
        if(value) {
            const valueArrValue: ManagedDeviceMobileAppConfigurationDeviceStatusImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationDeviceStatusImpl? element as ManagedDeviceMobileAppConfigurationDeviceStatusImpl:new ManagedDeviceMobileAppConfigurationDeviceStatusImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
