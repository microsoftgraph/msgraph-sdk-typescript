import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {DeviceInstallState} from './deviceInstallState';
import {DeviceInstallStateCollectionResponse} from './deviceInstallStateCollectionResponse';
import {DeviceInstallStateImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceInstallStateCollectionResponseImpl implements AdditionalDataHolder, DeviceInstallStateCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceInstallState[] | undefined;
    /**
     * Instantiates a new DeviceInstallStateCollectionResponse and sets the default values.
     * @param deviceInstallStateCollectionResponseParameterValue 
     */
    public constructor(deviceInstallStateCollectionResponseParameterValue?: DeviceInstallStateCollectionResponse | undefined) {
        this.additionalData = deviceInstallStateCollectionResponseParameterValue?.additionalData ? deviceInstallStateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceInstallStateCollectionResponseParameterValue?.nextLink ;
        this.value = deviceInstallStateCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceInstallStateImpl>(createDeviceInstallStateFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceInstallStateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceInstallStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceInstallStateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
