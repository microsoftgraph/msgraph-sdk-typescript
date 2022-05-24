import {createDeviceManagementPartnerFromDiscriminatorValue} from './createDeviceManagementPartnerFromDiscriminatorValue';
import {DeviceManagementPartner} from './deviceManagementPartner';
import {DeviceManagementPartnerCollectionResponse} from './deviceManagementPartnerCollectionResponse';
import {DeviceManagementPartnerImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementPartnerCollectionResponseImpl implements AdditionalDataHolder, DeviceManagementPartnerCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceManagementPartner[] | undefined;
    /**
     * Instantiates a new DeviceManagementPartnerCollectionResponse and sets the default values.
     * @param deviceManagementPartnerCollectionResponseParameterValue 
     */
    public constructor(deviceManagementPartnerCollectionResponseParameterValue?: DeviceManagementPartnerCollectionResponse | undefined) {
        this.additionalData = deviceManagementPartnerCollectionResponseParameterValue?.additionalData ? deviceManagementPartnerCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceManagementPartnerCollectionResponseParameterValue?.nextLink ;
        this.value = deviceManagementPartnerCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceManagementPartnerImpl>(createDeviceManagementPartnerFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceManagementPartnerImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceManagementPartnerImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceManagementPartnerImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
