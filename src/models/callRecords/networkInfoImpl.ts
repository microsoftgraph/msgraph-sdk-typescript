import {NetworkConnectionType} from './networkConnectionType';
import {NetworkInfo} from './networkInfo';
import {WifiBand} from './wifiBand';
import {WifiRadioType} from './wifiRadioType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NetworkInfoImpl implements AdditionalDataHolder, NetworkInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Fraction of the call that the media endpoint detected the available bandwidth or bandwidth policy was low enough to cause poor quality of the audio sent. */
    public bandwidthLowEventRatio?: number | undefined;
    /** The wireless LAN basic service set identifier of the media endpoint used to connect to the network. */
    public basicServiceSetIdentifier?: string | undefined;
    /** Type of network used by the media endpoint. Possible values are: unknown, wired, wifi, mobile, tunnel, unknownFutureValue. */
    public connectionType?: NetworkConnectionType | undefined;
    /** Fraction of the call that the media endpoint detected the network delay was significant enough to impact the ability to have real-time two-way communication. */
    public delayEventRatio?: number | undefined;
    /** DNS suffix associated with the network adapter of the media endpoint. */
    public dnsSuffix?: string | undefined;
    /** IP address of the media endpoint. */
    public ipAddress?: string | undefined;
    /** Link speed in bits per second reported by the network adapter used by the media endpoint. */
    public linkSpeed?: number | undefined;
    /** The media access control (MAC) address of the media endpoint's network device. */
    public macAddress?: string | undefined;
    /** Network port number used by media endpoint. */
    public port?: number | undefined;
    /** Fraction of the call that the media endpoint detected the network was causing poor quality of the audio received. */
    public receivedQualityEventRatio?: number | undefined;
    /** IP address of the media endpoint as seen by the media relay server. This is typically the public internet IP address associated to the endpoint. */
    public reflexiveIPAddress?: string | undefined;
    /** IP address of the media relay server allocated by the media endpoint. */
    public relayIPAddress?: string | undefined;
    /** Network port number allocated on the media relay server by the media endpoint. */
    public relayPort?: number | undefined;
    /** Fraction of the call that the media endpoint detected the network was causing poor quality of the audio sent. */
    public sentQualityEventRatio?: number | undefined;
    /** Subnet used for media stream by the media endpoint. */
    public subnet?: string | undefined;
    /** WiFi band used by the media endpoint. Possible values are: unknown, frequency24GHz, frequency50GHz, frequency60GHz, unknownFutureValue. */
    public wifiBand?: WifiBand | undefined;
    /** Estimated remaining battery charge in percentage reported by the media endpoint. */
    public wifiBatteryCharge?: number | undefined;
    /** WiFi channel used by the media endpoint. */
    public wifiChannel?: number | undefined;
    /** Name of the Microsoft WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint. */
    public wifiMicrosoftDriver?: string | undefined;
    /** Version of the Microsoft WiFi driver used by the media endpoint. */
    public wifiMicrosoftDriverVersion?: string | undefined;
    /** Type of WiFi radio used by the media endpoint. Possible values are: unknown, wifi80211a, wifi80211b, wifi80211g, wifi80211n, wifi80211ac, wifi80211ax, unknownFutureValue. */
    public wifiRadioType?: WifiRadioType | undefined;
    /** WiFi signal strength in percentage reported by the media endpoint. */
    public wifiSignalStrength?: number | undefined;
    /** Name of the WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint. */
    public wifiVendorDriver?: string | undefined;
    /** Version of the WiFi driver used by the media endpoint. */
    public wifiVendorDriverVersion?: string | undefined;
    /**
     * Instantiates a new networkInfo and sets the default values.
     * @param networkInfoParameterValue 
     */
    public constructor(networkInfoParameterValue?: NetworkInfo | undefined) {
        this.additionalData = networkInfoParameterValue?.additionalData ? networkInfoParameterValue?.additionalData! : {}
        this.bandwidthLowEventRatio = networkInfoParameterValue?.bandwidthLowEventRatio ;
        this.basicServiceSetIdentifier = networkInfoParameterValue?.basicServiceSetIdentifier ;
        this.connectionType = networkInfoParameterValue?.connectionType ;
        this.delayEventRatio = networkInfoParameterValue?.delayEventRatio ;
        this.dnsSuffix = networkInfoParameterValue?.dnsSuffix ;
        this.ipAddress = networkInfoParameterValue?.ipAddress ;
        this.linkSpeed = networkInfoParameterValue?.linkSpeed ;
        this.macAddress = networkInfoParameterValue?.macAddress ;
        this.port = networkInfoParameterValue?.port ;
        this.receivedQualityEventRatio = networkInfoParameterValue?.receivedQualityEventRatio ;
        this.reflexiveIPAddress = networkInfoParameterValue?.reflexiveIPAddress ;
        this.relayIPAddress = networkInfoParameterValue?.relayIPAddress ;
        this.relayPort = networkInfoParameterValue?.relayPort ;
        this.sentQualityEventRatio = networkInfoParameterValue?.sentQualityEventRatio ;
        this.subnet = networkInfoParameterValue?.subnet ;
        this.wifiBand = networkInfoParameterValue?.wifiBand ;
        this.wifiBatteryCharge = networkInfoParameterValue?.wifiBatteryCharge ;
        this.wifiChannel = networkInfoParameterValue?.wifiChannel ;
        this.wifiMicrosoftDriver = networkInfoParameterValue?.wifiMicrosoftDriver ;
        this.wifiMicrosoftDriverVersion = networkInfoParameterValue?.wifiMicrosoftDriverVersion ;
        this.wifiRadioType = networkInfoParameterValue?.wifiRadioType ;
        this.wifiSignalStrength = networkInfoParameterValue?.wifiSignalStrength ;
        this.wifiVendorDriver = networkInfoParameterValue?.wifiVendorDriver ;
        this.wifiVendorDriverVersion = networkInfoParameterValue?.wifiVendorDriverVersion ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bandwidthLowEventRatio": n => { this.bandwidthLowEventRatio = n.getNumberValue(); },
            "basicServiceSetIdentifier": n => { this.basicServiceSetIdentifier = n.getStringValue(); },
            "connectionType": n => { this.connectionType = n.getEnumValue<NetworkConnectionType>(NetworkConnectionType); },
            "delayEventRatio": n => { this.delayEventRatio = n.getNumberValue(); },
            "dnsSuffix": n => { this.dnsSuffix = n.getStringValue(); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "linkSpeed": n => { this.linkSpeed = n.getNumberValue(); },
            "macAddress": n => { this.macAddress = n.getStringValue(); },
            "port": n => { this.port = n.getNumberValue(); },
            "receivedQualityEventRatio": n => { this.receivedQualityEventRatio = n.getNumberValue(); },
            "reflexiveIPAddress": n => { this.reflexiveIPAddress = n.getStringValue(); },
            "relayIPAddress": n => { this.relayIPAddress = n.getStringValue(); },
            "relayPort": n => { this.relayPort = n.getNumberValue(); },
            "sentQualityEventRatio": n => { this.sentQualityEventRatio = n.getNumberValue(); },
            "subnet": n => { this.subnet = n.getStringValue(); },
            "wifiBand": n => { this.wifiBand = n.getEnumValue<WifiBand>(WifiBand); },
            "wifiBatteryCharge": n => { this.wifiBatteryCharge = n.getNumberValue(); },
            "wifiChannel": n => { this.wifiChannel = n.getNumberValue(); },
            "wifiMicrosoftDriver": n => { this.wifiMicrosoftDriver = n.getStringValue(); },
            "wifiMicrosoftDriverVersion": n => { this.wifiMicrosoftDriverVersion = n.getStringValue(); },
            "wifiRadioType": n => { this.wifiRadioType = n.getEnumValue<WifiRadioType>(WifiRadioType); },
            "wifiSignalStrength": n => { this.wifiSignalStrength = n.getNumberValue(); },
            "wifiVendorDriver": n => { this.wifiVendorDriver = n.getStringValue(); },
            "wifiVendorDriverVersion": n => { this.wifiVendorDriverVersion = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.bandwidthLowEventRatio){
        writer.writeNumberValue("bandwidthLowEventRatio", this.bandwidthLowEventRatio);
        }
        if(this.basicServiceSetIdentifier){
        writer.writeStringValue("basicServiceSetIdentifier", this.basicServiceSetIdentifier);
        }
        if(this.connectionType){
        writer.writeEnumValue<NetworkConnectionType>("connectionType", this.connectionType);
        }
        if(this.delayEventRatio){
        writer.writeNumberValue("delayEventRatio", this.delayEventRatio);
        }
        if(this.dnsSuffix){
        writer.writeStringValue("dnsSuffix", this.dnsSuffix);
        }
        if(this.ipAddress){
        writer.writeStringValue("ipAddress", this.ipAddress);
        }
        if(this.linkSpeed){
        writer.writeNumberValue("linkSpeed", this.linkSpeed);
        }
        if(this.macAddress){
        writer.writeStringValue("macAddress", this.macAddress);
        }
        if(this.port){
        writer.writeNumberValue("port", this.port);
        }
        if(this.receivedQualityEventRatio){
        writer.writeNumberValue("receivedQualityEventRatio", this.receivedQualityEventRatio);
        }
        if(this.reflexiveIPAddress){
        writer.writeStringValue("reflexiveIPAddress", this.reflexiveIPAddress);
        }
        if(this.relayIPAddress){
        writer.writeStringValue("relayIPAddress", this.relayIPAddress);
        }
        if(this.relayPort){
        writer.writeNumberValue("relayPort", this.relayPort);
        }
        if(this.sentQualityEventRatio){
        writer.writeNumberValue("sentQualityEventRatio", this.sentQualityEventRatio);
        }
        if(this.subnet){
        writer.writeStringValue("subnet", this.subnet);
        }
        if(this.wifiBand){
        writer.writeEnumValue<WifiBand>("wifiBand", this.wifiBand);
        }
        if(this.wifiBatteryCharge){
        writer.writeNumberValue("wifiBatteryCharge", this.wifiBatteryCharge);
        }
        if(this.wifiChannel){
        writer.writeNumberValue("wifiChannel", this.wifiChannel);
        }
        if(this.wifiMicrosoftDriver){
        writer.writeStringValue("wifiMicrosoftDriver", this.wifiMicrosoftDriver);
        }
        if(this.wifiMicrosoftDriverVersion){
        writer.writeStringValue("wifiMicrosoftDriverVersion", this.wifiMicrosoftDriverVersion);
        }
        if(this.wifiRadioType){
        writer.writeEnumValue<WifiRadioType>("wifiRadioType", this.wifiRadioType);
        }
        if(this.wifiSignalStrength){
        writer.writeNumberValue("wifiSignalStrength", this.wifiSignalStrength);
        }
        if(this.wifiVendorDriver){
        writer.writeStringValue("wifiVendorDriver", this.wifiVendorDriver);
        }
        if(this.wifiVendorDriverVersion){
        writer.writeStringValue("wifiVendorDriverVersion", this.wifiVendorDriverVersion);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
