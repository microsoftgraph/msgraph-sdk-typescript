import {PlannerExternalReferencesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerExternalReferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerExternalReferencesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerExternalReferencesImpl();
}
