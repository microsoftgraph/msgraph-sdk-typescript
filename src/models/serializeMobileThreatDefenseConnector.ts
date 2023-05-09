import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileThreatDefenseConnector(writer: SerializationWriter, mobileThreatDefenseConnector: MobileThreatDefenseConnector | undefined = {} as MobileThreatDefenseConnector) : void {
        serializeEntity(writer, mobileThreatDefenseConnector)
        writer.writeBooleanValue("allowPartnerToCollectIOSApplicationMetadata", mobileThreatDefenseConnector.allowPartnerToCollectIOSApplicationMetadata);
        writer.writeBooleanValue("allowPartnerToCollectIOSPersonalApplicationMetadata", mobileThreatDefenseConnector.allowPartnerToCollectIOSPersonalApplicationMetadata);
        writer.writeBooleanValue("androidDeviceBlockedOnMissingPartnerData", mobileThreatDefenseConnector.androidDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("androidEnabled", mobileThreatDefenseConnector.androidEnabled);
        writer.writeBooleanValue("androidMobileApplicationManagementEnabled", mobileThreatDefenseConnector.androidMobileApplicationManagementEnabled);
        writer.writeBooleanValue("iosDeviceBlockedOnMissingPartnerData", mobileThreatDefenseConnector.iosDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("iosEnabled", mobileThreatDefenseConnector.iosEnabled);
        writer.writeBooleanValue("iosMobileApplicationManagementEnabled", mobileThreatDefenseConnector.iosMobileApplicationManagementEnabled);
        writer.writeDateValue("lastHeartbeatDateTime", mobileThreatDefenseConnector.lastHeartbeatDateTime);
        writer.writeBooleanValue("microsoftDefenderForEndpointAttachEnabled", mobileThreatDefenseConnector.microsoftDefenderForEndpointAttachEnabled);
        writer.writeEnumValue<MobileThreatPartnerTenantState>("partnerState", mobileThreatDefenseConnector.partnerState);
        writer.writeNumberValue("partnerUnresponsivenessThresholdInDays", mobileThreatDefenseConnector.partnerUnresponsivenessThresholdInDays);
        writer.writeBooleanValue("partnerUnsupportedOsVersionBlocked", mobileThreatDefenseConnector.partnerUnsupportedOsVersionBlocked);
        writer.writeBooleanValue("windowsDeviceBlockedOnMissingPartnerData", mobileThreatDefenseConnector.windowsDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("windowsEnabled", mobileThreatDefenseConnector.windowsEnabled);
}
