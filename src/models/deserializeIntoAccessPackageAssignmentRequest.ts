import {AccessPackage} from './accessPackage';
import {AccessPackageAnswer} from './accessPackageAnswer';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageSubject} from './accessPackageSubject';
import {createAccessPackageAnswerFromDiscriminatorValue} from './createAccessPackageAnswerFromDiscriminatorValue';
import {createAccessPackageAssignmentFromDiscriminatorValue} from './createAccessPackageAssignmentFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createAccessPackageSubjectFromDiscriminatorValue} from './createAccessPackageSubjectFromDiscriminatorValue';
import {createCustomExtensionCalloutInstanceFromDiscriminatorValue} from './createCustomExtensionCalloutInstanceFromDiscriminatorValue';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAnswer} from './serializeAccessPackageAnswer';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeAccessPackageSubject} from './serializeAccessPackageSubject';
import {serializeCustomExtensionCalloutInstance} from './serializeCustomExtensionCalloutInstance';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequest(accessPackageAssignmentRequest: AccessPackageAssignmentRequest | undefined = {} as AccessPackageAssignmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageAssignmentRequest),
        "accessPackage": n => { accessPackageAssignmentRequest.accessPackage = n.getObjectValue<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "answers": n => { accessPackageAssignmentRequest.answers = n.getCollectionOfObjectValues<AccessPackageAnswer>(createAccessPackageAnswerFromDiscriminatorValue); },
        "assignment": n => { accessPackageAssignmentRequest.assignment = n.getObjectValue<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); },
        "completedDateTime": n => { accessPackageAssignmentRequest.completedDateTime = n.getDateValue(); },
        "createdDateTime": n => { accessPackageAssignmentRequest.createdDateTime = n.getDateValue(); },
        "customExtensionCalloutInstances": n => { accessPackageAssignmentRequest.customExtensionCalloutInstances = n.getCollectionOfObjectValues<CustomExtensionCalloutInstance>(createCustomExtensionCalloutInstanceFromDiscriminatorValue); },
        "requestor": n => { accessPackageAssignmentRequest.requestor = n.getObjectValue<AccessPackageSubject>(createAccessPackageSubjectFromDiscriminatorValue); },
        "requestType": n => { accessPackageAssignmentRequest.requestType = n.getEnumValue<AccessPackageRequestType>(AccessPackageRequestType); },
        "schedule": n => { accessPackageAssignmentRequest.schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); },
        "state": n => { accessPackageAssignmentRequest.state = n.getEnumValue<AccessPackageRequestState>(AccessPackageRequestState); },
        "status": n => { accessPackageAssignmentRequest.status = n.getStringValue(); },
    }
}
