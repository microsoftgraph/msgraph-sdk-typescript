import {createDeviceEnrollmentConfigurationFromDiscriminatorValue} from './createDeviceEnrollmentConfigurationFromDiscriminatorValue';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {DeviceEnrollmentConfigurationCollectionResponse} from './deviceEnrollmentConfigurationCollectionResponse';
import {DeviceEnrollmentConfigurationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentConfigurationCollectionResponseImpl implements AdditionalDataHolder, DeviceEnrollmentConfigurationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceEnrollmentConfiguration[] | undefined;
    /**
     * Instantiates a new DeviceEnrollmentConfigurationCollectionResponse and sets the default values.
     * @param deviceEnrollmentConfigurationCollectionResponseParameterValue 
     */
    public constructor(deviceEnrollmentConfigurationCollectionResponseParameterValue?: DeviceEnrollmentConfigurationCollectionResponse | undefined) {
        this.additionalData = deviceEnrollmentConfigurationCollectionResponseParameterValue?.additionalData ? deviceEnrollmentConfigurationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceEnrollmentConfigurationCollectionResponseParameterValue?.nextLink ;
        this.value = deviceEnrollmentConfigurationCollectionResponseParameterValue?.value ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceEnrollmentConfigurationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceEnrollmentConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceEnrollmentConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
