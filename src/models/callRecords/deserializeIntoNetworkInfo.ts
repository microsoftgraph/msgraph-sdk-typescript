import {createTraceRouteHopFromDiscriminatorValue} from './createTraceRouteHopFromDiscriminatorValue';
import {NetworkConnectionType} from './networkConnectionType';
import {NetworkInfo} from './networkInfo';
import {NetworkTransportProtocol} from './networkTransportProtocol';
import {serializeTraceRouteHop} from './serializeTraceRouteHop';
import {TraceRouteHop} from './traceRouteHop';
import {WifiBand} from './wifiBand';
import {WifiRadioType} from './wifiRadioType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNetworkInfo(networkInfo: NetworkInfo | undefined = {} as NetworkInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "bandwidthLowEventRatio": n => { networkInfo.bandwidthLowEventRatio = n.getNumberValue(); },
        "basicServiceSetIdentifier": n => { networkInfo.basicServiceSetIdentifier = n.getStringValue(); },
        "connectionType": n => { networkInfo.connectionType = n.getEnumValue<NetworkConnectionType>(NetworkConnectionType); },
        "delayEventRatio": n => { networkInfo.delayEventRatio = n.getNumberValue(); },
        "dnsSuffix": n => { networkInfo.dnsSuffix = n.getStringValue(); },
        "ipAddress": n => { networkInfo.ipAddress = n.getStringValue(); },
        "linkSpeed": n => { networkInfo.linkSpeed = n.getNumberValue(); },
        "macAddress": n => { networkInfo.macAddress = n.getStringValue(); },
        "networkTransportProtocol": n => { networkInfo.networkTransportProtocol = n.getEnumValue<NetworkTransportProtocol>(NetworkTransportProtocol); },
        "@odata.type": n => { networkInfo.odataType = n.getStringValue(); },
        "port": n => { networkInfo.port = n.getNumberValue(); },
        "receivedQualityEventRatio": n => { networkInfo.receivedQualityEventRatio = n.getNumberValue(); },
        "reflexiveIPAddress": n => { networkInfo.reflexiveIPAddress = n.getStringValue(); },
        "relayIPAddress": n => { networkInfo.relayIPAddress = n.getStringValue(); },
        "relayPort": n => { networkInfo.relayPort = n.getNumberValue(); },
        "sentQualityEventRatio": n => { networkInfo.sentQualityEventRatio = n.getNumberValue(); },
        "subnet": n => { networkInfo.subnet = n.getStringValue(); },
        "traceRouteHops": n => { networkInfo.traceRouteHops = n.getCollectionOfObjectValues<TraceRouteHop>(createTraceRouteHopFromDiscriminatorValue); },
        "wifiBand": n => { networkInfo.wifiBand = n.getEnumValue<WifiBand>(WifiBand); },
        "wifiBatteryCharge": n => { networkInfo.wifiBatteryCharge = n.getNumberValue(); },
        "wifiChannel": n => { networkInfo.wifiChannel = n.getNumberValue(); },
        "wifiMicrosoftDriver": n => { networkInfo.wifiMicrosoftDriver = n.getStringValue(); },
        "wifiMicrosoftDriverVersion": n => { networkInfo.wifiMicrosoftDriverVersion = n.getStringValue(); },
        "wifiRadioType": n => { networkInfo.wifiRadioType = n.getEnumValue<WifiRadioType>(WifiRadioType); },
        "wifiSignalStrength": n => { networkInfo.wifiSignalStrength = n.getNumberValue(); },
        "wifiVendorDriver": n => { networkInfo.wifiVendorDriver = n.getStringValue(); },
        "wifiVendorDriverVersion": n => { networkInfo.wifiVendorDriverVersion = n.getStringValue(); },
    }
}
