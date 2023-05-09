import {deserializeIntoPlannerExternalReferences} from './deserializeIntoPlannerExternalReferences';
import {PlannerExternalReferences} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerExternalReferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerExternalReferences;
}
