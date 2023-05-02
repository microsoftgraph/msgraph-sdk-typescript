import {deserializeIntoTermsAndConditions} from './deserializeIntoTermsAndConditions';
import {TermsAndConditions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditions;
}
