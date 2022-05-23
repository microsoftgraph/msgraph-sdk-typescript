import {createDeviceComplianceActionItemFromDiscriminatorValue} from './createDeviceComplianceActionItemFromDiscriminatorValue';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceActionItemCollectionResponse} from './deviceComplianceActionItemCollectionResponse';
import {DeviceComplianceActionItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceActionItemCollectionResponseImpl implements AdditionalDataHolder, DeviceComplianceActionItemCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceComplianceActionItem[] | undefined;
    /**
     * Instantiates a new DeviceComplianceActionItemCollectionResponse and sets the default values.
     * @param deviceComplianceActionItemCollectionResponseParameterValue 
     */
    public constructor(deviceComplianceActionItemCollectionResponseParameterValue?: DeviceComplianceActionItemCollectionResponse | undefined) {
        this.additionalData = deviceComplianceActionItemCollectionResponseParameterValue?.additionalData ? deviceComplianceActionItemCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceComplianceActionItemCollectionResponseParameterValue?.nextLink ;
        this.value = deviceComplianceActionItemCollectionResponseParameterValue?.value ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceComplianceActionItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceComplianceActionItemImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceActionItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
