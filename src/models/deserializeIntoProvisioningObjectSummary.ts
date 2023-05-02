import {createInitiatorFromDiscriminatorValue} from './createInitiatorFromDiscriminatorValue';
import {createModifiedPropertyFromDiscriminatorValue} from './createModifiedPropertyFromDiscriminatorValue';
import {createProvisionedIdentityFromDiscriminatorValue} from './createProvisionedIdentityFromDiscriminatorValue';
import {createProvisioningServicePrincipalFromDiscriminatorValue} from './createProvisioningServicePrincipalFromDiscriminatorValue';
import {createProvisioningStatusInfoFromDiscriminatorValue} from './createProvisioningStatusInfoFromDiscriminatorValue';
import {createProvisioningStepFromDiscriminatorValue} from './createProvisioningStepFromDiscriminatorValue';
import {createProvisioningSystemFromDiscriminatorValue} from './createProvisioningSystemFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Initiator} from './initiator';
import {ModifiedProperty} from './modifiedProperty';
import {ProvisionedIdentity} from './provisionedIdentity';
import {ProvisioningAction} from './provisioningAction';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import {ProvisioningStatusInfo} from './provisioningStatusInfo';
import {ProvisioningStep} from './provisioningStep';
import {ProvisioningSystem} from './provisioningSystem';
import {serializeInitiator} from './serializeInitiator';
import {serializeModifiedProperty} from './serializeModifiedProperty';
import {serializeProvisionedIdentity} from './serializeProvisionedIdentity';
import {serializeProvisioningServicePrincipal} from './serializeProvisioningServicePrincipal';
import {serializeProvisioningStatusInfo} from './serializeProvisioningStatusInfo';
import {serializeProvisioningStep} from './serializeProvisioningStep';
import {serializeProvisioningSystem} from './serializeProvisioningSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningObjectSummary(provisioningObjectSummary: ProvisioningObjectSummary | undefined = {} as ProvisioningObjectSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(provisioningObjectSummary),
        "activityDateTime": n => { provisioningObjectSummary.activityDateTime = n.getDateValue(); },
        "changeId": n => { provisioningObjectSummary.changeId = n.getStringValue(); },
        "cycleId": n => { provisioningObjectSummary.cycleId = n.getStringValue(); },
        "durationInMilliseconds": n => { provisioningObjectSummary.durationInMilliseconds = n.getNumberValue(); },
        "initiatedBy": n => { provisioningObjectSummary.initiatedBy = n.getObjectValue<Initiator>(createInitiatorFromDiscriminatorValue); },
        "jobId": n => { provisioningObjectSummary.jobId = n.getStringValue(); },
        "modifiedProperties": n => { provisioningObjectSummary.modifiedProperties = n.getCollectionOfObjectValues<ModifiedProperty>(createModifiedPropertyFromDiscriminatorValue); },
        "provisioningAction": n => { provisioningObjectSummary.provisioningAction = n.getEnumValue<ProvisioningAction>(ProvisioningAction); },
        "provisioningStatusInfo": n => { provisioningObjectSummary.provisioningStatusInfo = n.getObjectValue<ProvisioningStatusInfo>(createProvisioningStatusInfoFromDiscriminatorValue); },
        "provisioningSteps": n => { provisioningObjectSummary.provisioningSteps = n.getCollectionOfObjectValues<ProvisioningStep>(createProvisioningStepFromDiscriminatorValue); },
        "servicePrincipal": n => { provisioningObjectSummary.servicePrincipal = n.getObjectValue<ProvisioningServicePrincipal>(createProvisioningServicePrincipalFromDiscriminatorValue); },
        "sourceIdentity": n => { provisioningObjectSummary.sourceIdentity = n.getObjectValue<ProvisionedIdentity>(createProvisionedIdentityFromDiscriminatorValue); },
        "sourceSystem": n => { provisioningObjectSummary.sourceSystem = n.getObjectValue<ProvisioningSystem>(createProvisioningSystemFromDiscriminatorValue); },
        "targetIdentity": n => { provisioningObjectSummary.targetIdentity = n.getObjectValue<ProvisionedIdentity>(createProvisionedIdentityFromDiscriminatorValue); },
        "targetSystem": n => { provisioningObjectSummary.targetSystem = n.getObjectValue<ProvisioningSystem>(createProvisioningSystemFromDiscriminatorValue); },
        "tenantId": n => { provisioningObjectSummary.tenantId = n.getStringValue(); },
    }
}
