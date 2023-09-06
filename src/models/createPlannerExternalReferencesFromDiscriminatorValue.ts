import { deserializeIntoPlannerExternalReferences } from './deserializeIntoPlannerExternalReferences';
import { type PlannerExternalReferences } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlannerExternalReferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerExternalReferences;
}
