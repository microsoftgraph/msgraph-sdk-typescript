import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {createWindowsInformationProtectionAppFromDiscriminatorValue} from './createWindowsInformationProtectionAppFromDiscriminatorValue';
import {createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue} from './createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue';
import {createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue} from './createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue';
import {createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue} from './createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue';
import {createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue} from './createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue';
import {createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue} from './createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {serializeTargetedManagedAppPolicyAssignment} from './serializeTargetedManagedAppPolicyAssignment';
import {serializeWindowsInformationProtectionApp} from './serializeWindowsInformationProtectionApp';
import {serializeWindowsInformationProtectionAppLockerFile} from './serializeWindowsInformationProtectionAppLockerFile';
import {serializeWindowsInformationProtectionDataRecoveryCertificate} from './serializeWindowsInformationProtectionDataRecoveryCertificate';
import {serializeWindowsInformationProtectionIPRangeCollection} from './serializeWindowsInformationProtectionIPRangeCollection';
import {serializeWindowsInformationProtectionProxiedDomainCollection} from './serializeWindowsInformationProtectionProxiedDomainCollection';
import {serializeWindowsInformationProtectionResourceCollection} from './serializeWindowsInformationProtectionResourceCollection';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {WindowsInformationProtection} from './windowsInformationProtection';
import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionDataRecoveryCertificate} from './windowsInformationProtectionDataRecoveryCertificate';
import {WindowsInformationProtectionEnforcementLevel} from './windowsInformationProtectionEnforcementLevel';
import {WindowsInformationProtectionIPRangeCollection} from './windowsInformationProtectionIPRangeCollection';
import {WindowsInformationProtectionProxiedDomainCollection} from './windowsInformationProtectionProxiedDomainCollection';
import {WindowsInformationProtectionResourceCollection} from './windowsInformationProtectionResourceCollection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoWindowsInformationProtection(windowsInformationProtection: WindowsInformationProtection | undefined = {} as WindowsInformationProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppPolicy(windowsInformationProtection),
        "assignments": n => { windowsInformationProtection.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
        "azureRightsManagementServicesAllowed": n => { windowsInformationProtection.azureRightsManagementServicesAllowed = n.getBooleanValue(); },
        "dataRecoveryCertificate": n => { windowsInformationProtection.dataRecoveryCertificate = n.getObjectValue<WindowsInformationProtectionDataRecoveryCertificate>(createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue); },
        "enforcementLevel": n => { windowsInformationProtection.enforcementLevel = n.getEnumValue<WindowsInformationProtectionEnforcementLevel>(WindowsInformationProtectionEnforcementLevel); },
        "enterpriseDomain": n => { windowsInformationProtection.enterpriseDomain = n.getStringValue(); },
        "enterpriseInternalProxyServers": n => { windowsInformationProtection.enterpriseInternalProxyServers = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
        "enterpriseIPRanges": n => { windowsInformationProtection.enterpriseIPRanges = n.getCollectionOfObjectValues<WindowsInformationProtectionIPRangeCollection>(createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue); },
        "enterpriseIPRangesAreAuthoritative": n => { windowsInformationProtection.enterpriseIPRangesAreAuthoritative = n.getBooleanValue(); },
        "enterpriseNetworkDomainNames": n => { windowsInformationProtection.enterpriseNetworkDomainNames = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
        "enterpriseProtectedDomainNames": n => { windowsInformationProtection.enterpriseProtectedDomainNames = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
        "enterpriseProxiedDomains": n => { windowsInformationProtection.enterpriseProxiedDomains = n.getCollectionOfObjectValues<WindowsInformationProtectionProxiedDomainCollection>(createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue); },
        "enterpriseProxyServers": n => { windowsInformationProtection.enterpriseProxyServers = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
        "enterpriseProxyServersAreAuthoritative": n => { windowsInformationProtection.enterpriseProxyServersAreAuthoritative = n.getBooleanValue(); },
        "exemptAppLockerFiles": n => { windowsInformationProtection.exemptAppLockerFiles = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>(createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue); },
        "exemptApps": n => { windowsInformationProtection.exemptApps = n.getCollectionOfObjectValues<WindowsInformationProtectionApp>(createWindowsInformationProtectionAppFromDiscriminatorValue); },
        "iconsVisible": n => { windowsInformationProtection.iconsVisible = n.getBooleanValue(); },
        "indexingEncryptedStoresOrItemsBlocked": n => { windowsInformationProtection.indexingEncryptedStoresOrItemsBlocked = n.getBooleanValue(); },
        "isAssigned": n => { windowsInformationProtection.isAssigned = n.getBooleanValue(); },
        "neutralDomainResources": n => { windowsInformationProtection.neutralDomainResources = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
        "protectedAppLockerFiles": n => { windowsInformationProtection.protectedAppLockerFiles = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>(createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue); },
        "protectedApps": n => { windowsInformationProtection.protectedApps = n.getCollectionOfObjectValues<WindowsInformationProtectionApp>(createWindowsInformationProtectionAppFromDiscriminatorValue); },
        "protectionUnderLockConfigRequired": n => { windowsInformationProtection.protectionUnderLockConfigRequired = n.getBooleanValue(); },
        "revokeOnUnenrollDisabled": n => { windowsInformationProtection.revokeOnUnenrollDisabled = n.getBooleanValue(); },
        "rightsManagementServicesTemplateId": n => { windowsInformationProtection.rightsManagementServicesTemplateId = n.getGuidValue(); },
        "smbAutoEncryptedFileExtensions": n => { windowsInformationProtection.smbAutoEncryptedFileExtensions = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
    }
}
