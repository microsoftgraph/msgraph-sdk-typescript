import {createDeviceComplianceDeviceStatusFromDiscriminatorValue} from './createDeviceComplianceDeviceStatusFromDiscriminatorValue';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {DeviceComplianceDeviceStatusCollectionResponse} from './deviceComplianceDeviceStatusCollectionResponse';
import {DeviceComplianceDeviceStatusImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceDeviceStatusCollectionResponseImpl implements AdditionalDataHolder, DeviceComplianceDeviceStatusCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceComplianceDeviceStatus[] | undefined;
    /**
     * Instantiates a new DeviceComplianceDeviceStatusCollectionResponse and sets the default values.
     * @param deviceComplianceDeviceStatusCollectionResponseParameterValue 
     */
    public constructor(deviceComplianceDeviceStatusCollectionResponseParameterValue?: DeviceComplianceDeviceStatusCollectionResponse | undefined) {
        this.additionalData = deviceComplianceDeviceStatusCollectionResponseParameterValue?.additionalData ? deviceComplianceDeviceStatusCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceComplianceDeviceStatusCollectionResponseParameterValue?.nextLink ;
        this.value = deviceComplianceDeviceStatusCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceComplianceDeviceStatusImpl>(createDeviceComplianceDeviceStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceComplianceDeviceStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceComplianceDeviceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceDeviceStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
