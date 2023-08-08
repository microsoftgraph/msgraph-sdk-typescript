import {createMobileAppAssignmentFromDiscriminatorValue} from '../../../../models/createMobileAppAssignmentFromDiscriminatorValue';
import type {MobileAppAssignment} from '../../../../models/mobileAppAssignment';
import {serializeMobileAppAssignment} from '../../../../models/serializeMobileAppAssignment';
import type {AssignPostRequestBody} from './assignPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mobileAppAssignments": n => { assignPostRequestBody.mobileAppAssignments = n.getCollectionOfObjectValues<MobileAppAssignment>(createMobileAppAssignmentFromDiscriminatorValue); },
    }
}
