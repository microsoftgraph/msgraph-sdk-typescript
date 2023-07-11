import {AccessPackage} from './accessPackage';
import {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import {AccessPackageAssignmentReviewSettings} from './accessPackageAssignmentReviewSettings';
import {AccessPackageAutomaticRequestSettings} from './accessPackageAutomaticRequestSettings';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageQuestion} from './accessPackageQuestion';
import {AllowedTargetScope} from './allowedTargetScope';
import {createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue';
import {createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue} from './createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createAccessPackageQuestionFromDiscriminatorValue} from './createAccessPackageQuestionFromDiscriminatorValue';
import {createCustomExtensionStageSettingFromDiscriminatorValue} from './createCustomExtensionStageSettingFromDiscriminatorValue';
import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {CustomExtensionStageSetting} from './customExtensionStageSetting';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ExpirationPattern} from './expirationPattern';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAssignmentApprovalSettings} from './serializeAccessPackageAssignmentApprovalSettings';
import {serializeAccessPackageAssignmentRequestorSettings} from './serializeAccessPackageAssignmentRequestorSettings';
import {serializeAccessPackageAssignmentReviewSettings} from './serializeAccessPackageAssignmentReviewSettings';
import {serializeAccessPackageAutomaticRequestSettings} from './serializeAccessPackageAutomaticRequestSettings';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {serializeCustomExtensionStageSetting} from './serializeCustomExtensionStageSetting';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializeSubjectSet} from './serializeSubjectSet';
import {SubjectSet} from './subjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentPolicy(accessPackageAssignmentPolicy: AccessPackageAssignmentPolicy | undefined = {} as AccessPackageAssignmentPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageAssignmentPolicy),
        "accessPackage": n => { accessPackageAssignmentPolicy.accessPackage = n.getObjectValue<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "allowedTargetScope": n => { accessPackageAssignmentPolicy.allowedTargetScope = n.getEnumValue<AllowedTargetScope>(AllowedTargetScope); },
        "automaticRequestSettings": n => { accessPackageAssignmentPolicy.automaticRequestSettings = n.getObjectValue<AccessPackageAutomaticRequestSettings>(createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue); },
        "catalog": n => { accessPackageAssignmentPolicy.catalog = n.getObjectValue<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
        "createdDateTime": n => { accessPackageAssignmentPolicy.createdDateTime = n.getDateValue(); },
        "customExtensionStageSettings": n => { accessPackageAssignmentPolicy.customExtensionStageSettings = n.getCollectionOfObjectValues<CustomExtensionStageSetting>(createCustomExtensionStageSettingFromDiscriminatorValue); },
        "description": n => { accessPackageAssignmentPolicy.description = n.getStringValue(); },
        "displayName": n => { accessPackageAssignmentPolicy.displayName = n.getStringValue(); },
        "expiration": n => { accessPackageAssignmentPolicy.expiration = n.getObjectValue<ExpirationPattern>(createExpirationPatternFromDiscriminatorValue); },
        "modifiedDateTime": n => { accessPackageAssignmentPolicy.modifiedDateTime = n.getDateValue(); },
        "questions": n => { accessPackageAssignmentPolicy.questions = n.getCollectionOfObjectValues<AccessPackageQuestion>(createAccessPackageQuestionFromDiscriminatorValue); },
        "requestApprovalSettings": n => { accessPackageAssignmentPolicy.requestApprovalSettings = n.getObjectValue<AccessPackageAssignmentApprovalSettings>(createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue); },
        "requestorSettings": n => { accessPackageAssignmentPolicy.requestorSettings = n.getObjectValue<AccessPackageAssignmentRequestorSettings>(createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue); },
        "reviewSettings": n => { accessPackageAssignmentPolicy.reviewSettings = n.getObjectValue<AccessPackageAssignmentReviewSettings>(createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue); },
        "specificAllowedTargets": n => { accessPackageAssignmentPolicy.specificAllowedTargets = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
    }
}
