import {createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import type {ManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/managedDeviceMobileAppConfigurationAssignment';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/serializeManagedDeviceMobileAppConfigurationAssignment';
import type {AssignPostRequestBody} from './assignPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "assignments": n => { assignPostRequestBody.assignments = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>(createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue); },
    }
}
