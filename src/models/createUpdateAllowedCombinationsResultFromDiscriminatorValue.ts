import {UpdateAllowedCombinationsResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateAllowedCombinationsResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateAllowedCombinationsResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateAllowedCombinationsResult();
}
