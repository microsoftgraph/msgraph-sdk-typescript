import {NetworkConnectionType} from './networkConnectionType';
import {NetworkTransportProtocol} from './networkTransportProtocol';
import {TraceRouteHop} from './traceRouteHop';
import {WifiBand} from './wifiBand';
import {WifiRadioType} from './wifiRadioType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface NetworkInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Fraction of the call that the media endpoint detected the available bandwidth or bandwidth policy was low enough to cause poor quality of the audio sent.
     */
    bandwidthLowEventRatio?: number | undefined;
    /**
     * The wireless LAN basic service set identifier of the media endpoint used to connect to the network.
     */
    basicServiceSetIdentifier?: string | undefined;
    /**
     * The connectionType property
     */
    connectionType?: NetworkConnectionType | undefined;
    /**
     * Fraction of the call that the media endpoint detected the network delay was significant enough to impact the ability to have real-time two-way communication.
     */
    delayEventRatio?: number | undefined;
    /**
     * DNS suffix associated with the network adapter of the media endpoint.
     */
    dnsSuffix?: string | undefined;
    /**
     * IP address of the media endpoint.
     */
    ipAddress?: string | undefined;
    /**
     * Link speed in bits per second reported by the network adapter used by the media endpoint.
     */
    linkSpeed?: number | undefined;
    /**
     * The media access control (MAC) address of the media endpoint's network device.
     */
    macAddress?: string | undefined;
    /**
     * The networkTransportProtocol property
     */
    networkTransportProtocol?: NetworkTransportProtocol | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Network port number used by media endpoint.
     */
    port?: number | undefined;
    /**
     * Fraction of the call that the media endpoint detected the network was causing poor quality of the audio received.
     */
    receivedQualityEventRatio?: number | undefined;
    /**
     * IP address of the media endpoint as seen by the media relay server. This is typically the public internet IP address associated to the endpoint.
     */
    reflexiveIPAddress?: string | undefined;
    /**
     * IP address of the media relay server allocated by the media endpoint.
     */
    relayIPAddress?: string | undefined;
    /**
     * Network port number allocated on the media relay server by the media endpoint.
     */
    relayPort?: number | undefined;
    /**
     * Fraction of the call that the media endpoint detected the network was causing poor quality of the audio sent.
     */
    sentQualityEventRatio?: number | undefined;
    /**
     * Subnet used for media stream by the media endpoint.
     */
    subnet?: string | undefined;
    /**
     * List of network trace route hops collected for this media stream.*
     */
    traceRouteHops?: TraceRouteHop[] | undefined;
    /**
     * The wifiBand property
     */
    wifiBand?: WifiBand | undefined;
    /**
     * Estimated remaining battery charge in percentage reported by the media endpoint.
     */
    wifiBatteryCharge?: number | undefined;
    /**
     * WiFi channel used by the media endpoint.
     */
    wifiChannel?: number | undefined;
    /**
     * Name of the Microsoft WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.
     */
    wifiMicrosoftDriver?: string | undefined;
    /**
     * Version of the Microsoft WiFi driver used by the media endpoint.
     */
    wifiMicrosoftDriverVersion?: string | undefined;
    /**
     * The wifiRadioType property
     */
    wifiRadioType?: WifiRadioType | undefined;
    /**
     * WiFi signal strength in percentage reported by the media endpoint.
     */
    wifiSignalStrength?: number | undefined;
    /**
     * Name of the WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.
     */
    wifiVendorDriver?: string | undefined;
    /**
     * Version of the WiFi driver used by the media endpoint.
     */
    wifiVendorDriverVersion?: string | undefined;
}
