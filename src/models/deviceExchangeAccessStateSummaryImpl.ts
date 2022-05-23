import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Exchange Access State summary */
export class DeviceExchangeAccessStateSummaryImpl implements AdditionalDataHolder, DeviceExchangeAccessStateSummary, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Total count of devices with Exchange Access State: Allowed. */
    public allowedDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Blocked. */
    public blockedDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Quarantined. */
    public quarantinedDeviceCount?: number | undefined;
    /** Total count of devices for which no Exchange Access State could be found. */
    public unavailableDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Unknown. */
    public unknownDeviceCount?: number | undefined;
    /**
     * Instantiates a new deviceExchangeAccessStateSummary and sets the default values.
     * @param deviceExchangeAccessStateSummaryParameterValue 
     */
    public constructor(deviceExchangeAccessStateSummaryParameterValue?: DeviceExchangeAccessStateSummary | undefined) {
        this.additionalData = deviceExchangeAccessStateSummaryParameterValue?.additionalData ? deviceExchangeAccessStateSummaryParameterValue?.additionalData! : {}
        this.allowedDeviceCount = deviceExchangeAccessStateSummaryParameterValue?.allowedDeviceCount ;
        this.blockedDeviceCount = deviceExchangeAccessStateSummaryParameterValue?.blockedDeviceCount ;
        this.quarantinedDeviceCount = deviceExchangeAccessStateSummaryParameterValue?.quarantinedDeviceCount ;
        this.unavailableDeviceCount = deviceExchangeAccessStateSummaryParameterValue?.unavailableDeviceCount ;
        this.unknownDeviceCount = deviceExchangeAccessStateSummaryParameterValue?.unknownDeviceCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedDeviceCount": n => { this.allowedDeviceCount = n.getNumberValue(); },
            "blockedDeviceCount": n => { this.blockedDeviceCount = n.getNumberValue(); },
            "quarantinedDeviceCount": n => { this.quarantinedDeviceCount = n.getNumberValue(); },
            "unavailableDeviceCount": n => { this.unavailableDeviceCount = n.getNumberValue(); },
            "unknownDeviceCount": n => { this.unknownDeviceCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedDeviceCount){
        writer.writeNumberValue("allowedDeviceCount", this.allowedDeviceCount);
        }
        if(this.blockedDeviceCount){
        writer.writeNumberValue("blockedDeviceCount", this.blockedDeviceCount);
        }
        if(this.quarantinedDeviceCount){
        writer.writeNumberValue("quarantinedDeviceCount", this.quarantinedDeviceCount);
        }
        if(this.unavailableDeviceCount){
        writer.writeNumberValue("unavailableDeviceCount", this.unavailableDeviceCount);
        }
        if(this.unknownDeviceCount){
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
