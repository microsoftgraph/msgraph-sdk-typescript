import type {Initiator} from './initiator';
import type {ModifiedProperty} from './modifiedProperty';
import type {ProvisionedIdentity} from './provisionedIdentity';
import {ProvisioningAction} from './provisioningAction';
import type {ProvisioningObjectSummary} from './provisioningObjectSummary';
import type {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import type {ProvisioningStatusInfo} from './provisioningStatusInfo';
import type {ProvisioningStep} from './provisioningStep';
import type {ProvisioningSystem} from './provisioningSystem';
import {serializeEntity} from './serializeEntity';
import {serializeInitiator} from './serializeInitiator';
import {serializeModifiedProperty} from './serializeModifiedProperty';
import {serializeProvisionedIdentity} from './serializeProvisionedIdentity';
import {serializeProvisioningServicePrincipal} from './serializeProvisioningServicePrincipal';
import {serializeProvisioningStatusInfo} from './serializeProvisioningStatusInfo';
import {serializeProvisioningStep} from './serializeProvisioningStep';
import {serializeProvisioningSystem} from './serializeProvisioningSystem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningObjectSummary(writer: SerializationWriter, provisioningObjectSummary: ProvisioningObjectSummary | undefined = {} as ProvisioningObjectSummary) : void {
        serializeEntity(writer, provisioningObjectSummary)
        writer.writeDateValue("activityDateTime", provisioningObjectSummary.activityDateTime);
        writer.writeStringValue("changeId", provisioningObjectSummary.changeId);
        writer.writeStringValue("cycleId", provisioningObjectSummary.cycleId);
        writer.writeNumberValue("durationInMilliseconds", provisioningObjectSummary.durationInMilliseconds);
        writer.writeObjectValue<Initiator>("initiatedBy", provisioningObjectSummary.initiatedBy, serializeInitiator);
        writer.writeStringValue("jobId", provisioningObjectSummary.jobId);
        writer.writeCollectionOfObjectValues<ModifiedProperty>("modifiedProperties", provisioningObjectSummary.modifiedProperties, serializeModifiedProperty);
        writer.writeEnumValue<ProvisioningAction>("provisioningAction", provisioningObjectSummary.provisioningAction);
        writer.writeObjectValue<ProvisioningStatusInfo>("provisioningStatusInfo", provisioningObjectSummary.provisioningStatusInfo, serializeProvisioningStatusInfo);
        writer.writeCollectionOfObjectValues<ProvisioningStep>("provisioningSteps", provisioningObjectSummary.provisioningSteps, serializeProvisioningStep);
        writer.writeObjectValue<ProvisioningServicePrincipal>("servicePrincipal", provisioningObjectSummary.servicePrincipal, serializeProvisioningServicePrincipal);
        writer.writeObjectValue<ProvisionedIdentity>("sourceIdentity", provisioningObjectSummary.sourceIdentity, serializeProvisionedIdentity);
        writer.writeObjectValue<ProvisioningSystem>("sourceSystem", provisioningObjectSummary.sourceSystem, serializeProvisioningSystem);
        writer.writeObjectValue<ProvisionedIdentity>("targetIdentity", provisioningObjectSummary.targetIdentity, serializeProvisionedIdentity);
        writer.writeObjectValue<ProvisioningSystem>("targetSystem", provisioningObjectSummary.targetSystem, serializeProvisioningSystem);
        writer.writeStringValue("tenantId", provisioningObjectSummary.tenantId);
}
