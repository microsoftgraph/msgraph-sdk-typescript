import {OfficeGraphInsightsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfficeGraphInsightsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfficeGraphInsightsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OfficeGraphInsightsImpl();
}
