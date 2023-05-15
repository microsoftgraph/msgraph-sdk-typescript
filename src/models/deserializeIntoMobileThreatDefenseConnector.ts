import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileThreatDefenseConnector(mobileThreatDefenseConnector: MobileThreatDefenseConnector | undefined = {} as MobileThreatDefenseConnector) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileThreatDefenseConnector),
        "allowPartnerToCollectIOSApplicationMetadata": n => { mobileThreatDefenseConnector.allowPartnerToCollectIOSApplicationMetadata = n.getBooleanValue(); },
        "allowPartnerToCollectIOSPersonalApplicationMetadata": n => { mobileThreatDefenseConnector.allowPartnerToCollectIOSPersonalApplicationMetadata = n.getBooleanValue(); },
        "androidDeviceBlockedOnMissingPartnerData": n => { mobileThreatDefenseConnector.androidDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
        "androidEnabled": n => { mobileThreatDefenseConnector.androidEnabled = n.getBooleanValue(); },
        "androidMobileApplicationManagementEnabled": n => { mobileThreatDefenseConnector.androidMobileApplicationManagementEnabled = n.getBooleanValue(); },
        "iosDeviceBlockedOnMissingPartnerData": n => { mobileThreatDefenseConnector.iosDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
        "iosEnabled": n => { mobileThreatDefenseConnector.iosEnabled = n.getBooleanValue(); },
        "iosMobileApplicationManagementEnabled": n => { mobileThreatDefenseConnector.iosMobileApplicationManagementEnabled = n.getBooleanValue(); },
        "lastHeartbeatDateTime": n => { mobileThreatDefenseConnector.lastHeartbeatDateTime = n.getDateValue(); },
        "microsoftDefenderForEndpointAttachEnabled": n => { mobileThreatDefenseConnector.microsoftDefenderForEndpointAttachEnabled = n.getBooleanValue(); },
        "partnerState": n => { mobileThreatDefenseConnector.partnerState = n.getEnumValue<MobileThreatPartnerTenantState>(MobileThreatPartnerTenantState); },
        "partnerUnresponsivenessThresholdInDays": n => { mobileThreatDefenseConnector.partnerUnresponsivenessThresholdInDays = n.getNumberValue(); },
        "partnerUnsupportedOsVersionBlocked": n => { mobileThreatDefenseConnector.partnerUnsupportedOsVersionBlocked = n.getBooleanValue(); },
        "windowsDeviceBlockedOnMissingPartnerData": n => { mobileThreatDefenseConnector.windowsDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
        "windowsEnabled": n => { mobileThreatDefenseConnector.windowsEnabled = n.getBooleanValue(); },
    }
}
