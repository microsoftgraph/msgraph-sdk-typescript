import { type AccessPackage } from './accessPackage';
import { type AccessPackageAssignmentApprovalSettings } from './accessPackageAssignmentApprovalSettings';
import { type AccessPackageAssignmentPolicy } from './accessPackageAssignmentPolicy';
import { type AccessPackageAssignmentRequestorSettings } from './accessPackageAssignmentRequestorSettings';
import { type AccessPackageAssignmentReviewSettings } from './accessPackageAssignmentReviewSettings';
import { type AccessPackageAutomaticRequestSettings } from './accessPackageAutomaticRequestSettings';
import { type AccessPackageCatalog } from './accessPackageCatalog';
import { type AccessPackageQuestion } from './accessPackageQuestion';
import { AllowedTargetScope } from './allowedTargetScope';
import { type CustomExtensionStageSetting } from './customExtensionStageSetting';
import { type ExpirationPattern } from './expirationPattern';
import { serializeAccessPackage } from './serializeAccessPackage';
import { serializeAccessPackageAssignmentApprovalSettings } from './serializeAccessPackageAssignmentApprovalSettings';
import { serializeAccessPackageAssignmentRequestorSettings } from './serializeAccessPackageAssignmentRequestorSettings';
import { serializeAccessPackageAssignmentReviewSettings } from './serializeAccessPackageAssignmentReviewSettings';
import { serializeAccessPackageAutomaticRequestSettings } from './serializeAccessPackageAutomaticRequestSettings';
import { serializeAccessPackageCatalog } from './serializeAccessPackageCatalog';
import { serializeAccessPackageQuestion } from './serializeAccessPackageQuestion';
import { serializeCustomExtensionStageSetting } from './serializeCustomExtensionStageSetting';
import { serializeEntity } from './serializeEntity';
import { serializeExpirationPattern } from './serializeExpirationPattern';
import { serializeSubjectSet } from './serializeSubjectSet';
import { type SubjectSet } from './subjectSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentPolicy(writer: SerializationWriter, accessPackageAssignmentPolicy: AccessPackageAssignmentPolicy | undefined = {} as AccessPackageAssignmentPolicy) : void {
        serializeEntity(writer, accessPackageAssignmentPolicy)
        writer.writeObjectValue<AccessPackage>("accessPackage", accessPackageAssignmentPolicy.accessPackage, serializeAccessPackage);
        writer.writeEnumValue<AllowedTargetScope>("allowedTargetScope", accessPackageAssignmentPolicy.allowedTargetScope);
        writer.writeObjectValue<AccessPackageAutomaticRequestSettings>("automaticRequestSettings", accessPackageAssignmentPolicy.automaticRequestSettings, serializeAccessPackageAutomaticRequestSettings);
        writer.writeObjectValue<AccessPackageCatalog>("catalog", accessPackageAssignmentPolicy.catalog, serializeAccessPackageCatalog);
        writer.writeDateValue("createdDateTime", accessPackageAssignmentPolicy.createdDateTime);
        writer.writeCollectionOfObjectValues<CustomExtensionStageSetting>("customExtensionStageSettings", accessPackageAssignmentPolicy.customExtensionStageSettings, serializeCustomExtensionStageSetting);
        writer.writeStringValue("description", accessPackageAssignmentPolicy.description);
        writer.writeStringValue("displayName", accessPackageAssignmentPolicy.displayName);
        writer.writeObjectValue<ExpirationPattern>("expiration", accessPackageAssignmentPolicy.expiration, serializeExpirationPattern);
        writer.writeDateValue("modifiedDateTime", accessPackageAssignmentPolicy.modifiedDateTime);
        writer.writeCollectionOfObjectValues<AccessPackageQuestion>("questions", accessPackageAssignmentPolicy.questions, serializeAccessPackageQuestion);
        writer.writeObjectValue<AccessPackageAssignmentApprovalSettings>("requestApprovalSettings", accessPackageAssignmentPolicy.requestApprovalSettings, serializeAccessPackageAssignmentApprovalSettings);
        writer.writeObjectValue<AccessPackageAssignmentRequestorSettings>("requestorSettings", accessPackageAssignmentPolicy.requestorSettings, serializeAccessPackageAssignmentRequestorSettings);
        writer.writeObjectValue<AccessPackageAssignmentReviewSettings>("reviewSettings", accessPackageAssignmentPolicy.reviewSettings, serializeAccessPackageAssignmentReviewSettings);
        writer.writeCollectionOfObjectValues<SubjectSet>("specificAllowedTargets", accessPackageAssignmentPolicy.specificAllowedTargets, serializeSubjectSet);
}
