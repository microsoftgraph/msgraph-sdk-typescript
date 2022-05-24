import {createDeviceManagementExportJobFromDiscriminatorValue} from './createDeviceManagementExportJobFromDiscriminatorValue';
import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementExportJobCollectionResponse} from './deviceManagementExportJobCollectionResponse';
import {DeviceManagementExportJobImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementExportJobCollectionResponseImpl implements AdditionalDataHolder, DeviceManagementExportJobCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceManagementExportJob[] | undefined;
    /**
     * Instantiates a new DeviceManagementExportJobCollectionResponse and sets the default values.
     * @param deviceManagementExportJobCollectionResponseParameterValue 
     */
    public constructor(deviceManagementExportJobCollectionResponseParameterValue?: DeviceManagementExportJobCollectionResponse | undefined) {
        this.additionalData = deviceManagementExportJobCollectionResponseParameterValue?.additionalData ? deviceManagementExportJobCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceManagementExportJobCollectionResponseParameterValue?.nextLink ;
        this.value = deviceManagementExportJobCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceManagementExportJobImpl>(createDeviceManagementExportJobFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceManagementExportJobImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceManagementExportJobImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceManagementExportJobImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
