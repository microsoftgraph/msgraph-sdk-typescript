import {CallRecord, Segment, Session} from './callRecords/';
import {deserializeIntoCallRecord} from './callRecords/deserializeIntoCallRecord';
import {deserializeIntoSegment} from './callRecords/deserializeIntoSegment';
import {deserializeIntoSession} from './callRecords/deserializeIntoSession';
import {deserializeIntoAadUserConversationMember} from './deserializeIntoAadUserConversationMember';
import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {deserializeIntoAccessPackageAssignment} from './deserializeIntoAccessPackageAssignment';
import {deserializeIntoAccessPackageAssignmentPolicy} from './deserializeIntoAccessPackageAssignmentPolicy';
import {deserializeIntoAccessPackageAssignmentRequest} from './deserializeIntoAccessPackageAssignmentRequest';
import {deserializeIntoAccessPackageCatalog} from './deserializeIntoAccessPackageCatalog';
import {deserializeIntoAccessPackageMultipleChoiceQuestion} from './deserializeIntoAccessPackageMultipleChoiceQuestion';
import {deserializeIntoAccessPackageQuestion} from './deserializeIntoAccessPackageQuestion';
import {deserializeIntoAccessPackageSubject} from './deserializeIntoAccessPackageSubject';
import {deserializeIntoAccessPackageTextInputQuestion} from './deserializeIntoAccessPackageTextInputQuestion';
import {deserializeIntoAccessReviewHistoryDefinition} from './deserializeIntoAccessReviewHistoryDefinition';
import {deserializeIntoAccessReviewHistoryInstance} from './deserializeIntoAccessReviewHistoryInstance';
import {deserializeIntoAccessReviewInstance} from './deserializeIntoAccessReviewInstance';
import {deserializeIntoAccessReviewInstanceDecisionItem} from './deserializeIntoAccessReviewInstanceDecisionItem';
import {deserializeIntoAccessReviewReviewer} from './deserializeIntoAccessReviewReviewer';
import {deserializeIntoAccessReviewScheduleDefinition} from './deserializeIntoAccessReviewScheduleDefinition';
import {deserializeIntoAccessReviewSet} from './deserializeIntoAccessReviewSet';
import {deserializeIntoAccessReviewStage} from './deserializeIntoAccessReviewStage';
import {deserializeIntoActivityBasedTimeoutPolicy} from './deserializeIntoActivityBasedTimeoutPolicy';
import {deserializeIntoActivityHistoryItem} from './deserializeIntoActivityHistoryItem';
import {deserializeIntoAddLargeGalleryViewOperation} from './deserializeIntoAddLargeGalleryViewOperation';
import {deserializeIntoAdminConsentRequestPolicy} from './deserializeIntoAdminConsentRequestPolicy';
import {deserializeIntoAdministrativeUnit} from './deserializeIntoAdministrativeUnit';
import {deserializeIntoAgreement} from './deserializeIntoAgreement';
import {deserializeIntoAgreementAcceptance} from './deserializeIntoAgreementAcceptance';
import {deserializeIntoAgreementFile} from './deserializeIntoAgreementFile';
import {deserializeIntoAgreementFileLocalization} from './deserializeIntoAgreementFileLocalization';
import {deserializeIntoAgreementFileProperties} from './deserializeIntoAgreementFileProperties';
import {deserializeIntoAgreementFileVersion} from './deserializeIntoAgreementFileVersion';
import {deserializeIntoAlert as I31715a026b1ced0f6a88616d35905e458c4d7672e4ac2cfaebeef17eefa762ea} from './deserializeIntoAlert';
import {deserializeIntoAllowedValue} from './deserializeIntoAllowedValue';
import {deserializeIntoAndroidCompliancePolicy} from './deserializeIntoAndroidCompliancePolicy';
import {deserializeIntoAndroidCustomConfiguration} from './deserializeIntoAndroidCustomConfiguration';
import {deserializeIntoAndroidGeneralDeviceConfiguration} from './deserializeIntoAndroidGeneralDeviceConfiguration';
import {deserializeIntoAndroidLobApp} from './deserializeIntoAndroidLobApp';
import {deserializeIntoAndroidManagedAppProtection} from './deserializeIntoAndroidManagedAppProtection';
import {deserializeIntoAndroidManagedAppRegistration} from './deserializeIntoAndroidManagedAppRegistration';
import {deserializeIntoAndroidStoreApp} from './deserializeIntoAndroidStoreApp';
import {deserializeIntoAndroidWorkProfileCompliancePolicy} from './deserializeIntoAndroidWorkProfileCompliancePolicy';
import {deserializeIntoAndroidWorkProfileCustomConfiguration} from './deserializeIntoAndroidWorkProfileCustomConfiguration';
import {deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration} from './deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration';
import {deserializeIntoAnonymousGuestConversationMember} from './deserializeIntoAnonymousGuestConversationMember';
import {deserializeIntoAppCatalogs} from './deserializeIntoAppCatalogs';
import {deserializeIntoAppConsentApprovalRoute} from './deserializeIntoAppConsentApprovalRoute';
import {deserializeIntoAppConsentRequest} from './deserializeIntoAppConsentRequest';
import {deserializeIntoAppleDeviceFeaturesConfigurationBase} from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import {deserializeIntoAppleManagedIdentityProvider} from './deserializeIntoAppleManagedIdentityProvider';
import {deserializeIntoApplePushNotificationCertificate} from './deserializeIntoApplePushNotificationCertificate';
import {deserializeIntoApplication} from './deserializeIntoApplication';
import {deserializeIntoApplicationTemplate} from './deserializeIntoApplicationTemplate';
import {deserializeIntoAppLogCollectionRequest} from './deserializeIntoAppLogCollectionRequest';
import {deserializeIntoAppManagementPolicy} from './deserializeIntoAppManagementPolicy';
import {deserializeIntoAppRoleAssignment} from './deserializeIntoAppRoleAssignment';
import {deserializeIntoApproval} from './deserializeIntoApproval';
import {deserializeIntoApprovalStage} from './deserializeIntoApprovalStage';
import {deserializeIntoAppScope} from './deserializeIntoAppScope';
import {deserializeIntoAssociatedTeamInfo} from './deserializeIntoAssociatedTeamInfo';
import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoAttachmentBase} from './deserializeIntoAttachmentBase';
import {deserializeIntoAttachmentSession} from './deserializeIntoAttachmentSession';
import {deserializeIntoAttackSimulationRoot} from './deserializeIntoAttackSimulationRoot';
import {deserializeIntoAttendanceRecord} from './deserializeIntoAttendanceRecord';
import {deserializeIntoAttributeMappingFunctionSchema} from './deserializeIntoAttributeMappingFunctionSchema';
import {deserializeIntoAttributeSet} from './deserializeIntoAttributeSet';
import {deserializeIntoAudioRoutingGroup} from './deserializeIntoAudioRoutingGroup';
import {deserializeIntoAuditEvent} from './deserializeIntoAuditEvent';
import {deserializeIntoAuditLogRoot} from './deserializeIntoAuditLogRoot';
import {deserializeIntoAuthentication} from './deserializeIntoAuthentication';
import {deserializeIntoAuthenticationCombinationConfiguration} from './deserializeIntoAuthenticationCombinationConfiguration';
import {deserializeIntoAuthenticationContextClassReference} from './deserializeIntoAuthenticationContextClassReference';
import {deserializeIntoAuthenticationFlowsPolicy} from './deserializeIntoAuthenticationFlowsPolicy';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoAuthenticationMethodModeDetail} from './deserializeIntoAuthenticationMethodModeDetail';
import {deserializeIntoAuthenticationMethodsPolicy} from './deserializeIntoAuthenticationMethodsPolicy';
import {deserializeIntoAuthenticationMethodsRoot} from './deserializeIntoAuthenticationMethodsRoot';
import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {deserializeIntoAuthenticationStrengthPolicy} from './deserializeIntoAuthenticationStrengthPolicy';
import {deserializeIntoAuthenticationStrengthRoot} from './deserializeIntoAuthenticationStrengthRoot';
import {deserializeIntoAuthoredNote} from './deserializeIntoAuthoredNote';
import {deserializeIntoAuthorizationPolicy} from './deserializeIntoAuthorizationPolicy';
import {deserializeIntoAzureCommunicationServicesUserConversationMember} from './deserializeIntoAzureCommunicationServicesUserConversationMember';
import {deserializeIntoB2xIdentityUserFlow} from './deserializeIntoB2xIdentityUserFlow';
import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {deserializeIntoBaseItemVersion} from './deserializeIntoBaseItemVersion';
import {deserializeIntoBitlocker} from './deserializeIntoBitlocker';
import {deserializeIntoBitlockerRecoveryKey} from './deserializeIntoBitlockerRecoveryKey';
import {deserializeIntoBookingAppointment} from './deserializeIntoBookingAppointment';
import {deserializeIntoBookingBusiness} from './deserializeIntoBookingBusiness';
import {deserializeIntoBookingCurrency} from './deserializeIntoBookingCurrency';
import {deserializeIntoBookingCustomer} from './deserializeIntoBookingCustomer';
import {deserializeIntoBookingCustomerBase} from './deserializeIntoBookingCustomerBase';
import {deserializeIntoBookingCustomQuestion} from './deserializeIntoBookingCustomQuestion';
import {deserializeIntoBookingService} from './deserializeIntoBookingService';
import {deserializeIntoBookingStaffMember} from './deserializeIntoBookingStaffMember';
import {deserializeIntoBookingStaffMemberBase} from './deserializeIntoBookingStaffMemberBase';
import {deserializeIntoBrowserSharedCookie} from './deserializeIntoBrowserSharedCookie';
import {deserializeIntoBrowserSite} from './deserializeIntoBrowserSite';
import {deserializeIntoBrowserSiteList} from './deserializeIntoBrowserSiteList';
import {deserializeIntoBuiltInIdentityProvider} from './deserializeIntoBuiltInIdentityProvider';
import {deserializeIntoCalendar} from './deserializeIntoCalendar';
import {deserializeIntoCalendarGroup} from './deserializeIntoCalendarGroup';
import {deserializeIntoCalendarPermission} from './deserializeIntoCalendarPermission';
import {deserializeIntoCalendarSharingMessage} from './deserializeIntoCalendarSharingMessage';
import {deserializeIntoCall} from './deserializeIntoCall';
import {deserializeIntoCancelMediaProcessingOperation} from './deserializeIntoCancelMediaProcessingOperation';
import {deserializeIntoCertificateBasedAuthConfiguration} from './deserializeIntoCertificateBasedAuthConfiguration';
import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoChannel} from './deserializeIntoChannel';
import {deserializeIntoChat} from './deserializeIntoChat';
import {deserializeIntoChatMessage} from './deserializeIntoChatMessage';
import {deserializeIntoChatMessageHostedContent} from './deserializeIntoChatMessageHostedContent';
import {deserializeIntoChatMessageInfo} from './deserializeIntoChatMessageInfo';
import {deserializeIntoChecklistItem} from './deserializeIntoChecklistItem';
import {deserializeIntoClaimsMappingPolicy} from './deserializeIntoClaimsMappingPolicy';
import {deserializeIntoColumnDefinition} from './deserializeIntoColumnDefinition';
import {deserializeIntoColumnLink} from './deserializeIntoColumnLink';
import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {deserializeIntoComplianceManagementPartner} from './deserializeIntoComplianceManagementPartner';
import {deserializeIntoConditionalAccessPolicy} from './deserializeIntoConditionalAccessPolicy';
import {deserializeIntoConditionalAccessRoot} from './deserializeIntoConditionalAccessRoot';
import {deserializeIntoConditionalAccessTemplate} from './deserializeIntoConditionalAccessTemplate';
import {deserializeIntoConnectedOrganization} from './deserializeIntoConnectedOrganization';
import {deserializeIntoContact} from './deserializeIntoContact';
import {deserializeIntoContactFolder} from './deserializeIntoContactFolder';
import {deserializeIntoContentSharingSession} from './deserializeIntoContentSharingSession';
import {deserializeIntoContentType} from './deserializeIntoContentType';
import {deserializeIntoContract} from './deserializeIntoContract';
import {deserializeIntoConversation} from './deserializeIntoConversation';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {deserializeIntoConversationThread} from './deserializeIntoConversationThread';
import {deserializeIntoCountryNamedLocation} from './deserializeIntoCountryNamedLocation';
import {deserializeIntoCrossTenantAccessPolicy} from './deserializeIntoCrossTenantAccessPolicy';
import {deserializeIntoCrossTenantAccessPolicyConfigurationDefault} from './deserializeIntoCrossTenantAccessPolicyConfigurationDefault';
import {deserializeIntoCustomCalloutExtension} from './deserializeIntoCustomCalloutExtension';
import {deserializeIntoCustomSecurityAttributeDefinition} from './deserializeIntoCustomSecurityAttributeDefinition';
import {deserializeIntoDataPolicyOperation} from './deserializeIntoDataPolicyOperation';
import {deserializeIntoDefaultManagedAppProtection} from './deserializeIntoDefaultManagedAppProtection';
import {deserializeIntoDelegatedAdminAccessAssignment} from './deserializeIntoDelegatedAdminAccessAssignment';
import {deserializeIntoDelegatedAdminCustomer} from './deserializeIntoDelegatedAdminCustomer';
import {deserializeIntoDelegatedAdminRelationship} from './deserializeIntoDelegatedAdminRelationship';
import {deserializeIntoDelegatedAdminRelationshipOperation} from './deserializeIntoDelegatedAdminRelationshipOperation';
import {deserializeIntoDelegatedAdminRelationshipRequest} from './deserializeIntoDelegatedAdminRelationshipRequest';
import {deserializeIntoDelegatedAdminServiceManagementDetail} from './deserializeIntoDelegatedAdminServiceManagementDetail';
import {deserializeIntoDelegatedPermissionClassification} from './deserializeIntoDelegatedPermissionClassification';
import {deserializeIntoDeletedItemContainer} from './deserializeIntoDeletedItemContainer';
import {deserializeIntoDeletedTeam} from './deserializeIntoDeletedTeam';
import {deserializeIntoDetectedApp} from './deserializeIntoDetectedApp';
import {deserializeIntoDevice} from './deserializeIntoDevice';
import {deserializeIntoDeviceAndAppManagementRoleAssignment} from './deserializeIntoDeviceAndAppManagementRoleAssignment';
import {deserializeIntoDeviceAndAppManagementRoleDefinition} from './deserializeIntoDeviceAndAppManagementRoleDefinition';
import {deserializeIntoDeviceAppManagement} from './deserializeIntoDeviceAppManagement';
import {deserializeIntoDeviceCategory} from './deserializeIntoDeviceCategory';
import {deserializeIntoDeviceComplianceActionItem} from './deserializeIntoDeviceComplianceActionItem';
import {deserializeIntoDeviceComplianceDeviceOverview} from './deserializeIntoDeviceComplianceDeviceOverview';
import {deserializeIntoDeviceComplianceDeviceStatus} from './deserializeIntoDeviceComplianceDeviceStatus';
import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {deserializeIntoDeviceCompliancePolicyAssignment} from './deserializeIntoDeviceCompliancePolicyAssignment';
import {deserializeIntoDeviceCompliancePolicyDeviceStateSummary} from './deserializeIntoDeviceCompliancePolicyDeviceStateSummary';
import {deserializeIntoDeviceCompliancePolicySettingStateSummary} from './deserializeIntoDeviceCompliancePolicySettingStateSummary';
import {deserializeIntoDeviceCompliancePolicyState} from './deserializeIntoDeviceCompliancePolicyState';
import {deserializeIntoDeviceComplianceScheduledActionForRule} from './deserializeIntoDeviceComplianceScheduledActionForRule';
import {deserializeIntoDeviceComplianceSettingState} from './deserializeIntoDeviceComplianceSettingState';
import {deserializeIntoDeviceComplianceUserOverview} from './deserializeIntoDeviceComplianceUserOverview';
import {deserializeIntoDeviceComplianceUserStatus} from './deserializeIntoDeviceComplianceUserStatus';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoDeviceConfigurationAssignment} from './deserializeIntoDeviceConfigurationAssignment';
import {deserializeIntoDeviceConfigurationDeviceOverview} from './deserializeIntoDeviceConfigurationDeviceOverview';
import {deserializeIntoDeviceConfigurationDeviceStateSummary} from './deserializeIntoDeviceConfigurationDeviceStateSummary';
import {deserializeIntoDeviceConfigurationDeviceStatus} from './deserializeIntoDeviceConfigurationDeviceStatus';
import {deserializeIntoDeviceConfigurationState} from './deserializeIntoDeviceConfigurationState';
import {deserializeIntoDeviceConfigurationUserOverview} from './deserializeIntoDeviceConfigurationUserOverview';
import {deserializeIntoDeviceConfigurationUserStatus} from './deserializeIntoDeviceConfigurationUserStatus';
import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {deserializeIntoDeviceEnrollmentLimitConfiguration} from './deserializeIntoDeviceEnrollmentLimitConfiguration';
import {deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration} from './deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration';
import {deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration} from './deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration';
import {deserializeIntoDeviceInstallState} from './deserializeIntoDeviceInstallState';
import {deserializeIntoDeviceLogCollectionResponse} from './deserializeIntoDeviceLogCollectionResponse';
import {deserializeIntoDeviceManagement} from './deserializeIntoDeviceManagement';
import {deserializeIntoDeviceManagementExchangeConnector} from './deserializeIntoDeviceManagementExchangeConnector';
import {deserializeIntoDeviceManagementExportJob} from './deserializeIntoDeviceManagementExportJob';
import {deserializeIntoDeviceManagementPartner} from './deserializeIntoDeviceManagementPartner';
import {deserializeIntoDeviceManagementReports} from './deserializeIntoDeviceManagementReports';
import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {deserializeIntoDirectory} from './deserializeIntoDirectory';
import {deserializeIntoDirectoryAudit} from './deserializeIntoDirectoryAudit';
import {deserializeIntoDirectoryDefinition} from './deserializeIntoDirectoryDefinition';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoDirectoryObjectPartnerReference} from './deserializeIntoDirectoryObjectPartnerReference';
import {deserializeIntoDirectoryRole} from './deserializeIntoDirectoryRole';
import {deserializeIntoDirectoryRoleTemplate} from './deserializeIntoDirectoryRoleTemplate';
import {deserializeIntoDocumentSetVersion} from './deserializeIntoDocumentSetVersion';
import {deserializeIntoDomain} from './deserializeIntoDomain';
import {deserializeIntoDomainDnsCnameRecord} from './deserializeIntoDomainDnsCnameRecord';
import {deserializeIntoDomainDnsMxRecord} from './deserializeIntoDomainDnsMxRecord';
import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {deserializeIntoDomainDnsSrvRecord} from './deserializeIntoDomainDnsSrvRecord';
import {deserializeIntoDomainDnsTxtRecord} from './deserializeIntoDomainDnsTxtRecord';
import {deserializeIntoDomainDnsUnavailableRecord} from './deserializeIntoDomainDnsUnavailableRecord';
import {deserializeIntoDrive} from './deserializeIntoDrive';
import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {deserializeIntoDriveItemVersion} from './deserializeIntoDriveItemVersion';
import {deserializeIntoEBookInstallSummary} from './deserializeIntoEBookInstallSummary';
import {deserializeIntoEdge} from './deserializeIntoEdge';
import {deserializeIntoEditionUpgradeConfiguration} from './deserializeIntoEditionUpgradeConfiguration';
import {deserializeIntoEducationAssignment} from './deserializeIntoEducationAssignment';
import {deserializeIntoEducationAssignmentDefaults} from './deserializeIntoEducationAssignmentDefaults';
import {deserializeIntoEducationAssignmentResource} from './deserializeIntoEducationAssignmentResource';
import {deserializeIntoEducationAssignmentSettings} from './deserializeIntoEducationAssignmentSettings';
import {deserializeIntoEducationCategory} from './deserializeIntoEducationCategory';
import {deserializeIntoEducationClass} from './deserializeIntoEducationClass';
import {deserializeIntoEducationFeedbackOutcome} from './deserializeIntoEducationFeedbackOutcome';
import {deserializeIntoEducationFeedbackResourceOutcome} from './deserializeIntoEducationFeedbackResourceOutcome';
import {deserializeIntoEducationOrganization} from './deserializeIntoEducationOrganization';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {deserializeIntoEducationPointsOutcome} from './deserializeIntoEducationPointsOutcome';
import {deserializeIntoEducationRubric} from './deserializeIntoEducationRubric';
import {deserializeIntoEducationRubricOutcome} from './deserializeIntoEducationRubricOutcome';
import {deserializeIntoEducationSchool} from './deserializeIntoEducationSchool';
import {deserializeIntoEducationSubmission} from './deserializeIntoEducationSubmission';
import {deserializeIntoEducationSubmissionResource} from './deserializeIntoEducationSubmissionResource';
import {deserializeIntoEducationUser} from './deserializeIntoEducationUser';
import {deserializeIntoEmailAuthenticationMethod} from './deserializeIntoEmailAuthenticationMethod';
import {deserializeIntoEmailAuthenticationMethodConfiguration} from './deserializeIntoEmailAuthenticationMethodConfiguration';
import {deserializeIntoEmailFileAssessmentRequest} from './deserializeIntoEmailFileAssessmentRequest';
import {deserializeIntoEmployeeExperienceUser} from './deserializeIntoEmployeeExperienceUser';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoEnrollmentConfigurationAssignment} from './deserializeIntoEnrollmentConfigurationAssignment';
import {deserializeIntoEnrollmentTroubleshootingEvent} from './deserializeIntoEnrollmentTroubleshootingEvent';
import {deserializeIntoEnterpriseCodeSigningCertificate} from './deserializeIntoEnterpriseCodeSigningCertificate';
import {deserializeIntoEntitlementManagement} from './deserializeIntoEntitlementManagement';
import {deserializeIntoEntitlementManagementSettings} from './deserializeIntoEntitlementManagementSettings';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoEvent} from './deserializeIntoEvent';
import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {deserializeIntoEventMessageRequest} from './deserializeIntoEventMessageRequest';
import {deserializeIntoEventMessageResponse} from './deserializeIntoEventMessageResponse';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoExtensionProperty} from './deserializeIntoExtensionProperty';
import {deserializeIntoExternalDomainName} from './deserializeIntoExternalDomainName';
import {deserializeIntoFeatureRolloutPolicy} from './deserializeIntoFeatureRolloutPolicy';
import {deserializeIntoFederatedIdentityCredential} from './deserializeIntoFederatedIdentityCredential';
import {deserializeIntoFido2AuthenticationMethod} from './deserializeIntoFido2AuthenticationMethod';
import {deserializeIntoFido2AuthenticationMethodConfiguration} from './deserializeIntoFido2AuthenticationMethodConfiguration';
import {deserializeIntoFido2CombinationConfiguration} from './deserializeIntoFido2CombinationConfiguration';
import {deserializeIntoFieldValueSet} from './deserializeIntoFieldValueSet';
import {deserializeIntoFileAssessmentRequest} from './deserializeIntoFileAssessmentRequest';
import {deserializeIntoFileAttachment} from './deserializeIntoFileAttachment';
import {deserializeIntoFilterOperatorSchema} from './deserializeIntoFilterOperatorSchema';
import {deserializeIntoGovernanceInsight} from './deserializeIntoGovernanceInsight';
import {deserializeIntoGroup as I23e16b52d4b109c19ebd3ab2e05b0d3e8411c17b6a4e64b58a4565adab867a21} from './deserializeIntoGroup';
import {deserializeIntoGroupLifecyclePolicy} from './deserializeIntoGroupLifecyclePolicy';
import {deserializeIntoGroupSetting} from './deserializeIntoGroupSetting';
import {deserializeIntoGroupSettingTemplate} from './deserializeIntoGroupSettingTemplate';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {deserializeIntoIdentityApiConnector} from './deserializeIntoIdentityApiConnector';
import {deserializeIntoIdentityBuiltInUserFlowAttribute} from './deserializeIntoIdentityBuiltInUserFlowAttribute';
import {deserializeIntoIdentityContainer} from './deserializeIntoIdentityContainer';
import {deserializeIntoIdentityCustomUserFlowAttribute} from './deserializeIntoIdentityCustomUserFlowAttribute';
import {deserializeIntoIdentityProvider} from './deserializeIntoIdentityProvider';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {deserializeIntoIdentitySecurityDefaultsEnforcementPolicy} from './deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import {deserializeIntoIdentityUserFlow} from './deserializeIntoIdentityUserFlow';
import {deserializeIntoIdentityUserFlowAttribute} from './deserializeIntoIdentityUserFlowAttribute';
import {deserializeIntoIdentityUserFlowAttributeAssignment} from './deserializeIntoIdentityUserFlowAttributeAssignment';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from './deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload} from './deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload';
import {deserializeIntoInferenceClassification} from './deserializeIntoInferenceClassification';
import {deserializeIntoInferenceClassificationOverride} from './deserializeIntoInferenceClassificationOverride';
import {deserializeIntoInternalDomainFederation} from './deserializeIntoInternalDomainFederation';
import {deserializeIntoInternetExplorerMode} from './deserializeIntoInternetExplorerMode';
import {deserializeIntoInvitation} from './deserializeIntoInvitation';
import {deserializeIntoInviteParticipantsOperation} from './deserializeIntoInviteParticipantsOperation';
import {deserializeIntoIosCertificateProfile} from './deserializeIntoIosCertificateProfile';
import {deserializeIntoIosCompliancePolicy} from './deserializeIntoIosCompliancePolicy';
import {deserializeIntoIosCustomConfiguration} from './deserializeIntoIosCustomConfiguration';
import {deserializeIntoIosDeviceFeaturesConfiguration} from './deserializeIntoIosDeviceFeaturesConfiguration';
import {deserializeIntoIosGeneralDeviceConfiguration} from './deserializeIntoIosGeneralDeviceConfiguration';
import {deserializeIntoIosiPadOSWebClip} from './deserializeIntoIosiPadOSWebClip';
import {deserializeIntoIosLobApp} from './deserializeIntoIosLobApp';
import {deserializeIntoIosLobAppProvisioningConfigurationAssignment} from './deserializeIntoIosLobAppProvisioningConfigurationAssignment';
import {deserializeIntoIosManagedAppProtection} from './deserializeIntoIosManagedAppProtection';
import {deserializeIntoIosManagedAppRegistration} from './deserializeIntoIosManagedAppRegistration';
import {deserializeIntoIosMobileAppConfiguration} from './deserializeIntoIosMobileAppConfiguration';
import {deserializeIntoIosStoreApp} from './deserializeIntoIosStoreApp';
import {deserializeIntoIosUpdateConfiguration} from './deserializeIntoIosUpdateConfiguration';
import {deserializeIntoIosUpdateDeviceStatus} from './deserializeIntoIosUpdateDeviceStatus';
import {deserializeIntoIosVppApp} from './deserializeIntoIosVppApp';
import {deserializeIntoIosVppEBook} from './deserializeIntoIosVppEBook';
import {deserializeIntoIosVppEBookAssignment} from './deserializeIntoIosVppEBookAssignment';
import {deserializeIntoIpNamedLocation} from './deserializeIntoIpNamedLocation';
import {deserializeIntoItemActivity} from './deserializeIntoItemActivity';
import {deserializeIntoItemActivityStat} from './deserializeIntoItemActivityStat';
import {deserializeIntoItemAnalytics} from './deserializeIntoItemAnalytics';
import {deserializeIntoItemAttachment} from './deserializeIntoItemAttachment';
import {deserializeIntoLearningAssignment} from './deserializeIntoLearningAssignment';
import {deserializeIntoLearningContent} from './deserializeIntoLearningContent';
import {deserializeIntoLearningCourseActivity} from './deserializeIntoLearningCourseActivity';
import {deserializeIntoLearningProvider} from './deserializeIntoLearningProvider';
import {deserializeIntoLearningSelfInitiatedCourse} from './deserializeIntoLearningSelfInitiatedCourse';
import {deserializeIntoLicenseDetails} from './deserializeIntoLicenseDetails';
import {deserializeIntoLinkedResource} from './deserializeIntoLinkedResource';
import {deserializeIntoList} from './deserializeIntoList';
import {deserializeIntoListItem} from './deserializeIntoListItem';
import {deserializeIntoListItemVersion} from './deserializeIntoListItemVersion';
import {deserializeIntoLocalizedNotificationMessage} from './deserializeIntoLocalizedNotificationMessage';
import {deserializeIntoLongRunningOperation} from './deserializeIntoLongRunningOperation';
import {deserializeIntoMacOSCompliancePolicy} from './deserializeIntoMacOSCompliancePolicy';
import {deserializeIntoMacOSCustomConfiguration} from './deserializeIntoMacOSCustomConfiguration';
import {deserializeIntoMacOSDeviceFeaturesConfiguration} from './deserializeIntoMacOSDeviceFeaturesConfiguration';
import {deserializeIntoMacOSGeneralDeviceConfiguration} from './deserializeIntoMacOSGeneralDeviceConfiguration';
import {deserializeIntoMacOSLobApp} from './deserializeIntoMacOSLobApp';
import {deserializeIntoMacOSMicrosoftDefenderApp} from './deserializeIntoMacOSMicrosoftDefenderApp';
import {deserializeIntoMacOSMicrosoftEdgeApp} from './deserializeIntoMacOSMicrosoftEdgeApp';
import {deserializeIntoMacOSOfficeSuiteApp} from './deserializeIntoMacOSOfficeSuiteApp';
import {deserializeIntoMailAssessmentRequest} from './deserializeIntoMailAssessmentRequest';
import {deserializeIntoMailFolder} from './deserializeIntoMailFolder';
import {deserializeIntoMailSearchFolder} from './deserializeIntoMailSearchFolder';
import {deserializeIntoMalwareStateForWindowsDevice} from './deserializeIntoMalwareStateForWindowsDevice';
import {deserializeIntoManagedAndroidLobApp} from './deserializeIntoManagedAndroidLobApp';
import {deserializeIntoManagedAndroidStoreApp} from './deserializeIntoManagedAndroidStoreApp';
import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {deserializeIntoManagedAppConfiguration} from './deserializeIntoManagedAppConfiguration';
import {deserializeIntoManagedAppOperation} from './deserializeIntoManagedAppOperation';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {deserializeIntoManagedAppPolicyDeploymentSummary} from './deserializeIntoManagedAppPolicyDeploymentSummary';
import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {deserializeIntoManagedAppStatus} from './deserializeIntoManagedAppStatus';
import {deserializeIntoManagedAppStatusRaw} from './deserializeIntoManagedAppStatusRaw';
import {deserializeIntoManagedDevice} from './deserializeIntoManagedDevice';
import {deserializeIntoManagedDeviceMobileAppConfiguration} from './deserializeIntoManagedDeviceMobileAppConfiguration';
import {deserializeIntoManagedDeviceMobileAppConfigurationAssignment} from './deserializeIntoManagedDeviceMobileAppConfigurationAssignment';
import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus} from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus';
import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary} from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary';
import {deserializeIntoManagedDeviceMobileAppConfigurationUserStatus} from './deserializeIntoManagedDeviceMobileAppConfigurationUserStatus';
import {deserializeIntoManagedDeviceMobileAppConfigurationUserSummary} from './deserializeIntoManagedDeviceMobileAppConfigurationUserSummary';
import {deserializeIntoManagedDeviceOverview} from './deserializeIntoManagedDeviceOverview';
import {deserializeIntoManagedEBook} from './deserializeIntoManagedEBook';
import {deserializeIntoManagedEBookAssignment} from './deserializeIntoManagedEBookAssignment';
import {deserializeIntoManagedIOSLobApp} from './deserializeIntoManagedIOSLobApp';
import {deserializeIntoManagedIOSStoreApp} from './deserializeIntoManagedIOSStoreApp';
import {deserializeIntoManagedMobileApp} from './deserializeIntoManagedMobileApp';
import {deserializeIntoManagedMobileLobApp} from './deserializeIntoManagedMobileLobApp';
import {deserializeIntoMdmWindowsInformationProtectionPolicy} from './deserializeIntoMdmWindowsInformationProtectionPolicy';
import {deserializeIntoMeetingAttendanceReport} from './deserializeIntoMeetingAttendanceReport';
import {deserializeIntoMembershipOutlierInsight} from './deserializeIntoMembershipOutlierInsight';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {deserializeIntoMessageRule} from './deserializeIntoMessageRule';
import {deserializeIntoMicrosoftAccountUserConversationMember} from './deserializeIntoMicrosoftAccountUserConversationMember';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethod} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethod';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget';
import {deserializeIntoMicrosoftStoreForBusinessApp} from './deserializeIntoMicrosoftStoreForBusinessApp';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {deserializeIntoMobileAppAssignment} from './deserializeIntoMobileAppAssignment';
import {deserializeIntoMobileAppCategory} from './deserializeIntoMobileAppCategory';
import {deserializeIntoMobileAppContent} from './deserializeIntoMobileAppContent';
import {deserializeIntoMobileAppContentFile} from './deserializeIntoMobileAppContentFile';
import {deserializeIntoMobileAppTroubleshootingEvent} from './deserializeIntoMobileAppTroubleshootingEvent';
import {deserializeIntoMobileContainedApp} from './deserializeIntoMobileContainedApp';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {deserializeIntoMobileThreatDefenseConnector} from './deserializeIntoMobileThreatDefenseConnector';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoMuteParticipantOperation} from './deserializeIntoMuteParticipantOperation';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {deserializeIntoNotificationMessageTemplate} from './deserializeIntoNotificationMessageTemplate';
import {deserializeIntoOAuth2PermissionGrant} from './deserializeIntoOAuth2PermissionGrant';
import {deserializeIntoOfferShiftRequest} from './deserializeIntoOfferShiftRequest';
import {deserializeIntoOfficeGraphInsights} from './deserializeIntoOfficeGraphInsights';
import {deserializeIntoOnenote} from './deserializeIntoOnenote';
import {deserializeIntoOnenoteEntityBaseModel} from './deserializeIntoOnenoteEntityBaseModel';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {deserializeIntoOnenoteEntitySchemaObjectModel} from './deserializeIntoOnenoteEntitySchemaObjectModel';
import {deserializeIntoOnenoteOperation} from './deserializeIntoOnenoteOperation';
import {deserializeIntoOnenotePage} from './deserializeIntoOnenotePage';
import {deserializeIntoOnenoteResource} from './deserializeIntoOnenoteResource';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {deserializeIntoOnlineMeeting} from './deserializeIntoOnlineMeeting';
import {deserializeIntoOnPremisesConditionalAccessSettings} from './deserializeIntoOnPremisesConditionalAccessSettings';
import {deserializeIntoOnPremisesDirectorySynchronization} from './deserializeIntoOnPremisesDirectorySynchronization';
import {deserializeIntoOpenShift} from './deserializeIntoOpenShift';
import {deserializeIntoOpenShiftChangeRequest} from './deserializeIntoOpenShiftChangeRequest';
import {deserializeIntoOpenTypeExtension} from './deserializeIntoOpenTypeExtension';
import {deserializeIntoOperation} from './deserializeIntoOperation';
import {deserializeIntoOrganization} from './deserializeIntoOrganization';
import {deserializeIntoOrganizationalBranding} from './deserializeIntoOrganizationalBranding';
import {deserializeIntoOrganizationalBrandingLocalization} from './deserializeIntoOrganizationalBrandingLocalization';
import {deserializeIntoOrganizationalBrandingProperties} from './deserializeIntoOrganizationalBrandingProperties';
import {deserializeIntoOrgContact} from './deserializeIntoOrgContact';
import {deserializeIntoOutlookCategory} from './deserializeIntoOutlookCategory';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {deserializeIntoOutlookUser} from './deserializeIntoOutlookUser';
import {deserializeIntoParticipant} from './deserializeIntoParticipant';
import {deserializeIntoParticipantJoiningNotification} from './deserializeIntoParticipantJoiningNotification';
import {deserializeIntoParticipantLeftNotification} from './deserializeIntoParticipantLeftNotification';
import {deserializeIntoPasswordAuthenticationMethod} from './deserializeIntoPasswordAuthenticationMethod';
import {deserializeIntoPermission} from './deserializeIntoPermission';
import {deserializeIntoPermissionGrantConditionSet} from './deserializeIntoPermissionGrantConditionSet';
import {deserializeIntoPermissionGrantPolicy} from './deserializeIntoPermissionGrantPolicy';
import {deserializeIntoPerson} from './deserializeIntoPerson';
import {deserializeIntoPhoneAuthenticationMethod} from './deserializeIntoPhoneAuthenticationMethod';
import {deserializeIntoPinnedChatMessageInfo} from './deserializeIntoPinnedChatMessageInfo';
import {deserializeIntoPlace} from './deserializeIntoPlace';
import {deserializeIntoPlanner} from './deserializeIntoPlanner';
import {deserializeIntoPlannerAssignedToTaskBoardTaskFormat} from './deserializeIntoPlannerAssignedToTaskBoardTaskFormat';
import {deserializeIntoPlannerBucket} from './deserializeIntoPlannerBucket';
import {deserializeIntoPlannerBucketTaskBoardTaskFormat} from './deserializeIntoPlannerBucketTaskBoardTaskFormat';
import {deserializeIntoPlannerGroup} from './deserializeIntoPlannerGroup';
import {deserializeIntoPlannerPlan} from './deserializeIntoPlannerPlan';
import {deserializeIntoPlannerPlanDetails} from './deserializeIntoPlannerPlanDetails';
import {deserializeIntoPlannerProgressTaskBoardTaskFormat} from './deserializeIntoPlannerProgressTaskBoardTaskFormat';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {deserializeIntoPlannerTaskDetails} from './deserializeIntoPlannerTaskDetails';
import {deserializeIntoPlannerUser} from './deserializeIntoPlannerUser';
import {deserializeIntoPlayPromptOperation} from './deserializeIntoPlayPromptOperation';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {deserializeIntoPolicyRoot} from './deserializeIntoPolicyRoot';
import {deserializeIntoPost} from './deserializeIntoPost';
import {deserializeIntoPresence} from './deserializeIntoPresence';
import {deserializeIntoPrintConnector} from './deserializeIntoPrintConnector';
import {deserializeIntoPrintDocument} from './deserializeIntoPrintDocument';
import {deserializeIntoPrinter} from './deserializeIntoPrinter';
import {deserializeIntoPrinterBase} from './deserializeIntoPrinterBase';
import {deserializeIntoPrinterCreateOperation} from './deserializeIntoPrinterCreateOperation';
import {deserializeIntoPrinterShare} from './deserializeIntoPrinterShare';
import {deserializeIntoPrintJob} from './deserializeIntoPrintJob';
import {deserializeIntoPrintOperation} from './deserializeIntoPrintOperation';
import {deserializeIntoPrintService} from './deserializeIntoPrintService';
import {deserializeIntoPrintServiceEndpoint} from './deserializeIntoPrintServiceEndpoint';
import {deserializeIntoPrintTask} from './deserializeIntoPrintTask';
import {deserializeIntoPrintTaskDefinition} from './deserializeIntoPrintTaskDefinition';
import {deserializeIntoPrintTaskTrigger} from './deserializeIntoPrintTaskTrigger';
import {deserializeIntoPrintUsage} from './deserializeIntoPrintUsage';
import {deserializeIntoPrintUsageByPrinter} from './deserializeIntoPrintUsageByPrinter';
import {deserializeIntoPrintUsageByUser} from './deserializeIntoPrintUsageByUser';
import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {deserializeIntoProvisioningObjectSummary} from './deserializeIntoProvisioningObjectSummary';
import {deserializeIntoRbacApplication} from './deserializeIntoRbacApplication';
import {deserializeIntoRecordOperation} from './deserializeIntoRecordOperation';
import {deserializeIntoReferenceAttachment} from './deserializeIntoReferenceAttachment';
import {deserializeIntoRemoteAssistancePartner} from './deserializeIntoRemoteAssistancePartner';
import {deserializeIntoRequest} from './deserializeIntoRequest';
import {deserializeIntoResourceOperation} from './deserializeIntoResourceOperation';
import {deserializeIntoResourceSpecificPermissionGrant} from './deserializeIntoResourceSpecificPermissionGrant';
import {deserializeIntoRichLongRunningOperation} from './deserializeIntoRichLongRunningOperation';
import {deserializeIntoRiskDetection} from './deserializeIntoRiskDetection';
import {deserializeIntoRiskyServicePrincipal} from './deserializeIntoRiskyServicePrincipal';
import {deserializeIntoRiskyServicePrincipalHistoryItem} from './deserializeIntoRiskyServicePrincipalHistoryItem';
import {deserializeIntoRiskyUser} from './deserializeIntoRiskyUser';
import {deserializeIntoRiskyUserHistoryItem} from './deserializeIntoRiskyUserHistoryItem';
import {deserializeIntoRoleAssignment} from './deserializeIntoRoleAssignment';
import {deserializeIntoRoleDefinition} from './deserializeIntoRoleDefinition';
import {deserializeIntoRoom} from './deserializeIntoRoom';
import {deserializeIntoRoomList} from './deserializeIntoRoomList';
import {deserializeIntoSamlOrWsFedExternalDomainFederation} from './deserializeIntoSamlOrWsFedExternalDomainFederation';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {deserializeIntoSchedule} from './deserializeIntoSchedule';
import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {deserializeIntoSchedulingGroup} from './deserializeIntoSchedulingGroup';
import {deserializeIntoSchemaExtension} from './deserializeIntoSchemaExtension';
import {deserializeIntoScopedRoleMembership} from './deserializeIntoScopedRoleMembership';
import {deserializeIntoSearchEntity} from './deserializeIntoSearchEntity';
import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {deserializeIntoSecureScore} from './deserializeIntoSecureScore';
import {deserializeIntoSecureScoreControlProfile} from './deserializeIntoSecureScoreControlProfile';
import {deserializeIntoSecurity} from './deserializeIntoSecurity';
import {deserializeIntoSecurityReportsRoot} from './deserializeIntoSecurityReportsRoot';
import {deserializeIntoServiceAnnouncement} from './deserializeIntoServiceAnnouncement';
import {deserializeIntoServiceAnnouncementAttachment} from './deserializeIntoServiceAnnouncementAttachment';
import {deserializeIntoServiceAnnouncementBase} from './deserializeIntoServiceAnnouncementBase';
import {deserializeIntoServiceHealth} from './deserializeIntoServiceHealth';
import {deserializeIntoServiceHealthIssue} from './deserializeIntoServiceHealthIssue';
import {deserializeIntoServicePrincipal} from './deserializeIntoServicePrincipal';
import {deserializeIntoServicePrincipalRiskDetection} from './deserializeIntoServicePrincipalRiskDetection';
import {deserializeIntoServiceUpdateMessage} from './deserializeIntoServiceUpdateMessage';
import {deserializeIntoSettingStateDeviceSummary} from './deserializeIntoSettingStateDeviceSummary';
import {deserializeIntoSharedDriveItem} from './deserializeIntoSharedDriveItem';
import {deserializeIntoSharedInsight} from './deserializeIntoSharedInsight';
import {deserializeIntoSharedPCConfiguration} from './deserializeIntoSharedPCConfiguration';
import {deserializeIntoSharedWithChannelTeamInfo} from './deserializeIntoSharedWithChannelTeamInfo';
import {deserializeIntoSharepoint} from './deserializeIntoSharepoint';
import {deserializeIntoSharepointSettings} from './deserializeIntoSharepointSettings';
import {deserializeIntoShift} from './deserializeIntoShift';
import {deserializeIntoShiftPreferences} from './deserializeIntoShiftPreferences';
import {deserializeIntoSignIn} from './deserializeIntoSignIn';
import {deserializeIntoSimulation} from './deserializeIntoSimulation';
import {deserializeIntoSimulationAutomation} from './deserializeIntoSimulationAutomation';
import {deserializeIntoSimulationAutomationRun} from './deserializeIntoSimulationAutomationRun';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {deserializeIntoSite} from './deserializeIntoSite';
import {deserializeIntoSkypeForBusinessUserConversationMember} from './deserializeIntoSkypeForBusinessUserConversationMember';
import {deserializeIntoSkypeUserConversationMember} from './deserializeIntoSkypeUserConversationMember';
import {deserializeIntoSmsAuthenticationMethodConfiguration} from './deserializeIntoSmsAuthenticationMethodConfiguration';
import {deserializeIntoSmsAuthenticationMethodTarget} from './deserializeIntoSmsAuthenticationMethodTarget';
import {deserializeIntoSocialIdentityProvider} from './deserializeIntoSocialIdentityProvider';
import {deserializeIntoSoftwareOathAuthenticationMethod} from './deserializeIntoSoftwareOathAuthenticationMethod';
import {deserializeIntoSoftwareOathAuthenticationMethodConfiguration} from './deserializeIntoSoftwareOathAuthenticationMethodConfiguration';
import {deserializeIntoSoftwareUpdateStatusSummary} from './deserializeIntoSoftwareUpdateStatusSummary';
import {deserializeIntoStartHoldMusicOperation} from './deserializeIntoStartHoldMusicOperation';
import {deserializeIntoStopHoldMusicOperation} from './deserializeIntoStopHoldMusicOperation';
import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {deserializeIntoSubjectRightsRequest} from './deserializeIntoSubjectRightsRequest';
import {deserializeIntoSubscribedSku} from './deserializeIntoSubscribedSku';
import {deserializeIntoSubscribeToToneOperation} from './deserializeIntoSubscribeToToneOperation';
import {deserializeIntoSubscription} from './deserializeIntoSubscription';
import {deserializeIntoSwapShiftsChangeRequest} from './deserializeIntoSwapShiftsChangeRequest';
import {deserializeIntoSynchronization} from './deserializeIntoSynchronization';
import {deserializeIntoSynchronizationJob} from './deserializeIntoSynchronizationJob';
import {deserializeIntoSynchronizationSchema} from './deserializeIntoSynchronizationSchema';
import {deserializeIntoSynchronizationTemplate} from './deserializeIntoSynchronizationTemplate';
import {deserializeIntoTargetedManagedAppConfiguration} from './deserializeIntoTargetedManagedAppConfiguration';
import {deserializeIntoTargetedManagedAppPolicyAssignment} from './deserializeIntoTargetedManagedAppPolicyAssignment';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {deserializeIntoTaskFileAttachment} from './deserializeIntoTaskFileAttachment';
import {deserializeIntoTeam} from './deserializeIntoTeam';
import {deserializeIntoTeamInfo} from './deserializeIntoTeamInfo';
import {deserializeIntoTeamsApp} from './deserializeIntoTeamsApp';
import {deserializeIntoTeamsAppDefinition} from './deserializeIntoTeamsAppDefinition';
import {deserializeIntoTeamsAppInstallation} from './deserializeIntoTeamsAppInstallation';
import {deserializeIntoTeamsAsyncOperation} from './deserializeIntoTeamsAsyncOperation';
import {deserializeIntoTeamsTab} from './deserializeIntoTeamsTab';
import {deserializeIntoTeamsTemplate} from './deserializeIntoTeamsTemplate';
import {deserializeIntoTeamwork} from './deserializeIntoTeamwork';
import {deserializeIntoTeamworkBot} from './deserializeIntoTeamworkBot';
import {deserializeIntoTeamworkHostedContent} from './deserializeIntoTeamworkHostedContent';
import {deserializeIntoTeamworkTag} from './deserializeIntoTeamworkTag';
import {deserializeIntoTeamworkTagMember} from './deserializeIntoTeamworkTagMember';
import {deserializeIntoTelecomExpenseManagementPartner} from './deserializeIntoTelecomExpenseManagementPartner';
import {deserializeIntoTemporaryAccessPassAuthenticationMethod} from './deserializeIntoTemporaryAccessPassAuthenticationMethod';
import {deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration} from './deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration';
import {deserializeIntoTenantAppManagementPolicy} from './deserializeIntoTenantAppManagementPolicy';
import {deserializeIntoTermsAndConditions} from './deserializeIntoTermsAndConditions';
import {deserializeIntoTermsAndConditionsAcceptanceStatus} from './deserializeIntoTermsAndConditionsAcceptanceStatus';
import {deserializeIntoTermsAndConditionsAssignment} from './deserializeIntoTermsAndConditionsAssignment';
import {deserializeIntoTermsOfUseContainer} from './deserializeIntoTermsOfUseContainer';
import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {deserializeIntoThreatAssessmentResult} from './deserializeIntoThreatAssessmentResult';
import {deserializeIntoThumbnailSet} from './deserializeIntoThumbnailSet';
import {deserializeIntoTimeOff} from './deserializeIntoTimeOff';
import {deserializeIntoTimeOffReason} from './deserializeIntoTimeOffReason';
import {deserializeIntoTimeOffRequest} from './deserializeIntoTimeOffRequest';
import {deserializeIntoTodo} from './deserializeIntoTodo';
import {deserializeIntoTodoTask} from './deserializeIntoTodoTask';
import {deserializeIntoTodoTaskList} from './deserializeIntoTodoTaskList';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {deserializeIntoTrending} from './deserializeIntoTrending';
import {deserializeIntoUnifiedRbacResourceAction} from './deserializeIntoUnifiedRbacResourceAction';
import {deserializeIntoUnifiedRbacResourceNamespace} from './deserializeIntoUnifiedRbacResourceNamespace';
import {deserializeIntoUnifiedRoleAssignment} from './deserializeIntoUnifiedRoleAssignment';
import {deserializeIntoUnifiedRoleAssignmentSchedule} from './deserializeIntoUnifiedRoleAssignmentSchedule';
import {deserializeIntoUnifiedRoleAssignmentScheduleInstance} from './deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import {deserializeIntoUnifiedRoleAssignmentScheduleRequest} from './deserializeIntoUnifiedRoleAssignmentScheduleRequest';
import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from './deserializeIntoUnifiedRoleEligibilitySchedule';
import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from './deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {deserializeIntoUnifiedRoleEligibilityScheduleRequest} from './deserializeIntoUnifiedRoleEligibilityScheduleRequest';
import {deserializeIntoUnifiedRoleManagementPolicy} from './deserializeIntoUnifiedRoleManagementPolicy';
import {deserializeIntoUnifiedRoleManagementPolicyApprovalRule} from './deserializeIntoUnifiedRoleManagementPolicyApprovalRule';
import {deserializeIntoUnifiedRoleManagementPolicyAssignment} from './deserializeIntoUnifiedRoleManagementPolicyAssignment';
import {deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule} from './deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule';
import {deserializeIntoUnifiedRoleManagementPolicyEnablementRule} from './deserializeIntoUnifiedRoleManagementPolicyEnablementRule';
import {deserializeIntoUnifiedRoleManagementPolicyExpirationRule} from './deserializeIntoUnifiedRoleManagementPolicyExpirationRule';
import {deserializeIntoUnifiedRoleManagementPolicyNotificationRule} from './deserializeIntoUnifiedRoleManagementPolicyNotificationRule';
import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {deserializeIntoUnifiedRoleScheduleBase} from './deserializeIntoUnifiedRoleScheduleBase';
import {deserializeIntoUnifiedRoleScheduleInstanceBase} from './deserializeIntoUnifiedRoleScheduleInstanceBase';
import {deserializeIntoUnmuteParticipantOperation} from './deserializeIntoUnmuteParticipantOperation';
import {deserializeIntoUpdateRecordingStatusOperation} from './deserializeIntoUpdateRecordingStatusOperation';
import {deserializeIntoUrlAssessmentRequest} from './deserializeIntoUrlAssessmentRequest';
import {deserializeIntoUsedInsight} from './deserializeIntoUsedInsight';
import {deserializeIntoUser} from './deserializeIntoUser';
import {deserializeIntoUserActivity} from './deserializeIntoUserActivity';
import {deserializeIntoUserConsentRequest} from './deserializeIntoUserConsentRequest';
import {deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance} from './deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance';
import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance} from './deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance} from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance';
import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails} from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance} from './deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance';
import {deserializeIntoUserExperienceAnalyticsBaseline} from './deserializeIntoUserExperienceAnalyticsBaseline';
import {deserializeIntoUserExperienceAnalyticsCategory} from './deserializeIntoUserExperienceAnalyticsCategory';
import {deserializeIntoUserExperienceAnalyticsDevicePerformance} from './deserializeIntoUserExperienceAnalyticsDevicePerformance';
import {deserializeIntoUserExperienceAnalyticsDeviceScores} from './deserializeIntoUserExperienceAnalyticsDeviceScores';
import {deserializeIntoUserExperienceAnalyticsDeviceStartupHistory} from './deserializeIntoUserExperienceAnalyticsDeviceStartupHistory';
import {deserializeIntoUserExperienceAnalyticsDeviceStartupProcess} from './deserializeIntoUserExperienceAnalyticsDeviceStartupProcess';
import {deserializeIntoUserExperienceAnalyticsMetric} from './deserializeIntoUserExperienceAnalyticsMetric';
import {deserializeIntoUserExperienceAnalyticsMetricHistory} from './deserializeIntoUserExperienceAnalyticsMetricHistory';
import {deserializeIntoUserExperienceAnalyticsModelScores} from './deserializeIntoUserExperienceAnalyticsModelScores';
import {deserializeIntoUserExperienceAnalyticsOverview} from './deserializeIntoUserExperienceAnalyticsOverview';
import {deserializeIntoUserExperienceAnalyticsScoreHistory} from './deserializeIntoUserExperienceAnalyticsScoreHistory';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {deserializeIntoUserFlowLanguageConfiguration} from './deserializeIntoUserFlowLanguageConfiguration';
import {deserializeIntoUserFlowLanguagePage} from './deserializeIntoUserFlowLanguagePage';
import {deserializeIntoUserInstallStateSummary} from './deserializeIntoUserInstallStateSummary';
import {deserializeIntoUserRegistrationDetails} from './deserializeIntoUserRegistrationDetails';
import {deserializeIntoUserScopeTeamsAppInstallation} from './deserializeIntoUserScopeTeamsAppInstallation';
import {deserializeIntoUserSettings} from './deserializeIntoUserSettings';
import {deserializeIntoUserSignInInsight} from './deserializeIntoUserSignInInsight';
import {deserializeIntoUserTeamwork} from './deserializeIntoUserTeamwork';
import {deserializeIntoVoiceAuthenticationMethodConfiguration} from './deserializeIntoVoiceAuthenticationMethodConfiguration';
import {deserializeIntoVppToken} from './deserializeIntoVppToken';
import {deserializeIntoWebApp} from './deserializeIntoWebApp';
import {deserializeIntoWin32LobApp} from './deserializeIntoWin32LobApp';
import {deserializeIntoWindows10CompliancePolicy} from './deserializeIntoWindows10CompliancePolicy';
import {deserializeIntoWindows10CustomConfiguration} from './deserializeIntoWindows10CustomConfiguration';
import {deserializeIntoWindows10EndpointProtectionConfiguration} from './deserializeIntoWindows10EndpointProtectionConfiguration';
import {deserializeIntoWindows10EnterpriseModernAppManagementConfiguration} from './deserializeIntoWindows10EnterpriseModernAppManagementConfiguration';
import {deserializeIntoWindows10GeneralConfiguration} from './deserializeIntoWindows10GeneralConfiguration';
import {deserializeIntoWindows10MobileCompliancePolicy} from './deserializeIntoWindows10MobileCompliancePolicy';
import {deserializeIntoWindows10SecureAssessmentConfiguration} from './deserializeIntoWindows10SecureAssessmentConfiguration';
import {deserializeIntoWindows10TeamGeneralConfiguration} from './deserializeIntoWindows10TeamGeneralConfiguration';
import {deserializeIntoWindows81CompliancePolicy} from './deserializeIntoWindows81CompliancePolicy';
import {deserializeIntoWindows81GeneralConfiguration} from './deserializeIntoWindows81GeneralConfiguration';
import {deserializeIntoWindowsAppX} from './deserializeIntoWindowsAppX';
import {deserializeIntoWindowsAutopilotDeviceIdentity} from './deserializeIntoWindowsAutopilotDeviceIdentity';
import {deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration} from './deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration';
import {deserializeIntoWindowsDeviceMalwareState} from './deserializeIntoWindowsDeviceMalwareState';
import {deserializeIntoWindowsHelloForBusinessAuthenticationMethod} from './deserializeIntoWindowsHelloForBusinessAuthenticationMethod';
import {deserializeIntoWindowsInformationProtection} from './deserializeIntoWindowsInformationProtection';
import {deserializeIntoWindowsInformationProtectionAppLearningSummary} from './deserializeIntoWindowsInformationProtectionAppLearningSummary';
import {deserializeIntoWindowsInformationProtectionAppLockerFile} from './deserializeIntoWindowsInformationProtectionAppLockerFile';
import {deserializeIntoWindowsInformationProtectionNetworkLearningSummary} from './deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import {deserializeIntoWindowsInformationProtectionPolicy} from './deserializeIntoWindowsInformationProtectionPolicy';
import {deserializeIntoWindowsMalwareInformation} from './deserializeIntoWindowsMalwareInformation';
import {deserializeIntoWindowsMicrosoftEdgeApp} from './deserializeIntoWindowsMicrosoftEdgeApp';
import {deserializeIntoWindowsMobileMSI} from './deserializeIntoWindowsMobileMSI';
import {deserializeIntoWindowsPhone81CompliancePolicy} from './deserializeIntoWindowsPhone81CompliancePolicy';
import {deserializeIntoWindowsPhone81CustomConfiguration} from './deserializeIntoWindowsPhone81CustomConfiguration';
import {deserializeIntoWindowsPhone81GeneralConfiguration} from './deserializeIntoWindowsPhone81GeneralConfiguration';
import {deserializeIntoWindowsProtectionState} from './deserializeIntoWindowsProtectionState';
import {deserializeIntoWindowsUniversalAppX} from './deserializeIntoWindowsUniversalAppX';
import {deserializeIntoWindowsUniversalAppXContainedApp} from './deserializeIntoWindowsUniversalAppXContainedApp';
import {deserializeIntoWindowsUpdateForBusinessConfiguration} from './deserializeIntoWindowsUpdateForBusinessConfiguration';
import {deserializeIntoWindowsWebApp} from './deserializeIntoWindowsWebApp';
import {deserializeIntoWorkbook} from './deserializeIntoWorkbook';
import {deserializeIntoWorkbookApplication} from './deserializeIntoWorkbookApplication';
import {deserializeIntoWorkbookChart} from './deserializeIntoWorkbookChart';
import {deserializeIntoWorkbookChartAreaFormat} from './deserializeIntoWorkbookChartAreaFormat';
import {deserializeIntoWorkbookChartAxes} from './deserializeIntoWorkbookChartAxes';
import {deserializeIntoWorkbookChartAxis} from './deserializeIntoWorkbookChartAxis';
import {deserializeIntoWorkbookChartAxisFormat} from './deserializeIntoWorkbookChartAxisFormat';
import {deserializeIntoWorkbookChartAxisTitle} from './deserializeIntoWorkbookChartAxisTitle';
import {deserializeIntoWorkbookChartAxisTitleFormat} from './deserializeIntoWorkbookChartAxisTitleFormat';
import {deserializeIntoWorkbookChartDataLabelFormat} from './deserializeIntoWorkbookChartDataLabelFormat';
import {deserializeIntoWorkbookChartDataLabels} from './deserializeIntoWorkbookChartDataLabels';
import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {deserializeIntoWorkbookChartGridlines} from './deserializeIntoWorkbookChartGridlines';
import {deserializeIntoWorkbookChartGridlinesFormat} from './deserializeIntoWorkbookChartGridlinesFormat';
import {deserializeIntoWorkbookChartLegend} from './deserializeIntoWorkbookChartLegend';
import {deserializeIntoWorkbookChartLegendFormat} from './deserializeIntoWorkbookChartLegendFormat';
import {deserializeIntoWorkbookChartLineFormat} from './deserializeIntoWorkbookChartLineFormat';
import {deserializeIntoWorkbookChartPoint} from './deserializeIntoWorkbookChartPoint';
import {deserializeIntoWorkbookChartPointFormat} from './deserializeIntoWorkbookChartPointFormat';
import {deserializeIntoWorkbookChartSeries} from './deserializeIntoWorkbookChartSeries';
import {deserializeIntoWorkbookChartSeriesFormat} from './deserializeIntoWorkbookChartSeriesFormat';
import {deserializeIntoWorkbookChartTitle} from './deserializeIntoWorkbookChartTitle';
import {deserializeIntoWorkbookChartTitleFormat} from './deserializeIntoWorkbookChartTitleFormat';
import {deserializeIntoWorkbookComment} from './deserializeIntoWorkbookComment';
import {deserializeIntoWorkbookCommentReply} from './deserializeIntoWorkbookCommentReply';
import {deserializeIntoWorkbookFilter} from './deserializeIntoWorkbookFilter';
import {deserializeIntoWorkbookFormatProtection} from './deserializeIntoWorkbookFormatProtection';
import {deserializeIntoWorkbookFunctionResult} from './deserializeIntoWorkbookFunctionResult';
import {deserializeIntoWorkbookFunctions} from './deserializeIntoWorkbookFunctions';
import {deserializeIntoWorkbookNamedItem} from './deserializeIntoWorkbookNamedItem';
import {deserializeIntoWorkbookOperation} from './deserializeIntoWorkbookOperation';
import {deserializeIntoWorkbookPivotTable} from './deserializeIntoWorkbookPivotTable';
import {deserializeIntoWorkbookRange} from './deserializeIntoWorkbookRange';
import {deserializeIntoWorkbookRangeBorder} from './deserializeIntoWorkbookRangeBorder';
import {deserializeIntoWorkbookRangeFill} from './deserializeIntoWorkbookRangeFill';
import {deserializeIntoWorkbookRangeFont} from './deserializeIntoWorkbookRangeFont';
import {deserializeIntoWorkbookRangeFormat} from './deserializeIntoWorkbookRangeFormat';
import {deserializeIntoWorkbookRangeSort} from './deserializeIntoWorkbookRangeSort';
import {deserializeIntoWorkbookRangeView} from './deserializeIntoWorkbookRangeView';
import {deserializeIntoWorkbookTable} from './deserializeIntoWorkbookTable';
import {deserializeIntoWorkbookTableColumn} from './deserializeIntoWorkbookTableColumn';
import {deserializeIntoWorkbookTableRow} from './deserializeIntoWorkbookTableRow';
import {deserializeIntoWorkbookTableSort} from './deserializeIntoWorkbookTableSort';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {deserializeIntoWorkbookWorksheetProtection} from './deserializeIntoWorkbookWorksheetProtection';
import {deserializeIntoWorkforceIntegration} from './deserializeIntoWorkforceIntegration';
import {deserializeIntoX509CertificateAuthenticationMethodConfiguration} from './deserializeIntoX509CertificateAuthenticationMethodConfiguration';
import {ConnectionOperation, ExternalActivity, ExternalActivityResult, ExternalConnection, ExternalGroup, ExternalItem, Identity, Schema} from './externalConnectors/';
import {deserializeIntoConnectionOperation} from './externalConnectors/deserializeIntoConnectionOperation';
import {deserializeIntoExternalActivity} from './externalConnectors/deserializeIntoExternalActivity';
import {deserializeIntoExternalActivityResult} from './externalConnectors/deserializeIntoExternalActivityResult';
import {deserializeIntoExternalConnection} from './externalConnectors/deserializeIntoExternalConnection';
import {deserializeIntoExternalGroup} from './externalConnectors/deserializeIntoExternalGroup';
import {deserializeIntoExternalItem} from './externalConnectors/deserializeIntoExternalItem';
import {deserializeIntoIdentity} from './externalConnectors/deserializeIntoIdentity';
import {deserializeIntoSchema} from './externalConnectors/deserializeIntoSchema';
import {CustomTaskExtension, LifecycleManagementSettings, LifecycleWorkflowsContainer, Run, Task, TaskDefinition, TaskProcessingResult, TaskReport, UserProcessingResult, WorkflowTemplate} from './identityGovernance/';
import {deserializeIntoCustomTaskExtension} from './identityGovernance/deserializeIntoCustomTaskExtension';
import {deserializeIntoLifecycleManagementSettings} from './identityGovernance/deserializeIntoLifecycleManagementSettings';
import {deserializeIntoLifecycleWorkflowsContainer} from './identityGovernance/deserializeIntoLifecycleWorkflowsContainer';
import {deserializeIntoRun} from './identityGovernance/deserializeIntoRun';
import {deserializeIntoTask} from './identityGovernance/deserializeIntoTask';
import {deserializeIntoTaskDefinition} from './identityGovernance/deserializeIntoTaskDefinition';
import {deserializeIntoTaskProcessingResult} from './identityGovernance/deserializeIntoTaskProcessingResult';
import {deserializeIntoTaskReport} from './identityGovernance/deserializeIntoTaskReport';
import {deserializeIntoUserProcessingResult} from './identityGovernance/deserializeIntoUserProcessingResult';
import {deserializeIntoWorkflowTemplate} from './identityGovernance/deserializeIntoWorkflowTemplate';
import {AadUserConversationMember, AccessPackage, AccessPackageAssignment, AccessPackageAssignmentPolicy, AccessPackageAssignmentRequest, AccessPackageCatalog, AccessPackageMultipleChoiceQuestion, AccessPackageQuestion, AccessPackageSubject, AccessPackageTextInputQuestion, AccessReviewHistoryDefinition, AccessReviewHistoryInstance, AccessReviewInstance, AccessReviewInstanceDecisionItem, AccessReviewReviewer, AccessReviewScheduleDefinition, AccessReviewSet, AccessReviewStage, ActivityBasedTimeoutPolicy, ActivityHistoryItem, AddLargeGalleryViewOperation, AdminConsentRequestPolicy, AdministrativeUnit, Agreement, AgreementAcceptance, AgreementFile, AgreementFileLocalization, AgreementFileProperties, AgreementFileVersion, Alert as If0a24da04dcf43493b097a73e5ab580d12996b28095b36551b2c7e6a8420acf3, AllowedValue, AndroidCompliancePolicy, AndroidCustomConfiguration, AndroidGeneralDeviceConfiguration, AndroidLobApp, AndroidManagedAppProtection, AndroidManagedAppRegistration, AndroidStoreApp, AndroidWorkProfileCompliancePolicy, AndroidWorkProfileCustomConfiguration, AndroidWorkProfileGeneralDeviceConfiguration, AnonymousGuestConversationMember, AppCatalogs, AppConsentApprovalRoute, AppConsentRequest, AppleDeviceFeaturesConfigurationBase, AppleManagedIdentityProvider, ApplePushNotificationCertificate, Application, ApplicationTemplate, AppLogCollectionRequest, AppManagementPolicy, AppRoleAssignment, Approval, ApprovalStage, AppScope, AssociatedTeamInfo, Attachment, AttachmentBase, AttachmentSession, AttackSimulationRoot, AttendanceRecord, AttributeMappingFunctionSchema, AttributeSet, AudioRoutingGroup, AuditEvent, AuditLogRoot, Authentication, AuthenticationCombinationConfiguration, AuthenticationContextClassReference, AuthenticationFlowsPolicy, AuthenticationMethod, AuthenticationMethodConfiguration, AuthenticationMethodModeDetail, AuthenticationMethodsPolicy, AuthenticationMethodsRoot, AuthenticationMethodTarget, AuthenticationStrengthPolicy, AuthenticationStrengthRoot, AuthoredNote, AuthorizationPolicy, AzureCommunicationServicesUserConversationMember, B2xIdentityUserFlow, BaseItem, BaseItemVersion, Bitlocker, BitlockerRecoveryKey, BookingAppointment, BookingBusiness, BookingCurrency, BookingCustomer, BookingCustomerBase, BookingCustomQuestion, BookingService, BookingStaffMember, BookingStaffMemberBase, BrowserSharedCookie, BrowserSite, BrowserSiteList, BuiltInIdentityProvider, Calendar, CalendarGroup, CalendarPermission, CalendarSharingMessage, Call, CancelMediaProcessingOperation, CertificateBasedAuthConfiguration, ChangeTrackedEntity, Channel, Chat, ChatMessage, ChatMessageHostedContent, ChatMessageInfo, ChecklistItem, ClaimsMappingPolicy, ColumnDefinition, ColumnLink, CommsOperation, ComplianceManagementPartner, ConditionalAccessPolicy, ConditionalAccessRoot, ConditionalAccessTemplate, ConnectedOrganization, Contact, ContactFolder, ContentSharingSession, ContentType, Contract, Conversation, ConversationMember, ConversationThread, CountryNamedLocation, CrossTenantAccessPolicy, CrossTenantAccessPolicyConfigurationDefault, CustomCalloutExtension, CustomSecurityAttributeDefinition, DataPolicyOperation, DefaultManagedAppProtection, DelegatedAdminAccessAssignment, DelegatedAdminCustomer, DelegatedAdminRelationship, DelegatedAdminRelationshipOperation, DelegatedAdminRelationshipRequest, DelegatedAdminServiceManagementDetail, DelegatedPermissionClassification, DeletedItemContainer, DeletedTeam, DetectedApp, Device, DeviceAndAppManagementRoleAssignment, DeviceAndAppManagementRoleDefinition, DeviceAppManagement, DeviceCategory, DeviceComplianceActionItem, DeviceComplianceDeviceOverview, DeviceComplianceDeviceStatus, DeviceCompliancePolicy, DeviceCompliancePolicyAssignment, DeviceCompliancePolicyDeviceStateSummary, DeviceCompliancePolicySettingStateSummary, DeviceCompliancePolicyState, DeviceComplianceScheduledActionForRule, DeviceComplianceSettingState, DeviceComplianceUserOverview, DeviceComplianceUserStatus, DeviceConfiguration, DeviceConfigurationAssignment, DeviceConfigurationDeviceOverview, DeviceConfigurationDeviceStateSummary, DeviceConfigurationDeviceStatus, DeviceConfigurationState, DeviceConfigurationUserOverview, DeviceConfigurationUserStatus, DeviceEnrollmentConfiguration, DeviceEnrollmentLimitConfiguration, DeviceEnrollmentPlatformRestrictionsConfiguration, DeviceEnrollmentWindowsHelloForBusinessConfiguration, DeviceInstallState, DeviceLogCollectionResponse, DeviceManagement, DeviceManagementExchangeConnector, DeviceManagementExportJob, DeviceManagementPartner, DeviceManagementReports, DeviceManagementTroubleshootingEvent, Directory, DirectoryAudit, DirectoryDefinition, DirectoryObject, DirectoryObjectPartnerReference, DirectoryRole, DirectoryRoleTemplate, DocumentSetVersion, Domain, DomainDnsCnameRecord, DomainDnsMxRecord, DomainDnsRecord, DomainDnsSrvRecord, DomainDnsTxtRecord, DomainDnsUnavailableRecord, Drive, DriveItem, DriveItemVersion, EBookInstallSummary, Edge, EditionUpgradeConfiguration, EducationAssignment, EducationAssignmentDefaults, EducationAssignmentResource, EducationAssignmentSettings, EducationCategory, EducationClass, EducationFeedbackOutcome, EducationFeedbackResourceOutcome, EducationOrganization, EducationOutcome, EducationPointsOutcome, EducationRubric, EducationRubricOutcome, EducationSchool, EducationSubmission, EducationSubmissionResource, EducationUser, EmailAuthenticationMethod, EmailAuthenticationMethodConfiguration, EmailFileAssessmentRequest, EmployeeExperienceUser, Endpoint, EnrollmentConfigurationAssignment, EnrollmentTroubleshootingEvent, EnterpriseCodeSigningCertificate, EntitlementManagement, EntitlementManagementSettings, Entity, Event, EventMessage, EventMessageRequest, EventMessageResponse, Extension, ExtensionProperty, ExternalDomainName, FeatureRolloutPolicy, FederatedIdentityCredential, Fido2AuthenticationMethod, Fido2AuthenticationMethodConfiguration, Fido2CombinationConfiguration, FieldValueSet, FileAssessmentRequest, FileAttachment, FilterOperatorSchema, GovernanceInsight, Group as If81e992e90f78336bbfda54d800c09bc303718f03e7e7b76571b58325dc9adad, GroupLifecyclePolicy, GroupSetting, GroupSettingTemplate, HomeRealmDiscoveryPolicy, IdentityApiConnector, IdentityBuiltInUserFlowAttribute, IdentityContainer, IdentityCustomUserFlowAttribute, IdentityProvider, IdentityProviderBase, IdentitySecurityDefaultsEnforcementPolicy, IdentityUserFlow, IdentityUserFlowAttribute, IdentityUserFlowAttributeAssignment, ImportedWindowsAutopilotDeviceIdentity, ImportedWindowsAutopilotDeviceIdentityUpload, InferenceClassification, InferenceClassificationOverride, InternalDomainFederation, InternetExplorerMode, Invitation, InviteParticipantsOperation, IosCertificateProfile, IosCompliancePolicy, IosCustomConfiguration, IosDeviceFeaturesConfiguration, IosGeneralDeviceConfiguration, IosiPadOSWebClip, IosLobApp, IosLobAppProvisioningConfigurationAssignment, IosManagedAppProtection, IosManagedAppRegistration, IosMobileAppConfiguration, IosStoreApp, IosUpdateConfiguration, IosUpdateDeviceStatus, IosVppApp, IosVppEBook, IosVppEBookAssignment, IpNamedLocation, ItemActivity, ItemActivityStat, ItemAnalytics, ItemAttachment, LearningAssignment, LearningContent, LearningCourseActivity, LearningProvider, LearningSelfInitiatedCourse, LicenseDetails, LinkedResource, List, ListItem, ListItemVersion, LocalizedNotificationMessage, LongRunningOperation, MacOSCompliancePolicy, MacOSCustomConfiguration, MacOSDeviceFeaturesConfiguration, MacOSGeneralDeviceConfiguration, MacOSLobApp, MacOSMicrosoftDefenderApp, MacOSMicrosoftEdgeApp, MacOSOfficeSuiteApp, MailAssessmentRequest, MailFolder, MailSearchFolder, MalwareStateForWindowsDevice, ManagedAndroidLobApp, ManagedAndroidStoreApp, ManagedApp, ManagedAppConfiguration, ManagedAppOperation, ManagedAppPolicy, ManagedAppPolicyDeploymentSummary, ManagedAppProtection, ManagedAppRegistration, ManagedAppStatus, ManagedAppStatusRaw, ManagedDevice, ManagedDeviceMobileAppConfiguration, ManagedDeviceMobileAppConfigurationAssignment, ManagedDeviceMobileAppConfigurationDeviceStatus, ManagedDeviceMobileAppConfigurationDeviceSummary, ManagedDeviceMobileAppConfigurationUserStatus, ManagedDeviceMobileAppConfigurationUserSummary, ManagedDeviceOverview, ManagedEBook, ManagedEBookAssignment, ManagedIOSLobApp, ManagedIOSStoreApp, ManagedMobileApp, ManagedMobileLobApp, MdmWindowsInformationProtectionPolicy, MeetingAttendanceReport, MembershipOutlierInsight, Message, MessageRule, MicrosoftAccountUserConversationMember, MicrosoftAuthenticatorAuthenticationMethod, MicrosoftAuthenticatorAuthenticationMethodConfiguration, MicrosoftAuthenticatorAuthenticationMethodTarget, MicrosoftStoreForBusinessApp, MobileApp, MobileAppAssignment, MobileAppCategory, MobileAppContent, MobileAppContentFile, MobileAppTroubleshootingEvent, MobileContainedApp, MobileLobApp, MobileThreatDefenseConnector, MultiValueLegacyExtendedProperty, MuteParticipantOperation, NamedLocation, Notebook, NotificationMessageTemplate, OAuth2PermissionGrant, OfferShiftRequest, OfficeGraphInsights, Onenote, OnenoteEntityBaseModel, OnenoteEntityHierarchyModel, OnenoteEntitySchemaObjectModel, OnenoteOperation, OnenotePage, OnenoteResource, OnenoteSection, OnlineMeeting, OnPremisesConditionalAccessSettings, OnPremisesDirectorySynchronization, OpenShift, OpenShiftChangeRequest, OpenTypeExtension, Operation, Organization, OrganizationalBranding, OrganizationalBrandingLocalization, OrganizationalBrandingProperties, OrgContact, OutlookCategory, OutlookItem, OutlookUser, Participant, ParticipantJoiningNotification, ParticipantLeftNotification, PasswordAuthenticationMethod, Permission, PermissionGrantConditionSet, PermissionGrantPolicy, Person, PhoneAuthenticationMethod, PinnedChatMessageInfo, Place, Planner, PlannerAssignedToTaskBoardTaskFormat, PlannerBucket, PlannerBucketTaskBoardTaskFormat, PlannerGroup, PlannerPlan, PlannerPlanDetails, PlannerProgressTaskBoardTaskFormat, PlannerTask, PlannerTaskDetails, PlannerUser, PlayPromptOperation, PolicyBase, PolicyRoot, Post, Presence, PrintConnector, PrintDocument, Printer, PrinterBase, PrinterCreateOperation, PrinterShare, PrintJob, PrintOperation, PrintService, PrintServiceEndpoint, PrintTask, PrintTaskDefinition, PrintTaskTrigger, PrintUsage, PrintUsageByPrinter, PrintUsageByUser, ProfilePhoto, ProvisioningObjectSummary, RbacApplication, RecordOperation, ReferenceAttachment, RemoteAssistancePartner, Request, ResourceOperation, ResourceSpecificPermissionGrant, RichLongRunningOperation, RiskDetection, RiskyServicePrincipal, RiskyServicePrincipalHistoryItem, RiskyUser, RiskyUserHistoryItem, RoleAssignment, RoleDefinition, Room, RoomList, SamlOrWsFedExternalDomainFederation, SamlOrWsFedProvider, Schedule, ScheduleChangeRequest, SchedulingGroup, SchemaExtension, ScopedRoleMembership, SearchEntity, SectionGroup, SecureScore, SecureScoreControlProfile, Security, SecurityReportsRoot, ServiceAnnouncement, ServiceAnnouncementAttachment, ServiceAnnouncementBase, ServiceHealth, ServiceHealthIssue, ServicePrincipal, ServicePrincipalRiskDetection, ServiceUpdateMessage, SettingStateDeviceSummary, SharedDriveItem, SharedInsight, SharedPCConfiguration, SharedWithChannelTeamInfo, Sharepoint, SharepointSettings, Shift, ShiftPreferences, SignIn, Simulation, SimulationAutomation, SimulationAutomationRun, SingleValueLegacyExtendedProperty, Site, SkypeForBusinessUserConversationMember, SkypeUserConversationMember, SmsAuthenticationMethodConfiguration, SmsAuthenticationMethodTarget, SocialIdentityProvider, SoftwareOathAuthenticationMethod, SoftwareOathAuthenticationMethodConfiguration, SoftwareUpdateStatusSummary, StartHoldMusicOperation, StopHoldMusicOperation, StsPolicy, SubjectRightsRequest, SubscribedSku, SubscribeToToneOperation, Subscription, SwapShiftsChangeRequest, Synchronization, SynchronizationJob, SynchronizationSchema, SynchronizationTemplate, TargetedManagedAppConfiguration, TargetedManagedAppPolicyAssignment, TargetedManagedAppProtection, TaskFileAttachment, Team, TeamInfo, TeamsApp, TeamsAppDefinition, TeamsAppInstallation, TeamsAsyncOperation, TeamsTab, TeamsTemplate, Teamwork, TeamworkBot, TeamworkHostedContent, TeamworkTag, TeamworkTagMember, TelecomExpenseManagementPartner, TemporaryAccessPassAuthenticationMethod, TemporaryAccessPassAuthenticationMethodConfiguration, TenantAppManagementPolicy, TermsAndConditions, TermsAndConditionsAcceptanceStatus, TermsAndConditionsAssignment, TermsOfUseContainer, ThreatAssessmentRequest, ThreatAssessmentResult, ThumbnailSet, TimeOff, TimeOffReason, TimeOffRequest, Todo, TodoTask, TodoTaskList, TokenIssuancePolicy, TokenLifetimePolicy, Trending, UnifiedRbacResourceAction, UnifiedRbacResourceNamespace, UnifiedRoleAssignment, UnifiedRoleAssignmentSchedule, UnifiedRoleAssignmentScheduleInstance, UnifiedRoleAssignmentScheduleRequest, UnifiedRoleDefinition, UnifiedRoleEligibilitySchedule, UnifiedRoleEligibilityScheduleInstance, UnifiedRoleEligibilityScheduleRequest, UnifiedRoleManagementPolicy, UnifiedRoleManagementPolicyApprovalRule, UnifiedRoleManagementPolicyAssignment, UnifiedRoleManagementPolicyAuthenticationContextRule, UnifiedRoleManagementPolicyEnablementRule, UnifiedRoleManagementPolicyExpirationRule, UnifiedRoleManagementPolicyNotificationRule, UnifiedRoleManagementPolicyRule, UnifiedRoleScheduleBase, UnifiedRoleScheduleInstanceBase, UnmuteParticipantOperation, UpdateRecordingStatusOperation, UrlAssessmentRequest, UsedInsight, User, UserActivity, UserConsentRequest, UserExperienceAnalyticsAppHealthApplicationPerformance, UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails, UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId, UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion, UserExperienceAnalyticsAppHealthDeviceModelPerformance, UserExperienceAnalyticsAppHealthDevicePerformance, UserExperienceAnalyticsAppHealthDevicePerformanceDetails, UserExperienceAnalyticsAppHealthOSVersionPerformance, UserExperienceAnalyticsBaseline, UserExperienceAnalyticsCategory, UserExperienceAnalyticsDevicePerformance, UserExperienceAnalyticsDeviceScores, UserExperienceAnalyticsDeviceStartupHistory, UserExperienceAnalyticsDeviceStartupProcess, UserExperienceAnalyticsMetric, UserExperienceAnalyticsMetricHistory, UserExperienceAnalyticsModelScores, UserExperienceAnalyticsOverview, UserExperienceAnalyticsScoreHistory, UserExperienceAnalyticsWorkFromAnywhereDevice, UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric, UserExperienceAnalyticsWorkFromAnywhereMetric, UserExperienceAnalyticsWorkFromAnywhereModelPerformance, UserFlowLanguageConfiguration, UserFlowLanguagePage, UserInstallStateSummary, UserRegistrationDetails, UserScopeTeamsAppInstallation, UserSettings, UserSignInInsight, UserTeamwork, VoiceAuthenticationMethodConfiguration, VppToken, WebApp, Win32LobApp, Windows10CompliancePolicy, Windows10CustomConfiguration, Windows10EndpointProtectionConfiguration, Windows10EnterpriseModernAppManagementConfiguration, Windows10GeneralConfiguration, Windows10MobileCompliancePolicy, Windows10SecureAssessmentConfiguration, Windows10TeamGeneralConfiguration, Windows81CompliancePolicy, Windows81GeneralConfiguration, WindowsAppX, WindowsAutopilotDeviceIdentity, WindowsDefenderAdvancedThreatProtectionConfiguration, WindowsDeviceMalwareState, WindowsHelloForBusinessAuthenticationMethod, WindowsInformationProtection, WindowsInformationProtectionAppLearningSummary, WindowsInformationProtectionAppLockerFile, WindowsInformationProtectionNetworkLearningSummary, WindowsInformationProtectionPolicy, WindowsMalwareInformation, WindowsMicrosoftEdgeApp, WindowsMobileMSI, WindowsPhone81CompliancePolicy, WindowsPhone81CustomConfiguration, WindowsPhone81GeneralConfiguration, WindowsProtectionState, WindowsUniversalAppX, WindowsUniversalAppXContainedApp, WindowsUpdateForBusinessConfiguration, WindowsWebApp, Workbook, WorkbookApplication, WorkbookChart, WorkbookChartAreaFormat, WorkbookChartAxes, WorkbookChartAxis, WorkbookChartAxisFormat, WorkbookChartAxisTitle, WorkbookChartAxisTitleFormat, WorkbookChartDataLabelFormat, WorkbookChartDataLabels, WorkbookChartFill, WorkbookChartFont, WorkbookChartGridlines, WorkbookChartGridlinesFormat, WorkbookChartLegend, WorkbookChartLegendFormat, WorkbookChartLineFormat, WorkbookChartPoint, WorkbookChartPointFormat, WorkbookChartSeries, WorkbookChartSeriesFormat, WorkbookChartTitle, WorkbookChartTitleFormat, WorkbookComment, WorkbookCommentReply, WorkbookFilter, WorkbookFormatProtection, WorkbookFunctionResult, WorkbookFunctions, WorkbookNamedItem, WorkbookOperation, WorkbookPivotTable, WorkbookRange, WorkbookRangeBorder, WorkbookRangeFill, WorkbookRangeFont, WorkbookRangeFormat, WorkbookRangeSort, WorkbookRangeView, WorkbookTable, WorkbookTableColumn, WorkbookTableRow, WorkbookTableSort, WorkbookWorksheet, WorkbookWorksheetProtection, WorkforceIntegration, X509CertificateAuthenticationMethodConfiguration} from './index';
import {Alert as I6c6ea9cf476c9a2686ab81fd2ae38bdf3364559b2c5107ca7a29ad7bcf95e5a8, Article, ArticleIndicator, Artifact, CaseEscaped, CaseOperation, CasesRoot, DataSet, DataSource, DataSourceContainer, EdiscoveryAddToReviewSetOperation, EdiscoveryCase, EdiscoveryCaseSettings, EdiscoveryCustodian, EdiscoveryEstimateOperation, EdiscoveryHoldOperation, EdiscoveryIndexOperation, EdiscoveryNoncustodialDataSource, EdiscoveryPurgeDataOperation, EdiscoveryReviewSet, EdiscoveryReviewSetQuery, EdiscoveryReviewTag, EdiscoverySearch, EdiscoveryTagOperation, Host, HostComponent, HostCookie, Hostname, HostReputation, HostTracker, Incident, Indicator, IntelligenceProfile, IntelligenceProfileIndicator, IpAddress, PassiveDnsRecord, RetentionEvent, RetentionEventType, Search, SiteSource, Tag, ThreatIntelligence, TriggersRoot, TriggerTypesRoot, UnclassifiedArtifact, UnifiedGroupSource, UserSource, Vulnerability, VulnerabilityComponent} from './security/';
import {deserializeIntoAlert as I6505bc1c6fce3ff5954d022e7fc93d3127679a577fa33bf9d60b79a6ac991f2c} from './security/deserializeIntoAlert';
import {deserializeIntoArticle} from './security/deserializeIntoArticle';
import {deserializeIntoArticleIndicator} from './security/deserializeIntoArticleIndicator';
import {deserializeIntoArtifact} from './security/deserializeIntoArtifact';
import {deserializeIntoCaseEscaped} from './security/deserializeIntoCaseEscaped';
import {deserializeIntoCaseOperation} from './security/deserializeIntoCaseOperation';
import {deserializeIntoCasesRoot} from './security/deserializeIntoCasesRoot';
import {deserializeIntoDataSet} from './security/deserializeIntoDataSet';
import {deserializeIntoDataSource} from './security/deserializeIntoDataSource';
import {deserializeIntoDataSourceContainer} from './security/deserializeIntoDataSourceContainer';
import {deserializeIntoEdiscoveryAddToReviewSetOperation} from './security/deserializeIntoEdiscoveryAddToReviewSetOperation';
import {deserializeIntoEdiscoveryCase} from './security/deserializeIntoEdiscoveryCase';
import {deserializeIntoEdiscoveryCaseSettings} from './security/deserializeIntoEdiscoveryCaseSettings';
import {deserializeIntoEdiscoveryCustodian} from './security/deserializeIntoEdiscoveryCustodian';
import {deserializeIntoEdiscoveryEstimateOperation} from './security/deserializeIntoEdiscoveryEstimateOperation';
import {deserializeIntoEdiscoveryHoldOperation} from './security/deserializeIntoEdiscoveryHoldOperation';
import {deserializeIntoEdiscoveryIndexOperation} from './security/deserializeIntoEdiscoveryIndexOperation';
import {deserializeIntoEdiscoveryNoncustodialDataSource} from './security/deserializeIntoEdiscoveryNoncustodialDataSource';
import {deserializeIntoEdiscoveryPurgeDataOperation} from './security/deserializeIntoEdiscoveryPurgeDataOperation';
import {deserializeIntoEdiscoveryReviewSet} from './security/deserializeIntoEdiscoveryReviewSet';
import {deserializeIntoEdiscoveryReviewSetQuery} from './security/deserializeIntoEdiscoveryReviewSetQuery';
import {deserializeIntoEdiscoveryReviewTag} from './security/deserializeIntoEdiscoveryReviewTag';
import {deserializeIntoEdiscoverySearch} from './security/deserializeIntoEdiscoverySearch';
import {deserializeIntoEdiscoveryTagOperation} from './security/deserializeIntoEdiscoveryTagOperation';
import {deserializeIntoHost} from './security/deserializeIntoHost';
import {deserializeIntoHostComponent} from './security/deserializeIntoHostComponent';
import {deserializeIntoHostCookie} from './security/deserializeIntoHostCookie';
import {deserializeIntoHostname} from './security/deserializeIntoHostname';
import {deserializeIntoHostReputation} from './security/deserializeIntoHostReputation';
import {deserializeIntoHostTracker} from './security/deserializeIntoHostTracker';
import {deserializeIntoIncident} from './security/deserializeIntoIncident';
import {deserializeIntoIndicator} from './security/deserializeIntoIndicator';
import {deserializeIntoIntelligenceProfile} from './security/deserializeIntoIntelligenceProfile';
import {deserializeIntoIntelligenceProfileIndicator} from './security/deserializeIntoIntelligenceProfileIndicator';
import {deserializeIntoIpAddress} from './security/deserializeIntoIpAddress';
import {deserializeIntoPassiveDnsRecord} from './security/deserializeIntoPassiveDnsRecord';
import {deserializeIntoRetentionEvent} from './security/deserializeIntoRetentionEvent';
import {deserializeIntoRetentionEventType} from './security/deserializeIntoRetentionEventType';
import {deserializeIntoSearch} from './security/deserializeIntoSearch';
import {deserializeIntoSiteSource} from './security/deserializeIntoSiteSource';
import {deserializeIntoTag} from './security/deserializeIntoTag';
import {deserializeIntoThreatIntelligence} from './security/deserializeIntoThreatIntelligence';
import {deserializeIntoTriggersRoot} from './security/deserializeIntoTriggersRoot';
import {deserializeIntoTriggerTypesRoot} from './security/deserializeIntoTriggerTypesRoot';
import {deserializeIntoUnclassifiedArtifact} from './security/deserializeIntoUnclassifiedArtifact';
import {deserializeIntoUnifiedGroupSource} from './security/deserializeIntoUnifiedGroupSource';
import {deserializeIntoUserSource} from './security/deserializeIntoUserSource';
import {deserializeIntoVulnerability} from './security/deserializeIntoVulnerability';
import {deserializeIntoVulnerabilityComponent} from './security/deserializeIntoVulnerabilityComponent';
import {Group as I4e18a3882f273ff649b31b0adac5448533e694e026e54aa608d86a59539e9206, Relation, Set, Store, Term} from './termStore/';
import {deserializeIntoGroup as I68b49c30a4e01821ddd2d5b4d80947215a00ae0cb3aba3ad127e906da74c8ed6} from './termStore/deserializeIntoGroup';
import {deserializeIntoRelation} from './termStore/deserializeIntoRelation';
import {deserializeIntoSet} from './termStore/deserializeIntoSet';
import {deserializeIntoStore} from './termStore/deserializeIntoStore';
import {deserializeIntoTerm} from './termStore/deserializeIntoTerm';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.aadUserConversationMember":
                    return deserializeIntoAadUserConversationMember;
                case "#microsoft.graph.accessPackage":
                    return deserializeIntoAccessPackage;
                case "#microsoft.graph.accessPackageAssignment":
                    return deserializeIntoAccessPackageAssignment;
                case "#microsoft.graph.accessPackageAssignmentPolicy":
                    return deserializeIntoAccessPackageAssignmentPolicy;
                case "#microsoft.graph.accessPackageAssignmentRequest":
                    return deserializeIntoAccessPackageAssignmentRequest;
                case "#microsoft.graph.accessPackageCatalog":
                    return deserializeIntoAccessPackageCatalog;
                case "#microsoft.graph.accessPackageMultipleChoiceQuestion":
                    return deserializeIntoAccessPackageMultipleChoiceQuestion;
                case "#microsoft.graph.accessPackageQuestion":
                    return deserializeIntoAccessPackageQuestion;
                case "#microsoft.graph.accessPackageSubject":
                    return deserializeIntoAccessPackageSubject;
                case "#microsoft.graph.accessPackageTextInputQuestion":
                    return deserializeIntoAccessPackageTextInputQuestion;
                case "#microsoft.graph.accessReviewHistoryDefinition":
                    return deserializeIntoAccessReviewHistoryDefinition;
                case "#microsoft.graph.accessReviewHistoryInstance":
                    return deserializeIntoAccessReviewHistoryInstance;
                case "#microsoft.graph.accessReviewInstance":
                    return deserializeIntoAccessReviewInstance;
                case "#microsoft.graph.accessReviewInstanceDecisionItem":
                    return deserializeIntoAccessReviewInstanceDecisionItem;
                case "#microsoft.graph.accessReviewReviewer":
                    return deserializeIntoAccessReviewReviewer;
                case "#microsoft.graph.accessReviewScheduleDefinition":
                    return deserializeIntoAccessReviewScheduleDefinition;
                case "#microsoft.graph.accessReviewSet":
                    return deserializeIntoAccessReviewSet;
                case "#microsoft.graph.accessReviewStage":
                    return deserializeIntoAccessReviewStage;
                case "#microsoft.graph.activityBasedTimeoutPolicy":
                    return deserializeIntoActivityBasedTimeoutPolicy;
                case "#microsoft.graph.activityHistoryItem":
                    return deserializeIntoActivityHistoryItem;
                case "#microsoft.graph.addLargeGalleryViewOperation":
                    return deserializeIntoAddLargeGalleryViewOperation;
                case "#microsoft.graph.adminConsentRequestPolicy":
                    return deserializeIntoAdminConsentRequestPolicy;
                case "#microsoft.graph.administrativeUnit":
                    return deserializeIntoAdministrativeUnit;
                case "#microsoft.graph.agreement":
                    return deserializeIntoAgreement;
                case "#microsoft.graph.agreementAcceptance":
                    return deserializeIntoAgreementAcceptance;
                case "#microsoft.graph.agreementFile":
                    return deserializeIntoAgreementFile;
                case "#microsoft.graph.agreementFileLocalization":
                    return deserializeIntoAgreementFileLocalization;
                case "#microsoft.graph.agreementFileProperties":
                    return deserializeIntoAgreementFileProperties;
                case "#microsoft.graph.agreementFileVersion":
                    return deserializeIntoAgreementFileVersion;
                case "#microsoft.graph.alert":
                    return I31715a026b1ced0f6a88616d35905e458c4d7672e4ac2cfaebeef17eefa762ea;
                case "#microsoft.graph.allowedValue":
                    return deserializeIntoAllowedValue;
                case "#microsoft.graph.androidCompliancePolicy":
                    return deserializeIntoAndroidCompliancePolicy;
                case "#microsoft.graph.androidCustomConfiguration":
                    return deserializeIntoAndroidCustomConfiguration;
                case "#microsoft.graph.androidGeneralDeviceConfiguration":
                    return deserializeIntoAndroidGeneralDeviceConfiguration;
                case "#microsoft.graph.androidLobApp":
                    return deserializeIntoAndroidLobApp;
                case "#microsoft.graph.androidManagedAppProtection":
                    return deserializeIntoAndroidManagedAppProtection;
                case "#microsoft.graph.androidManagedAppRegistration":
                    return deserializeIntoAndroidManagedAppRegistration;
                case "#microsoft.graph.androidStoreApp":
                    return deserializeIntoAndroidStoreApp;
                case "#microsoft.graph.androidWorkProfileCompliancePolicy":
                    return deserializeIntoAndroidWorkProfileCompliancePolicy;
                case "#microsoft.graph.androidWorkProfileCustomConfiguration":
                    return deserializeIntoAndroidWorkProfileCustomConfiguration;
                case "#microsoft.graph.androidWorkProfileGeneralDeviceConfiguration":
                    return deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration;
                case "#microsoft.graph.anonymousGuestConversationMember":
                    return deserializeIntoAnonymousGuestConversationMember;
                case "#microsoft.graph.appCatalogs":
                    return deserializeIntoAppCatalogs;
                case "#microsoft.graph.appConsentApprovalRoute":
                    return deserializeIntoAppConsentApprovalRoute;
                case "#microsoft.graph.appConsentRequest":
                    return deserializeIntoAppConsentRequest;
                case "#microsoft.graph.appleDeviceFeaturesConfigurationBase":
                    return deserializeIntoAppleDeviceFeaturesConfigurationBase;
                case "#microsoft.graph.appleManagedIdentityProvider":
                    return deserializeIntoAppleManagedIdentityProvider;
                case "#microsoft.graph.applePushNotificationCertificate":
                    return deserializeIntoApplePushNotificationCertificate;
                case "#microsoft.graph.application":
                    return deserializeIntoApplication;
                case "#microsoft.graph.applicationTemplate":
                    return deserializeIntoApplicationTemplate;
                case "#microsoft.graph.appLogCollectionRequest":
                    return deserializeIntoAppLogCollectionRequest;
                case "#microsoft.graph.appManagementPolicy":
                    return deserializeIntoAppManagementPolicy;
                case "#microsoft.graph.appRoleAssignment":
                    return deserializeIntoAppRoleAssignment;
                case "#microsoft.graph.approval":
                    return deserializeIntoApproval;
                case "#microsoft.graph.approvalStage":
                    return deserializeIntoApprovalStage;
                case "#microsoft.graph.appScope":
                    return deserializeIntoAppScope;
                case "#microsoft.graph.associatedTeamInfo":
                    return deserializeIntoAssociatedTeamInfo;
                case "#microsoft.graph.attachment":
                    return deserializeIntoAttachment;
                case "#microsoft.graph.attachmentBase":
                    return deserializeIntoAttachmentBase;
                case "#microsoft.graph.attachmentSession":
                    return deserializeIntoAttachmentSession;
                case "#microsoft.graph.attackSimulationRoot":
                    return deserializeIntoAttackSimulationRoot;
                case "#microsoft.graph.attendanceRecord":
                    return deserializeIntoAttendanceRecord;
                case "#microsoft.graph.attributeMappingFunctionSchema":
                    return deserializeIntoAttributeMappingFunctionSchema;
                case "#microsoft.graph.attributeSet":
                    return deserializeIntoAttributeSet;
                case "#microsoft.graph.audioRoutingGroup":
                    return deserializeIntoAudioRoutingGroup;
                case "#microsoft.graph.auditEvent":
                    return deserializeIntoAuditEvent;
                case "#microsoft.graph.auditLogRoot":
                    return deserializeIntoAuditLogRoot;
                case "#microsoft.graph.authentication":
                    return deserializeIntoAuthentication;
                case "#microsoft.graph.authenticationCombinationConfiguration":
                    return deserializeIntoAuthenticationCombinationConfiguration;
                case "#microsoft.graph.authenticationContextClassReference":
                    return deserializeIntoAuthenticationContextClassReference;
                case "#microsoft.graph.authenticationFlowsPolicy":
                    return deserializeIntoAuthenticationFlowsPolicy;
                case "#microsoft.graph.authenticationMethod":
                    return deserializeIntoAuthenticationMethod;
                case "#microsoft.graph.authenticationMethodConfiguration":
                    return deserializeIntoAuthenticationMethodConfiguration;
                case "#microsoft.graph.authenticationMethodModeDetail":
                    return deserializeIntoAuthenticationMethodModeDetail;
                case "#microsoft.graph.authenticationMethodsPolicy":
                    return deserializeIntoAuthenticationMethodsPolicy;
                case "#microsoft.graph.authenticationMethodsRoot":
                    return deserializeIntoAuthenticationMethodsRoot;
                case "#microsoft.graph.authenticationMethodTarget":
                    return deserializeIntoAuthenticationMethodTarget;
                case "#microsoft.graph.authenticationStrengthPolicy":
                    return deserializeIntoAuthenticationStrengthPolicy;
                case "#microsoft.graph.authenticationStrengthRoot":
                    return deserializeIntoAuthenticationStrengthRoot;
                case "#microsoft.graph.authoredNote":
                    return deserializeIntoAuthoredNote;
                case "#microsoft.graph.authorizationPolicy":
                    return deserializeIntoAuthorizationPolicy;
                case "#microsoft.graph.azureCommunicationServicesUserConversationMember":
                    return deserializeIntoAzureCommunicationServicesUserConversationMember;
                case "#microsoft.graph.b2xIdentityUserFlow":
                    return deserializeIntoB2xIdentityUserFlow;
                case "#microsoft.graph.baseItem":
                    return deserializeIntoBaseItem;
                case "#microsoft.graph.baseItemVersion":
                    return deserializeIntoBaseItemVersion;
                case "#microsoft.graph.bitlocker":
                    return deserializeIntoBitlocker;
                case "#microsoft.graph.bitlockerRecoveryKey":
                    return deserializeIntoBitlockerRecoveryKey;
                case "#microsoft.graph.bookingAppointment":
                    return deserializeIntoBookingAppointment;
                case "#microsoft.graph.bookingBusiness":
                    return deserializeIntoBookingBusiness;
                case "#microsoft.graph.bookingCurrency":
                    return deserializeIntoBookingCurrency;
                case "#microsoft.graph.bookingCustomer":
                    return deserializeIntoBookingCustomer;
                case "#microsoft.graph.bookingCustomerBase":
                    return deserializeIntoBookingCustomerBase;
                case "#microsoft.graph.bookingCustomQuestion":
                    return deserializeIntoBookingCustomQuestion;
                case "#microsoft.graph.bookingService":
                    return deserializeIntoBookingService;
                case "#microsoft.graph.bookingStaffMember":
                    return deserializeIntoBookingStaffMember;
                case "#microsoft.graph.bookingStaffMemberBase":
                    return deserializeIntoBookingStaffMemberBase;
                case "#microsoft.graph.browserSharedCookie":
                    return deserializeIntoBrowserSharedCookie;
                case "#microsoft.graph.browserSite":
                    return deserializeIntoBrowserSite;
                case "#microsoft.graph.browserSiteList":
                    return deserializeIntoBrowserSiteList;
                case "#microsoft.graph.builtInIdentityProvider":
                    return deserializeIntoBuiltInIdentityProvider;
                case "#microsoft.graph.calendar":
                    return deserializeIntoCalendar;
                case "#microsoft.graph.calendarGroup":
                    return deserializeIntoCalendarGroup;
                case "#microsoft.graph.calendarPermission":
                    return deserializeIntoCalendarPermission;
                case "#microsoft.graph.calendarSharingMessage":
                    return deserializeIntoCalendarSharingMessage;
                case "#microsoft.graph.call":
                    return deserializeIntoCall;
                case "#microsoft.graph.callRecords.callRecord":
                    return deserializeIntoCallRecord;
                case "#microsoft.graph.callRecords.segment":
                    return deserializeIntoSegment;
                case "#microsoft.graph.callRecords.session":
                    return deserializeIntoSession;
                case "#microsoft.graph.cancelMediaProcessingOperation":
                    return deserializeIntoCancelMediaProcessingOperation;
                case "#microsoft.graph.certificateBasedAuthConfiguration":
                    return deserializeIntoCertificateBasedAuthConfiguration;
                case "#microsoft.graph.changeTrackedEntity":
                    return deserializeIntoChangeTrackedEntity;
                case "#microsoft.graph.channel":
                    return deserializeIntoChannel;
                case "#microsoft.graph.chat":
                    return deserializeIntoChat;
                case "#microsoft.graph.chatMessage":
                    return deserializeIntoChatMessage;
                case "#microsoft.graph.chatMessageHostedContent":
                    return deserializeIntoChatMessageHostedContent;
                case "#microsoft.graph.chatMessageInfo":
                    return deserializeIntoChatMessageInfo;
                case "#microsoft.graph.checklistItem":
                    return deserializeIntoChecklistItem;
                case "#microsoft.graph.claimsMappingPolicy":
                    return deserializeIntoClaimsMappingPolicy;
                case "#microsoft.graph.columnDefinition":
                    return deserializeIntoColumnDefinition;
                case "#microsoft.graph.columnLink":
                    return deserializeIntoColumnLink;
                case "#microsoft.graph.commsOperation":
                    return deserializeIntoCommsOperation;
                case "#microsoft.graph.complianceManagementPartner":
                    return deserializeIntoComplianceManagementPartner;
                case "#microsoft.graph.conditionalAccessPolicy":
                    return deserializeIntoConditionalAccessPolicy;
                case "#microsoft.graph.conditionalAccessRoot":
                    return deserializeIntoConditionalAccessRoot;
                case "#microsoft.graph.conditionalAccessTemplate":
                    return deserializeIntoConditionalAccessTemplate;
                case "#microsoft.graph.connectedOrganization":
                    return deserializeIntoConnectedOrganization;
                case "#microsoft.graph.contact":
                    return deserializeIntoContact;
                case "#microsoft.graph.contactFolder":
                    return deserializeIntoContactFolder;
                case "#microsoft.graph.contentSharingSession":
                    return deserializeIntoContentSharingSession;
                case "#microsoft.graph.contentType":
                    return deserializeIntoContentType;
                case "#microsoft.graph.contract":
                    return deserializeIntoContract;
                case "#microsoft.graph.conversation":
                    return deserializeIntoConversation;
                case "#microsoft.graph.conversationMember":
                    return deserializeIntoConversationMember;
                case "#microsoft.graph.conversationThread":
                    return deserializeIntoConversationThread;
                case "#microsoft.graph.countryNamedLocation":
                    return deserializeIntoCountryNamedLocation;
                case "#microsoft.graph.crossTenantAccessPolicy":
                    return deserializeIntoCrossTenantAccessPolicy;
                case "#microsoft.graph.crossTenantAccessPolicyConfigurationDefault":
                    return deserializeIntoCrossTenantAccessPolicyConfigurationDefault;
                case "#microsoft.graph.customCalloutExtension":
                    return deserializeIntoCustomCalloutExtension;
                case "#microsoft.graph.customSecurityAttributeDefinition":
                    return deserializeIntoCustomSecurityAttributeDefinition;
                case "#microsoft.graph.dataPolicyOperation":
                    return deserializeIntoDataPolicyOperation;
                case "#microsoft.graph.defaultManagedAppProtection":
                    return deserializeIntoDefaultManagedAppProtection;
                case "#microsoft.graph.delegatedAdminAccessAssignment":
                    return deserializeIntoDelegatedAdminAccessAssignment;
                case "#microsoft.graph.delegatedAdminCustomer":
                    return deserializeIntoDelegatedAdminCustomer;
                case "#microsoft.graph.delegatedAdminRelationship":
                    return deserializeIntoDelegatedAdminRelationship;
                case "#microsoft.graph.delegatedAdminRelationshipOperation":
                    return deserializeIntoDelegatedAdminRelationshipOperation;
                case "#microsoft.graph.delegatedAdminRelationshipRequest":
                    return deserializeIntoDelegatedAdminRelationshipRequest;
                case "#microsoft.graph.delegatedAdminServiceManagementDetail":
                    return deserializeIntoDelegatedAdminServiceManagementDetail;
                case "#microsoft.graph.delegatedPermissionClassification":
                    return deserializeIntoDelegatedPermissionClassification;
                case "#microsoft.graph.deletedItemContainer":
                    return deserializeIntoDeletedItemContainer;
                case "#microsoft.graph.deletedTeam":
                    return deserializeIntoDeletedTeam;
                case "#microsoft.graph.detectedApp":
                    return deserializeIntoDetectedApp;
                case "#microsoft.graph.device":
                    return deserializeIntoDevice;
                case "#microsoft.graph.deviceAndAppManagementRoleAssignment":
                    return deserializeIntoDeviceAndAppManagementRoleAssignment;
                case "#microsoft.graph.deviceAndAppManagementRoleDefinition":
                    return deserializeIntoDeviceAndAppManagementRoleDefinition;
                case "#microsoft.graph.deviceAppManagement":
                    return deserializeIntoDeviceAppManagement;
                case "#microsoft.graph.deviceCategory":
                    return deserializeIntoDeviceCategory;
                case "#microsoft.graph.deviceComplianceActionItem":
                    return deserializeIntoDeviceComplianceActionItem;
                case "#microsoft.graph.deviceComplianceDeviceOverview":
                    return deserializeIntoDeviceComplianceDeviceOverview;
                case "#microsoft.graph.deviceComplianceDeviceStatus":
                    return deserializeIntoDeviceComplianceDeviceStatus;
                case "#microsoft.graph.deviceCompliancePolicy":
                    return deserializeIntoDeviceCompliancePolicy;
                case "#microsoft.graph.deviceCompliancePolicyAssignment":
                    return deserializeIntoDeviceCompliancePolicyAssignment;
                case "#microsoft.graph.deviceCompliancePolicyDeviceStateSummary":
                    return deserializeIntoDeviceCompliancePolicyDeviceStateSummary;
                case "#microsoft.graph.deviceCompliancePolicySettingStateSummary":
                    return deserializeIntoDeviceCompliancePolicySettingStateSummary;
                case "#microsoft.graph.deviceCompliancePolicyState":
                    return deserializeIntoDeviceCompliancePolicyState;
                case "#microsoft.graph.deviceComplianceScheduledActionForRule":
                    return deserializeIntoDeviceComplianceScheduledActionForRule;
                case "#microsoft.graph.deviceComplianceSettingState":
                    return deserializeIntoDeviceComplianceSettingState;
                case "#microsoft.graph.deviceComplianceUserOverview":
                    return deserializeIntoDeviceComplianceUserOverview;
                case "#microsoft.graph.deviceComplianceUserStatus":
                    return deserializeIntoDeviceComplianceUserStatus;
                case "#microsoft.graph.deviceConfiguration":
                    return deserializeIntoDeviceConfiguration;
                case "#microsoft.graph.deviceConfigurationAssignment":
                    return deserializeIntoDeviceConfigurationAssignment;
                case "#microsoft.graph.deviceConfigurationDeviceOverview":
                    return deserializeIntoDeviceConfigurationDeviceOverview;
                case "#microsoft.graph.deviceConfigurationDeviceStateSummary":
                    return deserializeIntoDeviceConfigurationDeviceStateSummary;
                case "#microsoft.graph.deviceConfigurationDeviceStatus":
                    return deserializeIntoDeviceConfigurationDeviceStatus;
                case "#microsoft.graph.deviceConfigurationState":
                    return deserializeIntoDeviceConfigurationState;
                case "#microsoft.graph.deviceConfigurationUserOverview":
                    return deserializeIntoDeviceConfigurationUserOverview;
                case "#microsoft.graph.deviceConfigurationUserStatus":
                    return deserializeIntoDeviceConfigurationUserStatus;
                case "#microsoft.graph.deviceEnrollmentConfiguration":
                    return deserializeIntoDeviceEnrollmentConfiguration;
                case "#microsoft.graph.deviceEnrollmentLimitConfiguration":
                    return deserializeIntoDeviceEnrollmentLimitConfiguration;
                case "#microsoft.graph.deviceEnrollmentPlatformRestrictionsConfiguration":
                    return deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration;
                case "#microsoft.graph.deviceEnrollmentWindowsHelloForBusinessConfiguration":
                    return deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration;
                case "#microsoft.graph.deviceInstallState":
                    return deserializeIntoDeviceInstallState;
                case "#microsoft.graph.deviceLogCollectionResponse":
                    return deserializeIntoDeviceLogCollectionResponse;
                case "#microsoft.graph.deviceManagement":
                    return deserializeIntoDeviceManagement;
                case "#microsoft.graph.deviceManagementExchangeConnector":
                    return deserializeIntoDeviceManagementExchangeConnector;
                case "#microsoft.graph.deviceManagementExportJob":
                    return deserializeIntoDeviceManagementExportJob;
                case "#microsoft.graph.deviceManagementPartner":
                    return deserializeIntoDeviceManagementPartner;
                case "#microsoft.graph.deviceManagementReports":
                    return deserializeIntoDeviceManagementReports;
                case "#microsoft.graph.deviceManagementTroubleshootingEvent":
                    return deserializeIntoDeviceManagementTroubleshootingEvent;
                case "#microsoft.graph.directory":
                    return deserializeIntoDirectory;
                case "#microsoft.graph.directoryAudit":
                    return deserializeIntoDirectoryAudit;
                case "#microsoft.graph.directoryDefinition":
                    return deserializeIntoDirectoryDefinition;
                case "#microsoft.graph.directoryObject":
                    return deserializeIntoDirectoryObject;
                case "#microsoft.graph.directoryObjectPartnerReference":
                    return deserializeIntoDirectoryObjectPartnerReference;
                case "#microsoft.graph.directoryRole":
                    return deserializeIntoDirectoryRole;
                case "#microsoft.graph.directoryRoleTemplate":
                    return deserializeIntoDirectoryRoleTemplate;
                case "#microsoft.graph.documentSetVersion":
                    return deserializeIntoDocumentSetVersion;
                case "#microsoft.graph.domain":
                    return deserializeIntoDomain;
                case "#microsoft.graph.domainDnsCnameRecord":
                    return deserializeIntoDomainDnsCnameRecord;
                case "#microsoft.graph.domainDnsMxRecord":
                    return deserializeIntoDomainDnsMxRecord;
                case "#microsoft.graph.domainDnsRecord":
                    return deserializeIntoDomainDnsRecord;
                case "#microsoft.graph.domainDnsSrvRecord":
                    return deserializeIntoDomainDnsSrvRecord;
                case "#microsoft.graph.domainDnsTxtRecord":
                    return deserializeIntoDomainDnsTxtRecord;
                case "#microsoft.graph.domainDnsUnavailableRecord":
                    return deserializeIntoDomainDnsUnavailableRecord;
                case "#microsoft.graph.drive":
                    return deserializeIntoDrive;
                case "#microsoft.graph.driveItem":
                    return deserializeIntoDriveItem;
                case "#microsoft.graph.driveItemVersion":
                    return deserializeIntoDriveItemVersion;
                case "#microsoft.graph.eBookInstallSummary":
                    return deserializeIntoEBookInstallSummary;
                case "#microsoft.graph.edge":
                    return deserializeIntoEdge;
                case "#microsoft.graph.editionUpgradeConfiguration":
                    return deserializeIntoEditionUpgradeConfiguration;
                case "#microsoft.graph.educationAssignment":
                    return deserializeIntoEducationAssignment;
                case "#microsoft.graph.educationAssignmentDefaults":
                    return deserializeIntoEducationAssignmentDefaults;
                case "#microsoft.graph.educationAssignmentResource":
                    return deserializeIntoEducationAssignmentResource;
                case "#microsoft.graph.educationAssignmentSettings":
                    return deserializeIntoEducationAssignmentSettings;
                case "#microsoft.graph.educationCategory":
                    return deserializeIntoEducationCategory;
                case "#microsoft.graph.educationClass":
                    return deserializeIntoEducationClass;
                case "#microsoft.graph.educationFeedbackOutcome":
                    return deserializeIntoEducationFeedbackOutcome;
                case "#microsoft.graph.educationFeedbackResourceOutcome":
                    return deserializeIntoEducationFeedbackResourceOutcome;
                case "#microsoft.graph.educationOrganization":
                    return deserializeIntoEducationOrganization;
                case "#microsoft.graph.educationOutcome":
                    return deserializeIntoEducationOutcome;
                case "#microsoft.graph.educationPointsOutcome":
                    return deserializeIntoEducationPointsOutcome;
                case "#microsoft.graph.educationRubric":
                    return deserializeIntoEducationRubric;
                case "#microsoft.graph.educationRubricOutcome":
                    return deserializeIntoEducationRubricOutcome;
                case "#microsoft.graph.educationSchool":
                    return deserializeIntoEducationSchool;
                case "#microsoft.graph.educationSubmission":
                    return deserializeIntoEducationSubmission;
                case "#microsoft.graph.educationSubmissionResource":
                    return deserializeIntoEducationSubmissionResource;
                case "#microsoft.graph.educationUser":
                    return deserializeIntoEducationUser;
                case "#microsoft.graph.emailAuthenticationMethod":
                    return deserializeIntoEmailAuthenticationMethod;
                case "#microsoft.graph.emailAuthenticationMethodConfiguration":
                    return deserializeIntoEmailAuthenticationMethodConfiguration;
                case "#microsoft.graph.emailFileAssessmentRequest":
                    return deserializeIntoEmailFileAssessmentRequest;
                case "#microsoft.graph.employeeExperienceUser":
                    return deserializeIntoEmployeeExperienceUser;
                case "#microsoft.graph.endpoint":
                    return deserializeIntoEndpoint;
                case "#microsoft.graph.enrollmentConfigurationAssignment":
                    return deserializeIntoEnrollmentConfigurationAssignment;
                case "#microsoft.graph.enrollmentTroubleshootingEvent":
                    return deserializeIntoEnrollmentTroubleshootingEvent;
                case "#microsoft.graph.enterpriseCodeSigningCertificate":
                    return deserializeIntoEnterpriseCodeSigningCertificate;
                case "#microsoft.graph.entitlementManagement":
                    return deserializeIntoEntitlementManagement;
                case "#microsoft.graph.entitlementManagementSettings":
                    return deserializeIntoEntitlementManagementSettings;
                case "#microsoft.graph.event":
                    return deserializeIntoEvent;
                case "#microsoft.graph.eventMessage":
                    return deserializeIntoEventMessage;
                case "#microsoft.graph.eventMessageRequest":
                    return deserializeIntoEventMessageRequest;
                case "#microsoft.graph.eventMessageResponse":
                    return deserializeIntoEventMessageResponse;
                case "#microsoft.graph.extension":
                    return deserializeIntoExtension;
                case "#microsoft.graph.extensionProperty":
                    return deserializeIntoExtensionProperty;
                case "#microsoft.graph.externalConnectors.connectionOperation":
                    return deserializeIntoConnectionOperation;
                case "#microsoft.graph.externalConnectors.externalActivity":
                    return deserializeIntoExternalActivity;
                case "#microsoft.graph.externalConnectors.externalActivityResult":
                    return deserializeIntoExternalActivityResult;
                case "#microsoft.graph.externalConnectors.externalConnection":
                    return deserializeIntoExternalConnection;
                case "#microsoft.graph.externalConnectors.externalGroup":
                    return deserializeIntoExternalGroup;
                case "#microsoft.graph.externalConnectors.externalItem":
                    return deserializeIntoExternalItem;
                case "#microsoft.graph.externalConnectors.identity":
                    return deserializeIntoIdentity;
                case "#microsoft.graph.externalConnectors.schema":
                    return deserializeIntoSchema;
                case "#microsoft.graph.externalDomainName":
                    return deserializeIntoExternalDomainName;
                case "#microsoft.graph.featureRolloutPolicy":
                    return deserializeIntoFeatureRolloutPolicy;
                case "#microsoft.graph.federatedIdentityCredential":
                    return deserializeIntoFederatedIdentityCredential;
                case "#microsoft.graph.fido2AuthenticationMethod":
                    return deserializeIntoFido2AuthenticationMethod;
                case "#microsoft.graph.fido2AuthenticationMethodConfiguration":
                    return deserializeIntoFido2AuthenticationMethodConfiguration;
                case "#microsoft.graph.fido2CombinationConfiguration":
                    return deserializeIntoFido2CombinationConfiguration;
                case "#microsoft.graph.fieldValueSet":
                    return deserializeIntoFieldValueSet;
                case "#microsoft.graph.fileAssessmentRequest":
                    return deserializeIntoFileAssessmentRequest;
                case "#microsoft.graph.fileAttachment":
                    return deserializeIntoFileAttachment;
                case "#microsoft.graph.filterOperatorSchema":
                    return deserializeIntoFilterOperatorSchema;
                case "#microsoft.graph.governanceInsight":
                    return deserializeIntoGovernanceInsight;
                case "#microsoft.graph.group":
                    return I23e16b52d4b109c19ebd3ab2e05b0d3e8411c17b6a4e64b58a4565adab867a21;
                case "#microsoft.graph.groupLifecyclePolicy":
                    return deserializeIntoGroupLifecyclePolicy;
                case "#microsoft.graph.groupSetting":
                    return deserializeIntoGroupSetting;
                case "#microsoft.graph.groupSettingTemplate":
                    return deserializeIntoGroupSettingTemplate;
                case "#microsoft.graph.homeRealmDiscoveryPolicy":
                    return deserializeIntoHomeRealmDiscoveryPolicy;
                case "#microsoft.graph.identityApiConnector":
                    return deserializeIntoIdentityApiConnector;
                case "#microsoft.graph.identityBuiltInUserFlowAttribute":
                    return deserializeIntoIdentityBuiltInUserFlowAttribute;
                case "#microsoft.graph.identityContainer":
                    return deserializeIntoIdentityContainer;
                case "#microsoft.graph.identityCustomUserFlowAttribute":
                    return deserializeIntoIdentityCustomUserFlowAttribute;
                case "#microsoft.graph.identityGovernance.customTaskExtension":
                    return deserializeIntoCustomTaskExtension;
                case "#microsoft.graph.identityGovernance.lifecycleManagementSettings":
                    return deserializeIntoLifecycleManagementSettings;
                case "#microsoft.graph.identityGovernance.lifecycleWorkflowsContainer":
                    return deserializeIntoLifecycleWorkflowsContainer;
                case "#microsoft.graph.identityGovernance.run":
                    return deserializeIntoRun;
                case "#microsoft.graph.identityGovernance.task":
                    return deserializeIntoTask;
                case "#microsoft.graph.identityGovernance.taskDefinition":
                    return deserializeIntoTaskDefinition;
                case "#microsoft.graph.identityGovernance.taskProcessingResult":
                    return deserializeIntoTaskProcessingResult;
                case "#microsoft.graph.identityGovernance.taskReport":
                    return deserializeIntoTaskReport;
                case "#microsoft.graph.identityGovernance.userProcessingResult":
                    return deserializeIntoUserProcessingResult;
                case "#microsoft.graph.identityGovernance.workflowTemplate":
                    return deserializeIntoWorkflowTemplate;
                case "#microsoft.graph.identityProvider":
                    return deserializeIntoIdentityProvider;
                case "#microsoft.graph.identityProviderBase":
                    return deserializeIntoIdentityProviderBase;
                case "#microsoft.graph.identitySecurityDefaultsEnforcementPolicy":
                    return deserializeIntoIdentitySecurityDefaultsEnforcementPolicy;
                case "#microsoft.graph.identityUserFlow":
                    return deserializeIntoIdentityUserFlow;
                case "#microsoft.graph.identityUserFlowAttribute":
                    return deserializeIntoIdentityUserFlowAttribute;
                case "#microsoft.graph.identityUserFlowAttributeAssignment":
                    return deserializeIntoIdentityUserFlowAttributeAssignment;
                case "#microsoft.graph.importedWindowsAutopilotDeviceIdentity":
                    return deserializeIntoImportedWindowsAutopilotDeviceIdentity;
                case "#microsoft.graph.importedWindowsAutopilotDeviceIdentityUpload":
                    return deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload;
                case "#microsoft.graph.inferenceClassification":
                    return deserializeIntoInferenceClassification;
                case "#microsoft.graph.inferenceClassificationOverride":
                    return deserializeIntoInferenceClassificationOverride;
                case "#microsoft.graph.internalDomainFederation":
                    return deserializeIntoInternalDomainFederation;
                case "#microsoft.graph.internetExplorerMode":
                    return deserializeIntoInternetExplorerMode;
                case "#microsoft.graph.invitation":
                    return deserializeIntoInvitation;
                case "#microsoft.graph.inviteParticipantsOperation":
                    return deserializeIntoInviteParticipantsOperation;
                case "#microsoft.graph.iosCertificateProfile":
                    return deserializeIntoIosCertificateProfile;
                case "#microsoft.graph.iosCompliancePolicy":
                    return deserializeIntoIosCompliancePolicy;
                case "#microsoft.graph.iosCustomConfiguration":
                    return deserializeIntoIosCustomConfiguration;
                case "#microsoft.graph.iosDeviceFeaturesConfiguration":
                    return deserializeIntoIosDeviceFeaturesConfiguration;
                case "#microsoft.graph.iosGeneralDeviceConfiguration":
                    return deserializeIntoIosGeneralDeviceConfiguration;
                case "#microsoft.graph.iosiPadOSWebClip":
                    return deserializeIntoIosiPadOSWebClip;
                case "#microsoft.graph.iosLobApp":
                    return deserializeIntoIosLobApp;
                case "#microsoft.graph.iosLobAppProvisioningConfigurationAssignment":
                    return deserializeIntoIosLobAppProvisioningConfigurationAssignment;
                case "#microsoft.graph.iosManagedAppProtection":
                    return deserializeIntoIosManagedAppProtection;
                case "#microsoft.graph.iosManagedAppRegistration":
                    return deserializeIntoIosManagedAppRegistration;
                case "#microsoft.graph.iosMobileAppConfiguration":
                    return deserializeIntoIosMobileAppConfiguration;
                case "#microsoft.graph.iosStoreApp":
                    return deserializeIntoIosStoreApp;
                case "#microsoft.graph.iosUpdateConfiguration":
                    return deserializeIntoIosUpdateConfiguration;
                case "#microsoft.graph.iosUpdateDeviceStatus":
                    return deserializeIntoIosUpdateDeviceStatus;
                case "#microsoft.graph.iosVppApp":
                    return deserializeIntoIosVppApp;
                case "#microsoft.graph.iosVppEBook":
                    return deserializeIntoIosVppEBook;
                case "#microsoft.graph.iosVppEBookAssignment":
                    return deserializeIntoIosVppEBookAssignment;
                case "#microsoft.graph.ipNamedLocation":
                    return deserializeIntoIpNamedLocation;
                case "#microsoft.graph.itemActivity":
                    return deserializeIntoItemActivity;
                case "#microsoft.graph.itemActivityStat":
                    return deserializeIntoItemActivityStat;
                case "#microsoft.graph.itemAnalytics":
                    return deserializeIntoItemAnalytics;
                case "#microsoft.graph.itemAttachment":
                    return deserializeIntoItemAttachment;
                case "#microsoft.graph.learningAssignment":
                    return deserializeIntoLearningAssignment;
                case "#microsoft.graph.learningContent":
                    return deserializeIntoLearningContent;
                case "#microsoft.graph.learningCourseActivity":
                    return deserializeIntoLearningCourseActivity;
                case "#microsoft.graph.learningProvider":
                    return deserializeIntoLearningProvider;
                case "#microsoft.graph.learningSelfInitiatedCourse":
                    return deserializeIntoLearningSelfInitiatedCourse;
                case "#microsoft.graph.licenseDetails":
                    return deserializeIntoLicenseDetails;
                case "#microsoft.graph.linkedResource":
                    return deserializeIntoLinkedResource;
                case "#microsoft.graph.list":
                    return deserializeIntoList;
                case "#microsoft.graph.listItem":
                    return deserializeIntoListItem;
                case "#microsoft.graph.listItemVersion":
                    return deserializeIntoListItemVersion;
                case "#microsoft.graph.localizedNotificationMessage":
                    return deserializeIntoLocalizedNotificationMessage;
                case "#microsoft.graph.longRunningOperation":
                    return deserializeIntoLongRunningOperation;
                case "#microsoft.graph.macOSCompliancePolicy":
                    return deserializeIntoMacOSCompliancePolicy;
                case "#microsoft.graph.macOSCustomConfiguration":
                    return deserializeIntoMacOSCustomConfiguration;
                case "#microsoft.graph.macOSDeviceFeaturesConfiguration":
                    return deserializeIntoMacOSDeviceFeaturesConfiguration;
                case "#microsoft.graph.macOSGeneralDeviceConfiguration":
                    return deserializeIntoMacOSGeneralDeviceConfiguration;
                case "#microsoft.graph.macOSLobApp":
                    return deserializeIntoMacOSLobApp;
                case "#microsoft.graph.macOSMicrosoftDefenderApp":
                    return deserializeIntoMacOSMicrosoftDefenderApp;
                case "#microsoft.graph.macOSMicrosoftEdgeApp":
                    return deserializeIntoMacOSMicrosoftEdgeApp;
                case "#microsoft.graph.macOSOfficeSuiteApp":
                    return deserializeIntoMacOSOfficeSuiteApp;
                case "#microsoft.graph.mailAssessmentRequest":
                    return deserializeIntoMailAssessmentRequest;
                case "#microsoft.graph.mailFolder":
                    return deserializeIntoMailFolder;
                case "#microsoft.graph.mailSearchFolder":
                    return deserializeIntoMailSearchFolder;
                case "#microsoft.graph.malwareStateForWindowsDevice":
                    return deserializeIntoMalwareStateForWindowsDevice;
                case "#microsoft.graph.managedAndroidLobApp":
                    return deserializeIntoManagedAndroidLobApp;
                case "#microsoft.graph.managedAndroidStoreApp":
                    return deserializeIntoManagedAndroidStoreApp;
                case "#microsoft.graph.managedApp":
                    return deserializeIntoManagedApp;
                case "#microsoft.graph.managedAppConfiguration":
                    return deserializeIntoManagedAppConfiguration;
                case "#microsoft.graph.managedAppOperation":
                    return deserializeIntoManagedAppOperation;
                case "#microsoft.graph.managedAppPolicy":
                    return deserializeIntoManagedAppPolicy;
                case "#microsoft.graph.managedAppPolicyDeploymentSummary":
                    return deserializeIntoManagedAppPolicyDeploymentSummary;
                case "#microsoft.graph.managedAppProtection":
                    return deserializeIntoManagedAppProtection;
                case "#microsoft.graph.managedAppRegistration":
                    return deserializeIntoManagedAppRegistration;
                case "#microsoft.graph.managedAppStatus":
                    return deserializeIntoManagedAppStatus;
                case "#microsoft.graph.managedAppStatusRaw":
                    return deserializeIntoManagedAppStatusRaw;
                case "#microsoft.graph.managedDevice":
                    return deserializeIntoManagedDevice;
                case "#microsoft.graph.managedDeviceMobileAppConfiguration":
                    return deserializeIntoManagedDeviceMobileAppConfiguration;
                case "#microsoft.graph.managedDeviceMobileAppConfigurationAssignment":
                    return deserializeIntoManagedDeviceMobileAppConfigurationAssignment;
                case "#microsoft.graph.managedDeviceMobileAppConfigurationDeviceStatus":
                    return deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus;
                case "#microsoft.graph.managedDeviceMobileAppConfigurationDeviceSummary":
                    return deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary;
                case "#microsoft.graph.managedDeviceMobileAppConfigurationUserStatus":
                    return deserializeIntoManagedDeviceMobileAppConfigurationUserStatus;
                case "#microsoft.graph.managedDeviceMobileAppConfigurationUserSummary":
                    return deserializeIntoManagedDeviceMobileAppConfigurationUserSummary;
                case "#microsoft.graph.managedDeviceOverview":
                    return deserializeIntoManagedDeviceOverview;
                case "#microsoft.graph.managedEBook":
                    return deserializeIntoManagedEBook;
                case "#microsoft.graph.managedEBookAssignment":
                    return deserializeIntoManagedEBookAssignment;
                case "#microsoft.graph.managedIOSLobApp":
                    return deserializeIntoManagedIOSLobApp;
                case "#microsoft.graph.managedIOSStoreApp":
                    return deserializeIntoManagedIOSStoreApp;
                case "#microsoft.graph.managedMobileApp":
                    return deserializeIntoManagedMobileApp;
                case "#microsoft.graph.managedMobileLobApp":
                    return deserializeIntoManagedMobileLobApp;
                case "#microsoft.graph.mdmWindowsInformationProtectionPolicy":
                    return deserializeIntoMdmWindowsInformationProtectionPolicy;
                case "#microsoft.graph.meetingAttendanceReport":
                    return deserializeIntoMeetingAttendanceReport;
                case "#microsoft.graph.membershipOutlierInsight":
                    return deserializeIntoMembershipOutlierInsight;
                case "#microsoft.graph.message":
                    return deserializeIntoMessage;
                case "#microsoft.graph.messageRule":
                    return deserializeIntoMessageRule;
                case "#microsoft.graph.microsoftAccountUserConversationMember":
                    return deserializeIntoMicrosoftAccountUserConversationMember;
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod":
                    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethod;
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodConfiguration":
                    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration;
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodTarget":
                    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget;
                case "#microsoft.graph.microsoftStoreForBusinessApp":
                    return deserializeIntoMicrosoftStoreForBusinessApp;
                case "#microsoft.graph.mobileApp":
                    return deserializeIntoMobileApp;
                case "#microsoft.graph.mobileAppAssignment":
                    return deserializeIntoMobileAppAssignment;
                case "#microsoft.graph.mobileAppCategory":
                    return deserializeIntoMobileAppCategory;
                case "#microsoft.graph.mobileAppContent":
                    return deserializeIntoMobileAppContent;
                case "#microsoft.graph.mobileAppContentFile":
                    return deserializeIntoMobileAppContentFile;
                case "#microsoft.graph.mobileAppTroubleshootingEvent":
                    return deserializeIntoMobileAppTroubleshootingEvent;
                case "#microsoft.graph.mobileContainedApp":
                    return deserializeIntoMobileContainedApp;
                case "#microsoft.graph.mobileLobApp":
                    return deserializeIntoMobileLobApp;
                case "#microsoft.graph.mobileThreatDefenseConnector":
                    return deserializeIntoMobileThreatDefenseConnector;
                case "#microsoft.graph.multiValueLegacyExtendedProperty":
                    return deserializeIntoMultiValueLegacyExtendedProperty;
                case "#microsoft.graph.muteParticipantOperation":
                    return deserializeIntoMuteParticipantOperation;
                case "#microsoft.graph.namedLocation":
                    return deserializeIntoNamedLocation;
                case "#microsoft.graph.notebook":
                    return deserializeIntoNotebook;
                case "#microsoft.graph.notificationMessageTemplate":
                    return deserializeIntoNotificationMessageTemplate;
                case "#microsoft.graph.oAuth2PermissionGrant":
                    return deserializeIntoOAuth2PermissionGrant;
                case "#microsoft.graph.offerShiftRequest":
                    return deserializeIntoOfferShiftRequest;
                case "#microsoft.graph.officeGraphInsights":
                    return deserializeIntoOfficeGraphInsights;
                case "#microsoft.graph.onenote":
                    return deserializeIntoOnenote;
                case "#microsoft.graph.onenoteEntityBaseModel":
                    return deserializeIntoOnenoteEntityBaseModel;
                case "#microsoft.graph.onenoteEntityHierarchyModel":
                    return deserializeIntoOnenoteEntityHierarchyModel;
                case "#microsoft.graph.onenoteEntitySchemaObjectModel":
                    return deserializeIntoOnenoteEntitySchemaObjectModel;
                case "#microsoft.graph.onenoteOperation":
                    return deserializeIntoOnenoteOperation;
                case "#microsoft.graph.onenotePage":
                    return deserializeIntoOnenotePage;
                case "#microsoft.graph.onenoteResource":
                    return deserializeIntoOnenoteResource;
                case "#microsoft.graph.onenoteSection":
                    return deserializeIntoOnenoteSection;
                case "#microsoft.graph.onlineMeeting":
                    return deserializeIntoOnlineMeeting;
                case "#microsoft.graph.onPremisesConditionalAccessSettings":
                    return deserializeIntoOnPremisesConditionalAccessSettings;
                case "#microsoft.graph.onPremisesDirectorySynchronization":
                    return deserializeIntoOnPremisesDirectorySynchronization;
                case "#microsoft.graph.openShift":
                    return deserializeIntoOpenShift;
                case "#microsoft.graph.openShiftChangeRequest":
                    return deserializeIntoOpenShiftChangeRequest;
                case "#microsoft.graph.openTypeExtension":
                    return deserializeIntoOpenTypeExtension;
                case "#microsoft.graph.operation":
                    return deserializeIntoOperation;
                case "#microsoft.graph.organization":
                    return deserializeIntoOrganization;
                case "#microsoft.graph.organizationalBranding":
                    return deserializeIntoOrganizationalBranding;
                case "#microsoft.graph.organizationalBrandingLocalization":
                    return deserializeIntoOrganizationalBrandingLocalization;
                case "#microsoft.graph.organizationalBrandingProperties":
                    return deserializeIntoOrganizationalBrandingProperties;
                case "#microsoft.graph.orgContact":
                    return deserializeIntoOrgContact;
                case "#microsoft.graph.outlookCategory":
                    return deserializeIntoOutlookCategory;
                case "#microsoft.graph.outlookItem":
                    return deserializeIntoOutlookItem;
                case "#microsoft.graph.outlookUser":
                    return deserializeIntoOutlookUser;
                case "#microsoft.graph.participant":
                    return deserializeIntoParticipant;
                case "#microsoft.graph.participantJoiningNotification":
                    return deserializeIntoParticipantJoiningNotification;
                case "#microsoft.graph.participantLeftNotification":
                    return deserializeIntoParticipantLeftNotification;
                case "#microsoft.graph.passwordAuthenticationMethod":
                    return deserializeIntoPasswordAuthenticationMethod;
                case "#microsoft.graph.permission":
                    return deserializeIntoPermission;
                case "#microsoft.graph.permissionGrantConditionSet":
                    return deserializeIntoPermissionGrantConditionSet;
                case "#microsoft.graph.permissionGrantPolicy":
                    return deserializeIntoPermissionGrantPolicy;
                case "#microsoft.graph.person":
                    return deserializeIntoPerson;
                case "#microsoft.graph.phoneAuthenticationMethod":
                    return deserializeIntoPhoneAuthenticationMethod;
                case "#microsoft.graph.pinnedChatMessageInfo":
                    return deserializeIntoPinnedChatMessageInfo;
                case "#microsoft.graph.place":
                    return deserializeIntoPlace;
                case "#microsoft.graph.planner":
                    return deserializeIntoPlanner;
                case "#microsoft.graph.plannerAssignedToTaskBoardTaskFormat":
                    return deserializeIntoPlannerAssignedToTaskBoardTaskFormat;
                case "#microsoft.graph.plannerBucket":
                    return deserializeIntoPlannerBucket;
                case "#microsoft.graph.plannerBucketTaskBoardTaskFormat":
                    return deserializeIntoPlannerBucketTaskBoardTaskFormat;
                case "#microsoft.graph.plannerGroup":
                    return deserializeIntoPlannerGroup;
                case "#microsoft.graph.plannerPlan":
                    return deserializeIntoPlannerPlan;
                case "#microsoft.graph.plannerPlanDetails":
                    return deserializeIntoPlannerPlanDetails;
                case "#microsoft.graph.plannerProgressTaskBoardTaskFormat":
                    return deserializeIntoPlannerProgressTaskBoardTaskFormat;
                case "#microsoft.graph.plannerTask":
                    return deserializeIntoPlannerTask;
                case "#microsoft.graph.plannerTaskDetails":
                    return deserializeIntoPlannerTaskDetails;
                case "#microsoft.graph.plannerUser":
                    return deserializeIntoPlannerUser;
                case "#microsoft.graph.playPromptOperation":
                    return deserializeIntoPlayPromptOperation;
                case "#microsoft.graph.policyBase":
                    return deserializeIntoPolicyBase;
                case "#microsoft.graph.policyRoot":
                    return deserializeIntoPolicyRoot;
                case "#microsoft.graph.post":
                    return deserializeIntoPost;
                case "#microsoft.graph.presence":
                    return deserializeIntoPresence;
                case "#microsoft.graph.printConnector":
                    return deserializeIntoPrintConnector;
                case "#microsoft.graph.printDocument":
                    return deserializeIntoPrintDocument;
                case "#microsoft.graph.printer":
                    return deserializeIntoPrinter;
                case "#microsoft.graph.printerBase":
                    return deserializeIntoPrinterBase;
                case "#microsoft.graph.printerCreateOperation":
                    return deserializeIntoPrinterCreateOperation;
                case "#microsoft.graph.printerShare":
                    return deserializeIntoPrinterShare;
                case "#microsoft.graph.printJob":
                    return deserializeIntoPrintJob;
                case "#microsoft.graph.printOperation":
                    return deserializeIntoPrintOperation;
                case "#microsoft.graph.printService":
                    return deserializeIntoPrintService;
                case "#microsoft.graph.printServiceEndpoint":
                    return deserializeIntoPrintServiceEndpoint;
                case "#microsoft.graph.printTask":
                    return deserializeIntoPrintTask;
                case "#microsoft.graph.printTaskDefinition":
                    return deserializeIntoPrintTaskDefinition;
                case "#microsoft.graph.printTaskTrigger":
                    return deserializeIntoPrintTaskTrigger;
                case "#microsoft.graph.printUsage":
                    return deserializeIntoPrintUsage;
                case "#microsoft.graph.printUsageByPrinter":
                    return deserializeIntoPrintUsageByPrinter;
                case "#microsoft.graph.printUsageByUser":
                    return deserializeIntoPrintUsageByUser;
                case "#microsoft.graph.profilePhoto":
                    return deserializeIntoProfilePhoto;
                case "#microsoft.graph.provisioningObjectSummary":
                    return deserializeIntoProvisioningObjectSummary;
                case "#microsoft.graph.rbacApplication":
                    return deserializeIntoRbacApplication;
                case "#microsoft.graph.recordOperation":
                    return deserializeIntoRecordOperation;
                case "#microsoft.graph.referenceAttachment":
                    return deserializeIntoReferenceAttachment;
                case "#microsoft.graph.remoteAssistancePartner":
                    return deserializeIntoRemoteAssistancePartner;
                case "#microsoft.graph.request":
                    return deserializeIntoRequest;
                case "#microsoft.graph.resourceOperation":
                    return deserializeIntoResourceOperation;
                case "#microsoft.graph.resourceSpecificPermissionGrant":
                    return deserializeIntoResourceSpecificPermissionGrant;
                case "#microsoft.graph.richLongRunningOperation":
                    return deserializeIntoRichLongRunningOperation;
                case "#microsoft.graph.riskDetection":
                    return deserializeIntoRiskDetection;
                case "#microsoft.graph.riskyServicePrincipal":
                    return deserializeIntoRiskyServicePrincipal;
                case "#microsoft.graph.riskyServicePrincipalHistoryItem":
                    return deserializeIntoRiskyServicePrincipalHistoryItem;
                case "#microsoft.graph.riskyUser":
                    return deserializeIntoRiskyUser;
                case "#microsoft.graph.riskyUserHistoryItem":
                    return deserializeIntoRiskyUserHistoryItem;
                case "#microsoft.graph.roleAssignment":
                    return deserializeIntoRoleAssignment;
                case "#microsoft.graph.roleDefinition":
                    return deserializeIntoRoleDefinition;
                case "#microsoft.graph.room":
                    return deserializeIntoRoom;
                case "#microsoft.graph.roomList":
                    return deserializeIntoRoomList;
                case "#microsoft.graph.samlOrWsFedExternalDomainFederation":
                    return deserializeIntoSamlOrWsFedExternalDomainFederation;
                case "#microsoft.graph.samlOrWsFedProvider":
                    return deserializeIntoSamlOrWsFedProvider;
                case "#microsoft.graph.schedule":
                    return deserializeIntoSchedule;
                case "#microsoft.graph.scheduleChangeRequest":
                    return deserializeIntoScheduleChangeRequest;
                case "#microsoft.graph.schedulingGroup":
                    return deserializeIntoSchedulingGroup;
                case "#microsoft.graph.schemaExtension":
                    return deserializeIntoSchemaExtension;
                case "#microsoft.graph.scopedRoleMembership":
                    return deserializeIntoScopedRoleMembership;
                case "#microsoft.graph.searchEntity":
                    return deserializeIntoSearchEntity;
                case "#microsoft.graph.sectionGroup":
                    return deserializeIntoSectionGroup;
                case "#microsoft.graph.secureScore":
                    return deserializeIntoSecureScore;
                case "#microsoft.graph.secureScoreControlProfile":
                    return deserializeIntoSecureScoreControlProfile;
                case "#microsoft.graph.security":
                    return deserializeIntoSecurity;
                case "#microsoft.graph.security.alert":
                    return I31715a026b1ced0f6a88616d35905e458c4d7672e4ac2cfaebeef17eefa762ea;
                case "#microsoft.graph.security.article":
                    return deserializeIntoArticle;
                case "#microsoft.graph.security.articleIndicator":
                    return deserializeIntoArticleIndicator;
                case "#microsoft.graph.security.artifact":
                    return deserializeIntoArtifact;
                case "#microsoft.graph.security.case":
                    return deserializeIntoCaseEscaped;
                case "#microsoft.graph.security.caseOperation":
                    return deserializeIntoCaseOperation;
                case "#microsoft.graph.security.casesRoot":
                    return deserializeIntoCasesRoot;
                case "#microsoft.graph.security.dataSet":
                    return deserializeIntoDataSet;
                case "#microsoft.graph.security.dataSource":
                    return deserializeIntoDataSource;
                case "#microsoft.graph.security.dataSourceContainer":
                    return deserializeIntoDataSourceContainer;
                case "#microsoft.graph.security.ediscoveryAddToReviewSetOperation":
                    return deserializeIntoEdiscoveryAddToReviewSetOperation;
                case "#microsoft.graph.security.ediscoveryCase":
                    return deserializeIntoEdiscoveryCase;
                case "#microsoft.graph.security.ediscoveryCaseSettings":
                    return deserializeIntoEdiscoveryCaseSettings;
                case "#microsoft.graph.security.ediscoveryCustodian":
                    return deserializeIntoEdiscoveryCustodian;
                case "#microsoft.graph.security.ediscoveryEstimateOperation":
                    return deserializeIntoEdiscoveryEstimateOperation;
                case "#microsoft.graph.security.ediscoveryHoldOperation":
                    return deserializeIntoEdiscoveryHoldOperation;
                case "#microsoft.graph.security.ediscoveryIndexOperation":
                    return deserializeIntoEdiscoveryIndexOperation;
                case "#microsoft.graph.security.ediscoveryNoncustodialDataSource":
                    return deserializeIntoEdiscoveryNoncustodialDataSource;
                case "#microsoft.graph.security.ediscoveryPurgeDataOperation":
                    return deserializeIntoEdiscoveryPurgeDataOperation;
                case "#microsoft.graph.security.ediscoveryReviewSet":
                    return deserializeIntoEdiscoveryReviewSet;
                case "#microsoft.graph.security.ediscoveryReviewSetQuery":
                    return deserializeIntoEdiscoveryReviewSetQuery;
                case "#microsoft.graph.security.ediscoveryReviewTag":
                    return deserializeIntoEdiscoveryReviewTag;
                case "#microsoft.graph.security.ediscoverySearch":
                    return deserializeIntoEdiscoverySearch;
                case "#microsoft.graph.security.ediscoveryTagOperation":
                    return deserializeIntoEdiscoveryTagOperation;
                case "#microsoft.graph.security.host":
                    return deserializeIntoHost;
                case "#microsoft.graph.security.hostComponent":
                    return deserializeIntoHostComponent;
                case "#microsoft.graph.security.hostCookie":
                    return deserializeIntoHostCookie;
                case "#microsoft.graph.security.hostname":
                    return deserializeIntoHostname;
                case "#microsoft.graph.security.hostReputation":
                    return deserializeIntoHostReputation;
                case "#microsoft.graph.security.hostTracker":
                    return deserializeIntoHostTracker;
                case "#microsoft.graph.security.incident":
                    return deserializeIntoIncident;
                case "#microsoft.graph.security.indicator":
                    return deserializeIntoIndicator;
                case "#microsoft.graph.security.intelligenceProfile":
                    return deserializeIntoIntelligenceProfile;
                case "#microsoft.graph.security.intelligenceProfileIndicator":
                    return deserializeIntoIntelligenceProfileIndicator;
                case "#microsoft.graph.security.ipAddress":
                    return deserializeIntoIpAddress;
                case "#microsoft.graph.security.passiveDnsRecord":
                    return deserializeIntoPassiveDnsRecord;
                case "#microsoft.graph.security.retentionEvent":
                    return deserializeIntoRetentionEvent;
                case "#microsoft.graph.security.retentionEventType":
                    return deserializeIntoRetentionEventType;
                case "#microsoft.graph.security.search":
                    return deserializeIntoSearch;
                case "#microsoft.graph.security.siteSource":
                    return deserializeIntoSiteSource;
                case "#microsoft.graph.security.tag":
                    return deserializeIntoTag;
                case "#microsoft.graph.security.threatIntelligence":
                    return deserializeIntoThreatIntelligence;
                case "#microsoft.graph.security.triggersRoot":
                    return deserializeIntoTriggersRoot;
                case "#microsoft.graph.security.triggerTypesRoot":
                    return deserializeIntoTriggerTypesRoot;
                case "#microsoft.graph.security.unclassifiedArtifact":
                    return deserializeIntoUnclassifiedArtifact;
                case "#microsoft.graph.security.unifiedGroupSource":
                    return deserializeIntoUnifiedGroupSource;
                case "#microsoft.graph.security.userSource":
                    return deserializeIntoUserSource;
                case "#microsoft.graph.security.vulnerability":
                    return deserializeIntoVulnerability;
                case "#microsoft.graph.security.vulnerabilityComponent":
                    return deserializeIntoVulnerabilityComponent;
                case "#microsoft.graph.securityReportsRoot":
                    return deserializeIntoSecurityReportsRoot;
                case "#microsoft.graph.serviceAnnouncement":
                    return deserializeIntoServiceAnnouncement;
                case "#microsoft.graph.serviceAnnouncementAttachment":
                    return deserializeIntoServiceAnnouncementAttachment;
                case "#microsoft.graph.serviceAnnouncementBase":
                    return deserializeIntoServiceAnnouncementBase;
                case "#microsoft.graph.serviceHealth":
                    return deserializeIntoServiceHealth;
                case "#microsoft.graph.serviceHealthIssue":
                    return deserializeIntoServiceHealthIssue;
                case "#microsoft.graph.servicePrincipal":
                    return deserializeIntoServicePrincipal;
                case "#microsoft.graph.servicePrincipalRiskDetection":
                    return deserializeIntoServicePrincipalRiskDetection;
                case "#microsoft.graph.serviceUpdateMessage":
                    return deserializeIntoServiceUpdateMessage;
                case "#microsoft.graph.settingStateDeviceSummary":
                    return deserializeIntoSettingStateDeviceSummary;
                case "#microsoft.graph.sharedDriveItem":
                    return deserializeIntoSharedDriveItem;
                case "#microsoft.graph.sharedInsight":
                    return deserializeIntoSharedInsight;
                case "#microsoft.graph.sharedPCConfiguration":
                    return deserializeIntoSharedPCConfiguration;
                case "#microsoft.graph.sharedWithChannelTeamInfo":
                    return deserializeIntoSharedWithChannelTeamInfo;
                case "#microsoft.graph.sharepoint":
                    return deserializeIntoSharepoint;
                case "#microsoft.graph.sharepointSettings":
                    return deserializeIntoSharepointSettings;
                case "#microsoft.graph.shift":
                    return deserializeIntoShift;
                case "#microsoft.graph.shiftPreferences":
                    return deserializeIntoShiftPreferences;
                case "#microsoft.graph.signIn":
                    return deserializeIntoSignIn;
                case "#microsoft.graph.simulation":
                    return deserializeIntoSimulation;
                case "#microsoft.graph.simulationAutomation":
                    return deserializeIntoSimulationAutomation;
                case "#microsoft.graph.simulationAutomationRun":
                    return deserializeIntoSimulationAutomationRun;
                case "#microsoft.graph.singleValueLegacyExtendedProperty":
                    return deserializeIntoSingleValueLegacyExtendedProperty;
                case "#microsoft.graph.site":
                    return deserializeIntoSite;
                case "#microsoft.graph.skypeForBusinessUserConversationMember":
                    return deserializeIntoSkypeForBusinessUserConversationMember;
                case "#microsoft.graph.skypeUserConversationMember":
                    return deserializeIntoSkypeUserConversationMember;
                case "#microsoft.graph.smsAuthenticationMethodConfiguration":
                    return deserializeIntoSmsAuthenticationMethodConfiguration;
                case "#microsoft.graph.smsAuthenticationMethodTarget":
                    return deserializeIntoSmsAuthenticationMethodTarget;
                case "#microsoft.graph.socialIdentityProvider":
                    return deserializeIntoSocialIdentityProvider;
                case "#microsoft.graph.softwareOathAuthenticationMethod":
                    return deserializeIntoSoftwareOathAuthenticationMethod;
                case "#microsoft.graph.softwareOathAuthenticationMethodConfiguration":
                    return deserializeIntoSoftwareOathAuthenticationMethodConfiguration;
                case "#microsoft.graph.softwareUpdateStatusSummary":
                    return deserializeIntoSoftwareUpdateStatusSummary;
                case "#microsoft.graph.startHoldMusicOperation":
                    return deserializeIntoStartHoldMusicOperation;
                case "#microsoft.graph.stopHoldMusicOperation":
                    return deserializeIntoStopHoldMusicOperation;
                case "#microsoft.graph.stsPolicy":
                    return deserializeIntoStsPolicy;
                case "#microsoft.graph.subjectRightsRequest":
                    return deserializeIntoSubjectRightsRequest;
                case "#microsoft.graph.subscribedSku":
                    return deserializeIntoSubscribedSku;
                case "#microsoft.graph.subscribeToToneOperation":
                    return deserializeIntoSubscribeToToneOperation;
                case "#microsoft.graph.subscription":
                    return deserializeIntoSubscription;
                case "#microsoft.graph.swapShiftsChangeRequest":
                    return deserializeIntoSwapShiftsChangeRequest;
                case "#microsoft.graph.synchronization":
                    return deserializeIntoSynchronization;
                case "#microsoft.graph.synchronizationJob":
                    return deserializeIntoSynchronizationJob;
                case "#microsoft.graph.synchronizationSchema":
                    return deserializeIntoSynchronizationSchema;
                case "#microsoft.graph.synchronizationTemplate":
                    return deserializeIntoSynchronizationTemplate;
                case "#microsoft.graph.targetedManagedAppConfiguration":
                    return deserializeIntoTargetedManagedAppConfiguration;
                case "#microsoft.graph.targetedManagedAppPolicyAssignment":
                    return deserializeIntoTargetedManagedAppPolicyAssignment;
                case "#microsoft.graph.targetedManagedAppProtection":
                    return deserializeIntoTargetedManagedAppProtection;
                case "#microsoft.graph.taskFileAttachment":
                    return deserializeIntoTaskFileAttachment;
                case "#microsoft.graph.team":
                    return deserializeIntoTeam;
                case "#microsoft.graph.teamInfo":
                    return deserializeIntoTeamInfo;
                case "#microsoft.graph.teamsApp":
                    return deserializeIntoTeamsApp;
                case "#microsoft.graph.teamsAppDefinition":
                    return deserializeIntoTeamsAppDefinition;
                case "#microsoft.graph.teamsAppInstallation":
                    return deserializeIntoTeamsAppInstallation;
                case "#microsoft.graph.teamsAsyncOperation":
                    return deserializeIntoTeamsAsyncOperation;
                case "#microsoft.graph.teamsTab":
                    return deserializeIntoTeamsTab;
                case "#microsoft.graph.teamsTemplate":
                    return deserializeIntoTeamsTemplate;
                case "#microsoft.graph.teamwork":
                    return deserializeIntoTeamwork;
                case "#microsoft.graph.teamworkBot":
                    return deserializeIntoTeamworkBot;
                case "#microsoft.graph.teamworkHostedContent":
                    return deserializeIntoTeamworkHostedContent;
                case "#microsoft.graph.teamworkTag":
                    return deserializeIntoTeamworkTag;
                case "#microsoft.graph.teamworkTagMember":
                    return deserializeIntoTeamworkTagMember;
                case "#microsoft.graph.telecomExpenseManagementPartner":
                    return deserializeIntoTelecomExpenseManagementPartner;
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethod":
                    return deserializeIntoTemporaryAccessPassAuthenticationMethod;
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethodConfiguration":
                    return deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration;
                case "#microsoft.graph.tenantAppManagementPolicy":
                    return deserializeIntoTenantAppManagementPolicy;
                case "#microsoft.graph.termsAndConditions":
                    return deserializeIntoTermsAndConditions;
                case "#microsoft.graph.termsAndConditionsAcceptanceStatus":
                    return deserializeIntoTermsAndConditionsAcceptanceStatus;
                case "#microsoft.graph.termsAndConditionsAssignment":
                    return deserializeIntoTermsAndConditionsAssignment;
                case "#microsoft.graph.termsOfUseContainer":
                    return deserializeIntoTermsOfUseContainer;
                case "#microsoft.graph.termStore.group":
                    return I23e16b52d4b109c19ebd3ab2e05b0d3e8411c17b6a4e64b58a4565adab867a21;
                case "#microsoft.graph.termStore.relation":
                    return deserializeIntoRelation;
                case "#microsoft.graph.termStore.set":
                    return deserializeIntoSet;
                case "#microsoft.graph.termStore.store":
                    return deserializeIntoStore;
                case "#microsoft.graph.termStore.term":
                    return deserializeIntoTerm;
                case "#microsoft.graph.threatAssessmentRequest":
                    return deserializeIntoThreatAssessmentRequest;
                case "#microsoft.graph.threatAssessmentResult":
                    return deserializeIntoThreatAssessmentResult;
                case "#microsoft.graph.thumbnailSet":
                    return deserializeIntoThumbnailSet;
                case "#microsoft.graph.timeOff":
                    return deserializeIntoTimeOff;
                case "#microsoft.graph.timeOffReason":
                    return deserializeIntoTimeOffReason;
                case "#microsoft.graph.timeOffRequest":
                    return deserializeIntoTimeOffRequest;
                case "#microsoft.graph.todo":
                    return deserializeIntoTodo;
                case "#microsoft.graph.todoTask":
                    return deserializeIntoTodoTask;
                case "#microsoft.graph.todoTaskList":
                    return deserializeIntoTodoTaskList;
                case "#microsoft.graph.tokenIssuancePolicy":
                    return deserializeIntoTokenIssuancePolicy;
                case "#microsoft.graph.tokenLifetimePolicy":
                    return deserializeIntoTokenLifetimePolicy;
                case "#microsoft.graph.trending":
                    return deserializeIntoTrending;
                case "#microsoft.graph.unifiedRbacResourceAction":
                    return deserializeIntoUnifiedRbacResourceAction;
                case "#microsoft.graph.unifiedRbacResourceNamespace":
                    return deserializeIntoUnifiedRbacResourceNamespace;
                case "#microsoft.graph.unifiedRoleAssignment":
                    return deserializeIntoUnifiedRoleAssignment;
                case "#microsoft.graph.unifiedRoleAssignmentSchedule":
                    return deserializeIntoUnifiedRoleAssignmentSchedule;
                case "#microsoft.graph.unifiedRoleAssignmentScheduleInstance":
                    return deserializeIntoUnifiedRoleAssignmentScheduleInstance;
                case "#microsoft.graph.unifiedRoleAssignmentScheduleRequest":
                    return deserializeIntoUnifiedRoleAssignmentScheduleRequest;
                case "#microsoft.graph.unifiedRoleDefinition":
                    return deserializeIntoUnifiedRoleDefinition;
                case "#microsoft.graph.unifiedRoleEligibilitySchedule":
                    return deserializeIntoUnifiedRoleEligibilitySchedule;
                case "#microsoft.graph.unifiedRoleEligibilityScheduleInstance":
                    return deserializeIntoUnifiedRoleEligibilityScheduleInstance;
                case "#microsoft.graph.unifiedRoleEligibilityScheduleRequest":
                    return deserializeIntoUnifiedRoleEligibilityScheduleRequest;
                case "#microsoft.graph.unifiedRoleManagementPolicy":
                    return deserializeIntoUnifiedRoleManagementPolicy;
                case "#microsoft.graph.unifiedRoleManagementPolicyApprovalRule":
                    return deserializeIntoUnifiedRoleManagementPolicyApprovalRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyAssignment":
                    return deserializeIntoUnifiedRoleManagementPolicyAssignment;
                case "#microsoft.graph.unifiedRoleManagementPolicyAuthenticationContextRule":
                    return deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyEnablementRule":
                    return deserializeIntoUnifiedRoleManagementPolicyEnablementRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyExpirationRule":
                    return deserializeIntoUnifiedRoleManagementPolicyExpirationRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyNotificationRule":
                    return deserializeIntoUnifiedRoleManagementPolicyNotificationRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyRule":
                    return deserializeIntoUnifiedRoleManagementPolicyRule;
                case "#microsoft.graph.unifiedRoleScheduleBase":
                    return deserializeIntoUnifiedRoleScheduleBase;
                case "#microsoft.graph.unifiedRoleScheduleInstanceBase":
                    return deserializeIntoUnifiedRoleScheduleInstanceBase;
                case "#microsoft.graph.unmuteParticipantOperation":
                    return deserializeIntoUnmuteParticipantOperation;
                case "#microsoft.graph.updateRecordingStatusOperation":
                    return deserializeIntoUpdateRecordingStatusOperation;
                case "#microsoft.graph.urlAssessmentRequest":
                    return deserializeIntoUrlAssessmentRequest;
                case "#microsoft.graph.usedInsight":
                    return deserializeIntoUsedInsight;
                case "#microsoft.graph.user":
                    return deserializeIntoUser;
                case "#microsoft.graph.userActivity":
                    return deserializeIntoUserActivity;
                case "#microsoft.graph.userConsentRequest":
                    return deserializeIntoUserConsentRequest;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthApplicationPerformance":
                    return deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails":
                    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId":
                    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthAppPerformanceByOSVersion":
                    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthDeviceModelPerformance":
                    return deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthDevicePerformance":
                    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthDevicePerformanceDetails":
                    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails;
                case "#microsoft.graph.userExperienceAnalyticsAppHealthOSVersionPerformance":
                    return deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance;
                case "#microsoft.graph.userExperienceAnalyticsBaseline":
                    return deserializeIntoUserExperienceAnalyticsBaseline;
                case "#microsoft.graph.userExperienceAnalyticsCategory":
                    return deserializeIntoUserExperienceAnalyticsCategory;
                case "#microsoft.graph.userExperienceAnalyticsDevicePerformance":
                    return deserializeIntoUserExperienceAnalyticsDevicePerformance;
                case "#microsoft.graph.userExperienceAnalyticsDeviceScores":
                    return deserializeIntoUserExperienceAnalyticsDeviceScores;
                case "#microsoft.graph.userExperienceAnalyticsDeviceStartupHistory":
                    return deserializeIntoUserExperienceAnalyticsDeviceStartupHistory;
                case "#microsoft.graph.userExperienceAnalyticsDeviceStartupProcess":
                    return deserializeIntoUserExperienceAnalyticsDeviceStartupProcess;
                case "#microsoft.graph.userExperienceAnalyticsMetric":
                    return deserializeIntoUserExperienceAnalyticsMetric;
                case "#microsoft.graph.userExperienceAnalyticsMetricHistory":
                    return deserializeIntoUserExperienceAnalyticsMetricHistory;
                case "#microsoft.graph.userExperienceAnalyticsModelScores":
                    return deserializeIntoUserExperienceAnalyticsModelScores;
                case "#microsoft.graph.userExperienceAnalyticsOverview":
                    return deserializeIntoUserExperienceAnalyticsOverview;
                case "#microsoft.graph.userExperienceAnalyticsScoreHistory":
                    return deserializeIntoUserExperienceAnalyticsScoreHistory;
                case "#microsoft.graph.userExperienceAnalyticsWorkFromAnywhereDevice":
                    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice;
                case "#microsoft.graph.userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric":
                    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric;
                case "#microsoft.graph.userExperienceAnalyticsWorkFromAnywhereMetric":
                    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric;
                case "#microsoft.graph.userExperienceAnalyticsWorkFromAnywhereModelPerformance":
                    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance;
                case "#microsoft.graph.userFlowLanguageConfiguration":
                    return deserializeIntoUserFlowLanguageConfiguration;
                case "#microsoft.graph.userFlowLanguagePage":
                    return deserializeIntoUserFlowLanguagePage;
                case "#microsoft.graph.userInstallStateSummary":
                    return deserializeIntoUserInstallStateSummary;
                case "#microsoft.graph.userRegistrationDetails":
                    return deserializeIntoUserRegistrationDetails;
                case "#microsoft.graph.userScopeTeamsAppInstallation":
                    return deserializeIntoUserScopeTeamsAppInstallation;
                case "#microsoft.graph.userSettings":
                    return deserializeIntoUserSettings;
                case "#microsoft.graph.userSignInInsight":
                    return deserializeIntoUserSignInInsight;
                case "#microsoft.graph.userTeamwork":
                    return deserializeIntoUserTeamwork;
                case "#microsoft.graph.voiceAuthenticationMethodConfiguration":
                    return deserializeIntoVoiceAuthenticationMethodConfiguration;
                case "#microsoft.graph.vppToken":
                    return deserializeIntoVppToken;
                case "#microsoft.graph.webApp":
                    return deserializeIntoWebApp;
                case "#microsoft.graph.win32LobApp":
                    return deserializeIntoWin32LobApp;
                case "#microsoft.graph.windows10CompliancePolicy":
                    return deserializeIntoWindows10CompliancePolicy;
                case "#microsoft.graph.windows10CustomConfiguration":
                    return deserializeIntoWindows10CustomConfiguration;
                case "#microsoft.graph.windows10EndpointProtectionConfiguration":
                    return deserializeIntoWindows10EndpointProtectionConfiguration;
                case "#microsoft.graph.windows10EnterpriseModernAppManagementConfiguration":
                    return deserializeIntoWindows10EnterpriseModernAppManagementConfiguration;
                case "#microsoft.graph.windows10GeneralConfiguration":
                    return deserializeIntoWindows10GeneralConfiguration;
                case "#microsoft.graph.windows10MobileCompliancePolicy":
                    return deserializeIntoWindows10MobileCompliancePolicy;
                case "#microsoft.graph.windows10SecureAssessmentConfiguration":
                    return deserializeIntoWindows10SecureAssessmentConfiguration;
                case "#microsoft.graph.windows10TeamGeneralConfiguration":
                    return deserializeIntoWindows10TeamGeneralConfiguration;
                case "#microsoft.graph.windows81CompliancePolicy":
                    return deserializeIntoWindows81CompliancePolicy;
                case "#microsoft.graph.windows81GeneralConfiguration":
                    return deserializeIntoWindows81GeneralConfiguration;
                case "#microsoft.graph.windowsAppX":
                    return deserializeIntoWindowsAppX;
                case "#microsoft.graph.windowsAutopilotDeviceIdentity":
                    return deserializeIntoWindowsAutopilotDeviceIdentity;
                case "#microsoft.graph.windowsDefenderAdvancedThreatProtectionConfiguration":
                    return deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration;
                case "#microsoft.graph.windowsDeviceMalwareState":
                    return deserializeIntoWindowsDeviceMalwareState;
                case "#microsoft.graph.windowsHelloForBusinessAuthenticationMethod":
                    return deserializeIntoWindowsHelloForBusinessAuthenticationMethod;
                case "#microsoft.graph.windowsInformationProtection":
                    return deserializeIntoWindowsInformationProtection;
                case "#microsoft.graph.windowsInformationProtectionAppLearningSummary":
                    return deserializeIntoWindowsInformationProtectionAppLearningSummary;
                case "#microsoft.graph.windowsInformationProtectionAppLockerFile":
                    return deserializeIntoWindowsInformationProtectionAppLockerFile;
                case "#microsoft.graph.windowsInformationProtectionNetworkLearningSummary":
                    return deserializeIntoWindowsInformationProtectionNetworkLearningSummary;
                case "#microsoft.graph.windowsInformationProtectionPolicy":
                    return deserializeIntoWindowsInformationProtectionPolicy;
                case "#microsoft.graph.windowsMalwareInformation":
                    return deserializeIntoWindowsMalwareInformation;
                case "#microsoft.graph.windowsMicrosoftEdgeApp":
                    return deserializeIntoWindowsMicrosoftEdgeApp;
                case "#microsoft.graph.windowsMobileMSI":
                    return deserializeIntoWindowsMobileMSI;
                case "#microsoft.graph.windowsPhone81CompliancePolicy":
                    return deserializeIntoWindowsPhone81CompliancePolicy;
                case "#microsoft.graph.windowsPhone81CustomConfiguration":
                    return deserializeIntoWindowsPhone81CustomConfiguration;
                case "#microsoft.graph.windowsPhone81GeneralConfiguration":
                    return deserializeIntoWindowsPhone81GeneralConfiguration;
                case "#microsoft.graph.windowsProtectionState":
                    return deserializeIntoWindowsProtectionState;
                case "#microsoft.graph.windowsUniversalAppX":
                    return deserializeIntoWindowsUniversalAppX;
                case "#microsoft.graph.windowsUniversalAppXContainedApp":
                    return deserializeIntoWindowsUniversalAppXContainedApp;
                case "#microsoft.graph.windowsUpdateForBusinessConfiguration":
                    return deserializeIntoWindowsUpdateForBusinessConfiguration;
                case "#microsoft.graph.windowsWebApp":
                    return deserializeIntoWindowsWebApp;
                case "#microsoft.graph.workbook":
                    return deserializeIntoWorkbook;
                case "#microsoft.graph.workbookApplication":
                    return deserializeIntoWorkbookApplication;
                case "#microsoft.graph.workbookChart":
                    return deserializeIntoWorkbookChart;
                case "#microsoft.graph.workbookChartAreaFormat":
                    return deserializeIntoWorkbookChartAreaFormat;
                case "#microsoft.graph.workbookChartAxes":
                    return deserializeIntoWorkbookChartAxes;
                case "#microsoft.graph.workbookChartAxis":
                    return deserializeIntoWorkbookChartAxis;
                case "#microsoft.graph.workbookChartAxisFormat":
                    return deserializeIntoWorkbookChartAxisFormat;
                case "#microsoft.graph.workbookChartAxisTitle":
                    return deserializeIntoWorkbookChartAxisTitle;
                case "#microsoft.graph.workbookChartAxisTitleFormat":
                    return deserializeIntoWorkbookChartAxisTitleFormat;
                case "#microsoft.graph.workbookChartDataLabelFormat":
                    return deserializeIntoWorkbookChartDataLabelFormat;
                case "#microsoft.graph.workbookChartDataLabels":
                    return deserializeIntoWorkbookChartDataLabels;
                case "#microsoft.graph.workbookChartFill":
                    return deserializeIntoWorkbookChartFill;
                case "#microsoft.graph.workbookChartFont":
                    return deserializeIntoWorkbookChartFont;
                case "#microsoft.graph.workbookChartGridlines":
                    return deserializeIntoWorkbookChartGridlines;
                case "#microsoft.graph.workbookChartGridlinesFormat":
                    return deserializeIntoWorkbookChartGridlinesFormat;
                case "#microsoft.graph.workbookChartLegend":
                    return deserializeIntoWorkbookChartLegend;
                case "#microsoft.graph.workbookChartLegendFormat":
                    return deserializeIntoWorkbookChartLegendFormat;
                case "#microsoft.graph.workbookChartLineFormat":
                    return deserializeIntoWorkbookChartLineFormat;
                case "#microsoft.graph.workbookChartPoint":
                    return deserializeIntoWorkbookChartPoint;
                case "#microsoft.graph.workbookChartPointFormat":
                    return deserializeIntoWorkbookChartPointFormat;
                case "#microsoft.graph.workbookChartSeries":
                    return deserializeIntoWorkbookChartSeries;
                case "#microsoft.graph.workbookChartSeriesFormat":
                    return deserializeIntoWorkbookChartSeriesFormat;
                case "#microsoft.graph.workbookChartTitle":
                    return deserializeIntoWorkbookChartTitle;
                case "#microsoft.graph.workbookChartTitleFormat":
                    return deserializeIntoWorkbookChartTitleFormat;
                case "#microsoft.graph.workbookComment":
                    return deserializeIntoWorkbookComment;
                case "#microsoft.graph.workbookCommentReply":
                    return deserializeIntoWorkbookCommentReply;
                case "#microsoft.graph.workbookFilter":
                    return deserializeIntoWorkbookFilter;
                case "#microsoft.graph.workbookFormatProtection":
                    return deserializeIntoWorkbookFormatProtection;
                case "#microsoft.graph.workbookFunctionResult":
                    return deserializeIntoWorkbookFunctionResult;
                case "#microsoft.graph.workbookFunctions":
                    return deserializeIntoWorkbookFunctions;
                case "#microsoft.graph.workbookNamedItem":
                    return deserializeIntoWorkbookNamedItem;
                case "#microsoft.graph.workbookOperation":
                    return deserializeIntoWorkbookOperation;
                case "#microsoft.graph.workbookPivotTable":
                    return deserializeIntoWorkbookPivotTable;
                case "#microsoft.graph.workbookRange":
                    return deserializeIntoWorkbookRange;
                case "#microsoft.graph.workbookRangeBorder":
                    return deserializeIntoWorkbookRangeBorder;
                case "#microsoft.graph.workbookRangeFill":
                    return deserializeIntoWorkbookRangeFill;
                case "#microsoft.graph.workbookRangeFont":
                    return deserializeIntoWorkbookRangeFont;
                case "#microsoft.graph.workbookRangeFormat":
                    return deserializeIntoWorkbookRangeFormat;
                case "#microsoft.graph.workbookRangeSort":
                    return deserializeIntoWorkbookRangeSort;
                case "#microsoft.graph.workbookRangeView":
                    return deserializeIntoWorkbookRangeView;
                case "#microsoft.graph.workbookTable":
                    return deserializeIntoWorkbookTable;
                case "#microsoft.graph.workbookTableColumn":
                    return deserializeIntoWorkbookTableColumn;
                case "#microsoft.graph.workbookTableRow":
                    return deserializeIntoWorkbookTableRow;
                case "#microsoft.graph.workbookTableSort":
                    return deserializeIntoWorkbookTableSort;
                case "#microsoft.graph.workbookWorksheet":
                    return deserializeIntoWorkbookWorksheet;
                case "#microsoft.graph.workbookWorksheetProtection":
                    return deserializeIntoWorkbookWorksheetProtection;
                case "#microsoft.graph.workforceIntegration":
                    return deserializeIntoWorkforceIntegration;
                case "#microsoft.graph.x509CertificateAuthenticationMethodConfiguration":
                    return deserializeIntoX509CertificateAuthenticationMethodConfiguration;
            }
        }
    }
    return deserializeIntoEntity;
}
