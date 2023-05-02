import {createMobileAppAssignmentFromDiscriminatorValue} from '../../../../models/createMobileAppAssignmentFromDiscriminatorValue';
import {MobileAppAssignment} from '../../../../models/mobileAppAssignment';
import {serializeMobileAppAssignment} from '../../../../models/serializeMobileAppAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mobileAppAssignments": n => { assignPostRequestBody.mobileAppAssignments = n.getCollectionOfObjectValues<MobileAppAssignment>(createMobileAppAssignmentFromDiscriminatorValue); },
    }
}
