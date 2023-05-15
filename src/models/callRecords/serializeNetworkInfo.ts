import {NetworkConnectionType} from './networkConnectionType';
import {NetworkInfo} from './networkInfo';
import {NetworkTransportProtocol} from './networkTransportProtocol';
import {serializeTraceRouteHop} from './serializeTraceRouteHop';
import {TraceRouteHop} from './traceRouteHop';
import {WifiBand} from './wifiBand';
import {WifiRadioType} from './wifiRadioType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNetworkInfo(writer: SerializationWriter, networkInfo: NetworkInfo | undefined = {} as NetworkInfo) : void {
        writer.writeNumberValue("bandwidthLowEventRatio", networkInfo.bandwidthLowEventRatio);
        writer.writeStringValue("basicServiceSetIdentifier", networkInfo.basicServiceSetIdentifier);
        writer.writeEnumValue<NetworkConnectionType>("connectionType", networkInfo.connectionType);
        writer.writeNumberValue("delayEventRatio", networkInfo.delayEventRatio);
        writer.writeStringValue("dnsSuffix", networkInfo.dnsSuffix);
        writer.writeStringValue("ipAddress", networkInfo.ipAddress);
        writer.writeNumberValue("linkSpeed", networkInfo.linkSpeed);
        writer.writeStringValue("macAddress", networkInfo.macAddress);
        writer.writeEnumValue<NetworkTransportProtocol>("networkTransportProtocol", networkInfo.networkTransportProtocol);
        writer.writeStringValue("@odata.type", networkInfo.odataType);
        writer.writeNumberValue("port", networkInfo.port);
        writer.writeNumberValue("receivedQualityEventRatio", networkInfo.receivedQualityEventRatio);
        writer.writeStringValue("reflexiveIPAddress", networkInfo.reflexiveIPAddress);
        writer.writeStringValue("relayIPAddress", networkInfo.relayIPAddress);
        writer.writeNumberValue("relayPort", networkInfo.relayPort);
        writer.writeNumberValue("sentQualityEventRatio", networkInfo.sentQualityEventRatio);
        writer.writeStringValue("subnet", networkInfo.subnet);
        writer.writeCollectionOfObjectValues<TraceRouteHop>("traceRouteHops", networkInfo.traceRouteHops, serializeTraceRouteHop);
        writer.writeEnumValue<WifiBand>("wifiBand", networkInfo.wifiBand);
        writer.writeNumberValue("wifiBatteryCharge", networkInfo.wifiBatteryCharge);
        writer.writeNumberValue("wifiChannel", networkInfo.wifiChannel);
        writer.writeStringValue("wifiMicrosoftDriver", networkInfo.wifiMicrosoftDriver);
        writer.writeStringValue("wifiMicrosoftDriverVersion", networkInfo.wifiMicrosoftDriverVersion);
        writer.writeEnumValue<WifiRadioType>("wifiRadioType", networkInfo.wifiRadioType);
        writer.writeNumberValue("wifiSignalStrength", networkInfo.wifiSignalStrength);
        writer.writeStringValue("wifiVendorDriver", networkInfo.wifiVendorDriver);
        writer.writeStringValue("wifiVendorDriverVersion", networkInfo.wifiVendorDriverVersion);
        writer.writeAdditionalData(networkInfo.additionalData);
}
