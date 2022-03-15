import {OfficeGraphInsights} from './officeGraphInsights';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfficeGraphInsightsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfficeGraphInsights {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OfficeGraphInsights();
}
