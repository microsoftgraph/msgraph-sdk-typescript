import {createDeviceManagementExchangeConnectorFromDiscriminatorValue} from './createDeviceManagementExchangeConnectorFromDiscriminatorValue';
import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {DeviceManagementExchangeConnectorCollectionResponse} from './deviceManagementExchangeConnectorCollectionResponse';
import {DeviceManagementExchangeConnectorImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementExchangeConnectorCollectionResponseImpl implements AdditionalDataHolder, DeviceManagementExchangeConnectorCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceManagementExchangeConnector[] | undefined;
    /**
     * Instantiates a new DeviceManagementExchangeConnectorCollectionResponse and sets the default values.
     * @param deviceManagementExchangeConnectorCollectionResponseParameterValue 
     */
    public constructor(deviceManagementExchangeConnectorCollectionResponseParameterValue?: DeviceManagementExchangeConnectorCollectionResponse | undefined) {
        this.additionalData = deviceManagementExchangeConnectorCollectionResponseParameterValue?.additionalData ? deviceManagementExchangeConnectorCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceManagementExchangeConnectorCollectionResponseParameterValue?.nextLink ;
        this.value = deviceManagementExchangeConnectorCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceManagementExchangeConnectorImpl>(createDeviceManagementExchangeConnectorFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceManagementExchangeConnectorImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceManagementExchangeConnectorImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceManagementExchangeConnectorImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
