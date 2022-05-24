import {createDeviceManagementTroubleshootingEventFromDiscriminatorValue} from './createDeviceManagementTroubleshootingEventFromDiscriminatorValue';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {DeviceManagementTroubleshootingEventCollectionResponse} from './deviceManagementTroubleshootingEventCollectionResponse';
import {DeviceManagementTroubleshootingEventImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementTroubleshootingEventCollectionResponseImpl implements AdditionalDataHolder, DeviceManagementTroubleshootingEventCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceManagementTroubleshootingEvent[] | undefined;
    /**
     * Instantiates a new DeviceManagementTroubleshootingEventCollectionResponse and sets the default values.
     * @param deviceManagementTroubleshootingEventCollectionResponseParameterValue 
     */
    public constructor(deviceManagementTroubleshootingEventCollectionResponseParameterValue?: DeviceManagementTroubleshootingEventCollectionResponse | undefined) {
        this.additionalData = deviceManagementTroubleshootingEventCollectionResponseParameterValue?.additionalData ? deviceManagementTroubleshootingEventCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceManagementTroubleshootingEventCollectionResponseParameterValue?.nextLink ;
        this.value = deviceManagementTroubleshootingEventCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingEventImpl>(createDeviceManagementTroubleshootingEventFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceManagementTroubleshootingEventImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceManagementTroubleshootingEventImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEventImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
