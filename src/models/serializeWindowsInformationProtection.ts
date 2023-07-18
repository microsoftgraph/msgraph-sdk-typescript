import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
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

export function serializeWindowsInformationProtection(writer: SerializationWriter, windowsInformationProtection: WindowsInformationProtection | undefined = {} as WindowsInformationProtection) : void {
        serializeManagedAppPolicy(writer, windowsInformationProtection)
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", windowsInformationProtection.assignments, serializeTargetedManagedAppPolicyAssignment);
        writer.writeBooleanValue("azureRightsManagementServicesAllowed", windowsInformationProtection.azureRightsManagementServicesAllowed);
        writer.writeObjectValue<WindowsInformationProtectionDataRecoveryCertificate>("dataRecoveryCertificate", windowsInformationProtection.dataRecoveryCertificate, serializeWindowsInformationProtectionDataRecoveryCertificate);
        writer.writeEnumValue<WindowsInformationProtectionEnforcementLevel>("enforcementLevel", windowsInformationProtection.enforcementLevel);
        writer.writeStringValue("enterpriseDomain", windowsInformationProtection.enterpriseDomain);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseInternalProxyServers", windowsInformationProtection.enterpriseInternalProxyServers, serializeWindowsInformationProtectionResourceCollection);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionIPRangeCollection>("enterpriseIPRanges", windowsInformationProtection.enterpriseIPRanges, serializeWindowsInformationProtectionIPRangeCollection);
        writer.writeBooleanValue("enterpriseIPRangesAreAuthoritative", windowsInformationProtection.enterpriseIPRangesAreAuthoritative);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseNetworkDomainNames", windowsInformationProtection.enterpriseNetworkDomainNames, serializeWindowsInformationProtectionResourceCollection);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseProtectedDomainNames", windowsInformationProtection.enterpriseProtectedDomainNames, serializeWindowsInformationProtectionResourceCollection);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionProxiedDomainCollection>("enterpriseProxiedDomains", windowsInformationProtection.enterpriseProxiedDomains, serializeWindowsInformationProtectionProxiedDomainCollection);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("enterpriseProxyServers", windowsInformationProtection.enterpriseProxyServers, serializeWindowsInformationProtectionResourceCollection);
        writer.writeBooleanValue("enterpriseProxyServersAreAuthoritative", windowsInformationProtection.enterpriseProxyServersAreAuthoritative);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>("exemptAppLockerFiles", windowsInformationProtection.exemptAppLockerFiles, serializeWindowsInformationProtectionAppLockerFile);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionApp>("exemptApps", windowsInformationProtection.exemptApps, serializeWindowsInformationProtectionApp);
        writer.writeBooleanValue("iconsVisible", windowsInformationProtection.iconsVisible);
        writer.writeBooleanValue("indexingEncryptedStoresOrItemsBlocked", windowsInformationProtection.indexingEncryptedStoresOrItemsBlocked);
        writer.writeBooleanValue("isAssigned", windowsInformationProtection.isAssigned);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("neutralDomainResources", windowsInformationProtection.neutralDomainResources, serializeWindowsInformationProtectionResourceCollection);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>("protectedAppLockerFiles", windowsInformationProtection.protectedAppLockerFiles, serializeWindowsInformationProtectionAppLockerFile);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionApp>("protectedApps", windowsInformationProtection.protectedApps, serializeWindowsInformationProtectionApp);
        writer.writeBooleanValue("protectionUnderLockConfigRequired", windowsInformationProtection.protectionUnderLockConfigRequired);
        writer.writeBooleanValue("revokeOnUnenrollDisabled", windowsInformationProtection.revokeOnUnenrollDisabled);
        writer.writeGuidValue("rightsManagementServicesTemplateId", windowsInformationProtection.rightsManagementServicesTemplateId);
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollection>("smbAutoEncryptedFileExtensions", windowsInformationProtection.smbAutoEncryptedFileExtensions, serializeWindowsInformationProtectionResourceCollection);
}
