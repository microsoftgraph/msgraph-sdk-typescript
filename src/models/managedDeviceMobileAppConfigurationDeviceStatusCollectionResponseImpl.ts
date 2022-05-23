import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {ManagedDeviceMobileAppConfigurationDeviceStatusImpl} from './index';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse} from './managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseImpl implements AdditionalDataHolder, ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse and sets the default values.
     * @param managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?: ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined) {
        this.additionalData = managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.additionalData ? managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.nextLink ;
        this.value = managedDeviceMobileAppConfigurationDeviceStatusCollectionResponseParameterValue?.value ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedDeviceMobileAppConfigurationDeviceStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedDeviceMobileAppConfigurationDeviceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
