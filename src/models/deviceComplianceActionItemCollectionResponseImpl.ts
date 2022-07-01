import {createDeviceComplianceActionItemFromDiscriminatorValue} from './createDeviceComplianceActionItemFromDiscriminatorValue';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceActionItemCollectionResponse} from './deviceComplianceActionItemCollectionResponse';
import {DeviceComplianceActionItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceActionItemCollectionResponseImpl implements DeviceComplianceActionItemCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: DeviceComplianceActionItem[] | undefined;
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
     * Instantiates a new DeviceComplianceActionItemCollectionResponse and sets the default values.
     * @param deviceComplianceActionItemCollectionResponseParameterValue 
     */
    public constructor(deviceComplianceActionItemCollectionResponseParameterValue?: DeviceComplianceActionItemCollectionResponse | undefined) {
        this._additionalData = deviceComplianceActionItemCollectionResponseParameterValue?.additionalData ? deviceComplianceActionItemCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = deviceComplianceActionItemCollectionResponseParameterValue?.nextLink;
        this._value = deviceComplianceActionItemCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceComplianceActionItemImpl>(createDeviceComplianceActionItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceComplianceActionItemImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DeviceComplianceActionItemImpl? element as DeviceComplianceActionItemImpl:new DeviceComplianceActionItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceComplianceActionItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DeviceComplianceActionItemInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DeviceComplianceActionItem[] | undefined) {
        if(value) {
            const valueArrValue: DeviceComplianceActionItemImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DeviceComplianceActionItemImpl? element as DeviceComplianceActionItemImpl:new DeviceComplianceActionItemImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
